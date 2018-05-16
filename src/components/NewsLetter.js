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
        },
        {
          name: require('../assets/education-teachers-copy-2.png'),
          image: require('../assets/bitmap-copy-7@2x.png')
        },
        {
          name: require('../assets/food-drink-copy-2.png'),
          image: require('../assets/bitmap-copy-12.png')
        },
        {
          name: require('../assets/gardening-copy.png'),
          image: require('../assets/bitmap-copy-11.png')
        },
        {
          name: require('../assets/health-fitness-copy-2.png'),
          image: require('../assets/bitmap-copy-6.png')
        },
        {
          name: require('../assets/history-reference-copy-2.png'),
          image: require('../assets/bitmap-copy-3.png')
        },
        {
          name: require('../assets/lego-books-copy-2.png'),
          image: require('../assets/bitmap-copy-8.png')
        },
        {
          name: require('../assets/marvel-copy.png'),
          image: require('../assets/bitmap-copy-10.png')
        },
        {
          name: require('../assets/pregnancy-parentin-copy-2.png'),
          image: require('../assets/bitmap-copy-4.png')
        },
        {
          name: require('../assets/star-wars-copy-2.png'),
          image: require('../assets/bitmap-copy-5.png')
        },
        {
          name: require('../assets/travel-copy-3.png'),
          image: require('../assets/bitmap-copy-13.png')
        }
      ]
    };
  }

  render() {
    return (
      <div className="blue-bg">
        <div className="NewsLetterContainer">
        <img
          className="Book-Recommendations headings"
          src={require('../assets/book-recommendations.png')}
          alt=""
        />
        <img
          className="categories"
          src={require('../assets/choose-from-the-cate.png')}
          alt=""
        />
        <div className="category-block">
          {
            this.state.categories.map(( category, i )=> {
              return(
                <div className="category" key={i}>
                  <input type="checkbox" />
                  <img className="category-name" alt="" src={category.name}/>
                  <img className="category-image" alt="" src={category.image}/>
                </div>
              );
            })
          }
        </div>
      </div>
      </div>
    );
  }
}

export default NewsLetter;


// need to require in src attribute when using webpack and accessing local images
