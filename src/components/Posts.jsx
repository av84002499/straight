import React from 'react';
import axios from 'axios';
import PostList from './Post/PostList';
import PostSingle from './Post/PostSingle';
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.updateCurrentPost = this.updateCurrentPost.bind(this);
  }
  state = {
    Posts: [],
    currentPost: {
      "userId": 0,
      "id":0,
      "title": "title",
      "body": "body",
    }
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    axios.get(url)
      .then((Response) => {
        // console.log(Response.data);
        this.setState({
          Posts: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentPost(post) {
    this.setState({
      currentPost: post
    })

  }


  render() {
    return (
      <div className="container-fluid">
        <div className='row'>
          <div className='col s8'><PostList posts={this.state.Posts} updateCurrentPost={this.updateCurrentPost} /></div>
          <div className='col s4'><PostSingle post={this.state.currentPost} /></div>
        </div>
      </div>
    );
  }
}

export default Posts;
