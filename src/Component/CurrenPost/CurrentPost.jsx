import React from "react";
import "./CureenPost.css";
function CurrentPost(props) {
  let currentPosts = props.value;
  return (
    <>
      <div className="news-display">
        <div className="image-box">
          <img src={currentPosts.urlToImage} alt="NewsImage" />
        </div>
        <div className="setImgDetails"> 
        <div  className="personalTopic">
          <span className="imagedetailsTopic">Author</span> : {currentPosts.author}
        </div>
        <div className="personalTopic">
          <span className="imagedetailsTopic">Description</span> : {currentPosts.description}
        </div>
        <div className="personalTopic">
          <span className="imagedetailsTopic">Date & time</span> : {currentPosts.publishedAt}
        </div>
        <div className="personalTopic">
        <a href={currentPosts.url} target="_blank">
            Read More
          </a>
        </div>
        </div>
      </div>
    </>
  );
}

export default CurrentPost;
