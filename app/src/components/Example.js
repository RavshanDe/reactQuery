import React from "react";
import { useQuery } from "react-query";
async function fetchPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}
const Example = () => {
  const { data, error, isLoading, isError } = useQuery("posts", fetchPost);
  if (isLoading) {
    return <h1>Yuklanmoqda...</h1>;
  }
  if (isError) {
    return <pre>Yuklanishda xatolik bor... {error.message}</pre>;
  }
  return (
    <>
      <h1>Posts</h1>
      {data.map((post, idx) => {
        return <li key={idx}>{post.title}</li>;
      })}
    </>
  );
};

export default Example;
