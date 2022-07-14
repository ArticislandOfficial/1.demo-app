import React, { useState } from "react";

const PostPage = () => {
  const [posts, setPosts] = useState([]);

  const extraerPosts = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();

    // console.log(data);
    setPosts(data);
  };
  return (
    <>
      <header>
        <h1>Posts</h1>
      </header>
      <main>
        <article>
          <button onClick={extraerPosts}>Extraer posts</button>
        </article>
        <article>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </article>
      </main>
    </>
  );
};

export default PostPage;
