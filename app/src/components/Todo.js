import React from "react";
import { useMutation } from "react-query";
import axios from "axios";
const Todo = () => {
  const mutation = useMutation((newTodo) => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", newTodo);
  });
  return (
    <>
      {mutation.isLoading ? (
        <h1>Yuklanmoqda...</h1>
      ) : (
        <>
          {mutation.isError ? <pre>Xatolik mavjud</pre> : null}{" "}
          {mutation.isSuccess ? <div>Success</div> : null}
        </>
      )}
      <button
        onClick={() => {
          mutation.mutate({ title: "Do whatever do..." });
        }}
      >
        Clicker
      </button>
    </>
  );
};

export default Todo;
