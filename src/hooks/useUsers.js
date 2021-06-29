import React, { useEffect, useState } from "react";
import firebase from "../Firebase";

export const useUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getUsers = firebase
      .firestore()
      .collection("users")
      .onSnapshot(
        (snapshot) => {
          const newUsers = snapshot.docs.map((user) => ({
            ...user.data(),
            docId: user.id,
          }));
          setData(newUsers);
          setIsLoading(false);
        },
        (error) => setIsError(error)
      );

    return () => {
      getUsers();
    };
  }, []);

  return {
    isLoading,
    isError,
    data,
  };
};
