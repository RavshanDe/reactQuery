import React from "react";
import { useQuery } from "react-query";
const Example = () => {
  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  }
  const { data, isLoading, isError, error } = useQuery("posts", fetchData);
  if (isLoading) {
    return <h1>Yuklanmoqda...</h1>;
  }
  if (isError) {
    return <pre>Yuklanishda xatolik bor. {error.message}</pre>;
  }
  return (
    <div>
      <h1>Posts</h1>
      {data.map((post, idx) => {
        return <li key={idx}>{post.title}</li>;
      })}
    </div>
  );
};

export default Example;
