import React from "react";

function Post({ post }) {
  return (
    <li className="shadow m-3 p-3">
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <div>
        {post.tags.map((tag) => {
          return <span class="badge text-bg-primary m-1">{tag}</span>;
        })}
      </div>
      <div>
        <b>Likes:{post.reactions.likes}</b>
        <b>Disikes:{post.reactions.dislikes}</b>
        <b>Views: {post.views}</b>
      </div>
    </li>
  );
}

export default Post;
