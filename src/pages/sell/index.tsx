/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
import { useUsersEffect } from "@/effects/useUsersEffect";
import firebase from "@/firebase";
import CreateProductForm from "../components/CreateProductForm";

function SellPage() {
  const { firebaseUser } = useUsersEffect();
  return (
    <>
      {firebaseUser ? (
        <CreateProductForm />
      ) : (
        <button type="button" onClick={firebase.signIn}>
          Sign In
        </button>
      )}
    </>
  );
}

export default SellPage;
