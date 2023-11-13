/* eslint-disable no-nested-ternary */
import firebase from "@/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User as FirebaseUser,
} from "firebase/auth";
import React, { useEffect } from "react";
import { Button } from "antd";
import { createUser } from "@/services/UserService";
import { User } from "@/types/User";
import CreateShopModal from "../components/CreateShopForm";
import CreateProductModal from "../components/CreateProductForm";

const provider = new GoogleAuthProvider();

function SellPage() {
  const [dbUser, setDbUser] = React.useState<User | null>();
  const [firebaseUser, setFirebaseUser] = React.useState<FirebaseUser | null>();
  onAuthStateChanged(firebase.auth, (fireUser) => {
    if (fireUser) {
      setFirebaseUser(fireUser);
    } else {
      setFirebaseUser(null);
    }
  });

  useEffect(() => {
    async function createDBUser(uid: string) {
      const createdUser = await createUser(uid);
      setDbUser(createdUser);
    }
    if (firebaseUser && !dbUser) {
      createDBUser(firebaseUser.uid);
    }
  }, [firebaseUser, dbUser]);

  return (
    <div>
      {typeof dbUser !== "undefined" &&
        (dbUser ? (
          !dbUser.shops.length ? (
            <CreateShopModal userId={dbUser.id} />
          ) : (
            <CreateProductModal shops={dbUser.shops} />
          )
        ) : (
          <Button
            onClick={() => {
              signInWithPopup(firebase.auth, provider).then((result) => {
                setFirebaseUser(result.user);
              });
            }}
          >
            Login
          </Button>
        ))}
    </div>
  );
}

export default SellPage;
