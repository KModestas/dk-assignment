import React, { Component } from 'react';

class NewsLetter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          name: require('../assets/children-s-copy-2.png'),
          image: require('../assets/bitmap-copy-2.png')
        },
        {
          name: require('../assets/crafts-hobbies-copy.png'),
          image: require('../assets/bitmap-copy-9.png')
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
          alt=""
        />
        <img
          className="categories"
          src={require('../assets/choose-from-the-cate.png')}
          alt=""
        />
        <div>
          {
            this.state.categories.map(( category, i )=> {
              return(
                <div className="category-block" key={i}>
                  <input type="checkbox" />
                  <img className="category-name" alt="" src={category.name}/>
                  <img className="category-image" alt="" src={category.image}/>
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
