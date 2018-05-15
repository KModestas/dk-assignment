import React, { Component } from 'react';

class NewsLetter extends Component {
  render() {
    return (
      <div className="blue-bg">
        <img
          className="Book-Recommendations"
          src={require('../assets/book-recommendations.png')}
        />
      </div>
    );
  }
}

export default NewsLetter;


// need to require in src attribute when using webpack and accessing local images
