import React from "react";

const PostSingle = (props) => {
  return (
    <div className="row m-3">
      <div className="col s12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{props.post.title}</h5>
            <hr />
            <p class="card-text">{props.post.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSingle;
