import React, { Component } from 'react';

class NewsLetter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          name: 'src/assets/children-s-copy-2.png',
          image: 'src/assets/bitmap-copy-2.png'
        },
        {
          name: 'src/assets/crafts-hobbies-copy.png',
          image: 'src/assets/bitmap-copy-9.png'
        }
      ]
    };
  }

  render() {
    return (
      <div className="blue-bg">
        <img
          className="Book-Recommendations"
          src={require('../assets/book-recommendations.png')}
        />
        <img
          className="categories"
          src={require('../assets/choose-from-the-cate.png')}
        />
        <div>
          {
            this.state.categories.map(( category, i )=> {
              return(
                <div className="category-block" key={i}>
                  <input type="checkbox" />
                  <img className="category-name" src={require(category.name)}/>
                  <img className="category-image" src={require(category.image)}/>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default NewsLetter;


// need to require in src attribute when using webpack and accessing local images
