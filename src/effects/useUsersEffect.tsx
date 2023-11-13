import { User } from "@/types/User";
import React, { useEffect } from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import firebase from "@/firebase";
import { createUser } from "@/services/UserService";
import useSWR from "swr";
import axios from "axios";

export const useUsersEffect = () => {
  const [firebaseUser, setFirebaseUser] = React.useState<FirebaseUser | null>();
  const { data: dbUser, mutate } = useSWR<User, unknown, string>(
    "/api/users",
    async (key) => {
      if (!firebaseUser) {
        return null;
      }
      const res = await axios.get(`${key}/${firebaseUser?.uid}`);
      return res.data;
    }
  );

  useEffect(() => {
    onAuthStateChanged(firebase.auth, (fireUser) => {
      if (fireUser) {
        setFirebaseUser(fireUser);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);

  useEffect(() => {
    async function createDBUser(uid: string) {
      await createUser(uid);
      mutate();
    }
    if (firebaseUser && !dbUser) {
      createDBUser(firebaseUser.uid);
    }
  }, [firebaseUser, mutate, dbUser]);

  return { dbUser, firebaseUser, mutate };
};
