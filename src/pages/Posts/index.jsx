import React from "react";
import { useParams } from "react-router-dom";

export const Posts = () => {
  let params = useParams();
  const { id } = params;
  return (
    <>
      {id ? (
        <div>Hey it's posts from id {id}</div>
      ) : (
        <div>no id to be shown</div>
      )}
    </>
  );
};
