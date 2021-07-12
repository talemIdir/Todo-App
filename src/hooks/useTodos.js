import { useEffect, useState } from "react";
import firebase from "../Firebase";

export const useTodos = (selectedProject) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);
  const [onGoingTasks, setOnGoingTasks] = useState([]);
  useEffect(() => {
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

          setCompletedTasks(todos.filter((todo) => todo.completed === true));
          setOnGoingTasks(todos.filter((todo) => todo.completed === false));
          setIsLoading(false);
        },
        (error) => setIsError(error)
      );
    return () => {
      getTodos();
    };
  }, [selectedProject]);

  return {
    isLoading,
    isError,
    completedTasks,
    onGoingTasks,
  };
};
