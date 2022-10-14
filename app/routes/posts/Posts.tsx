import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

type PostProps = {
  list: Post[]
}


const Posts = ({ list }: PostProps) => {
  return <React.Fragment>
    {list.map(({ id, title, body }) => (
        <li key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </li>
      ))}
  </React.Fragment>
}

export default Posts