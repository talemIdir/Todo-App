import { useEffect, useState } from "react";
import firebase from "../Firebase";

export const useProjects = (userUID) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

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
          setIsLoading(false);
        },
        (error) => setIsError(error)
      );
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
