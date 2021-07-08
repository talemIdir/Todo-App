import { useEffect, useState } from "react";
import firebase from "../Firebase";

export const useTodos = (selectedProject, completed) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getTodos = firebase
      .firestore()
      .collection("todos")
      .where("projectID", "==", selectedProject.docId)
      .onSnapshot(
        (snapshot) => {
          const todos = snapshot.docs.map((todo) => ({
            ...todo.data(),
            docId: todo.id,
          }));

          setData(todos.filter((todo) => todo.completed === completed));
          setIsLoading(false);
        },
        (error) => setIsError(error)
      );
    return () => {
      getTodos();
    };
  }, [selectedProject, completed]);

  return {
    isLoading,
    isError,
    data,
  };
};
