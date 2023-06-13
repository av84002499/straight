import React from "react";

const PostList = (props) => {
  console.log(props.posts);
  return (
    <div className="m-3">
      <h4>Posts</h4>
      <div className="vh-100 overflow-auto">
        {props.posts.map((post) => (
          <button type="button" class="btn bg-white border-secondary text-start w-100 m-2" key={post.id} onClick={props.updateCurrentPost.bind(this, post)}>
            {post.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostList;
