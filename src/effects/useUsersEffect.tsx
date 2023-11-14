import { User } from "@/types/User";
import React, { useEffect } from "react";
import {
  onAuthStateChanged,
  User as FirebaseUser,
  getAdditionalUserInfo,
} from "firebase/auth";
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
        return undefined;
      }
      const res = await axios.get(`${key}/${firebaseUser?.uid}`);
      return res.data;
    }
  );

  useEffect(() => {
    onAuthStateChanged(firebase.auth, (user) => {
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);

  const signIn = async () => {
    const userCredential = await firebase.signIn();
    const additionalUserInfo = getAdditionalUserInfo(userCredential);
    if (additionalUserInfo?.isNewUser) {
      await createUser(userCredential.user.uid);
      mutate();
    }
  };

  return { dbUser, firebaseUser, mutate, signIn };
};
