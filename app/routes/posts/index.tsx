import { useState, useEffect } from "react";
import Posts from "./Posts";

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://jsonplaceholder.typicode.com/posts?_start=0&_limit=5"
      );

      if (response.ok) {
        const json = await response.json();
        setPosts(json);
      }
    })();
  }, []);

  if (!posts?.length) return <div>no posts found!</div>;

  return (
    <div>
      <h1>POST LIST</h1>
      <Posts list={posts} />
    </div>
  );
};


export default PostsList;
