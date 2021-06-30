import { useEffect, useState } from "react";
import firebase from "../Firebase";

export const useProjects = (userUID) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProjects = firebase
      .firestore()
      .collection("projects")
      .where("userUID", "==", userUID)
      .onSnapshot(
        (snapshot) => {
          const newProjects = snapshot.docs.map((project) => ({
            ...project.data(),
            docId: project.id,
          }));
          setData(newProjects);
        },
        (error) => setIsError(error)
      );
    setIsLoading(false);
    return () => {
      getProjects();
    };
  }, [userUID]);

  return {
    isLoading,
    isError,
    data,
  };
};
