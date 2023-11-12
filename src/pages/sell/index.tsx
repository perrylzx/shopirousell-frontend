import firebase from "@/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import React from "react";
import { Button } from "antd";
import CreateShopModal from "../components/CreateShopModal";
import CreateProductModal from "../components/CreateProductModal";

const provider = new GoogleAuthProvider();

function SellPage() {
  const [user, setUser] = React.useState<User | null>();
  onAuthStateChanged(firebase.auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser(firebaseUser);
    } else {
      setUser(null);
    }
  });
  return (
    <div>
      {typeof user !== "undefined" &&
        (user ? (
          <>
            <CreateShopModal />
            <CreateProductModal />
          </>
        ) : (
          <Button
            onClick={() => {
              signInWithPopup(firebase.auth, provider).then((result) => {
                setUser(result.user);
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
