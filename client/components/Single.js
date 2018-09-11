import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends Component {
  render() {
    const { postId } = this.props.params;
    // index of post
    const i = this.props.posts.findIndex(post => post.code === postId);
    // console.log(i);
    // get us the post
    const post = this.props.posts[i];
    console.log(post);

    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
}
