import React from "react";
import { useInfiniteQuery } from "react-query";
import User from "./User";
const InfiniteScroll = () => {
  async function fetchUser({ pageParam = 1 }) {
    const res = await fetch(
      `https://randomuser.me/api/?page=${pageParam}&results=10`
    );
    return res.json();
  }
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["datas"], fetchUser, {
    getNextPageParam: (lastPage, pages) => {
      return lastPage.info.page + 1;
    },
  });
  if (isLoading) {
    return <h1>Yuklanmoqda...</h1>;
  }
  if (isError) {
    return <pre>Xatolik</pre>;
  }
  return (
    <>
      <h2>Infinite Scroll</h2>
      {data.pages.map((page) => {
        page.results.map((user, idx) => {
          <User key={idx} user={user} />;
        });
      })}
      <button onClick={() => fetchNextPage}>New People</button>
      {isFetching && !isFetchingNextPage ? "Fetching" : null}
    </>
  );
};

export default InfiniteScroll;
