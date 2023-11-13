import { User } from "@/types/User";
import React, { useEffect } from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import firebase from "@/firebase";
import { createUser } from "@/services/UserService";

export const useUsersEffect = () => {
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

  return { dbUser, firebaseUser };
};
