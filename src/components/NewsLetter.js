import React, { Component } from 'react';
import SubForm from './SubForm';

class NewsLetter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          name: require('../assets/children-s-copy-2.png'),
          image: require('../assets/bitmap-copy-2.png'),
          checked: true
        },
        {
          name: require('../assets/crafts-hobbies-copy.png'),
          image: require('../assets/bitmap-copy-9.png'),
          checked: true
        },
        {
          name: require('../assets/education-teachers-copy-2.png'),
          image: require('../assets/bitmap-copy-7@2x.png'),
          checked: true
        },
        {
          name: require('../assets/food-drink-copy-2.png'),
          image: require('../assets/bitmap-copy-12.png'),
          checked: true
        },
        {
          name: require('../assets/gardening-copy.png'),
          image: require('../assets/bitmap-copy-11.png'),
          checked: true
        },
        {
          name: require('../assets/health-fitness-copy-2.png'),
          image: require('../assets/bitmap-copy-6.png'),
          checked: true
        },
        {
          name: require('../assets/history-reference-copy-2.png'),
          image: require('../assets/bitmap-copy-3.png'),
          checked: true
        },
        {
          name: require('../assets/lego-books-copy-2.png'),
          image: require('../assets/bitmap-copy-8.png'),
          checked: true
        },
        {
          name: require('../assets/marvel-copy.png'),
          image: require('../assets/bitmap-copy-10.png'),
          checked: true
        },
        {
          name: require('../assets/pregnancy-parentin-copy-2.png'),
          image: require('../assets/bitmap-copy-4.png'),
          checked: true
        },
        {
          name: require('../assets/star-wars-copy-2.png'),
          image: require('../assets/bitmap-copy-5.png'),
          checked: true
        },
        {
          name: require('../assets/travel-copy-3.png'),
          image: require('../assets/bitmap-copy-13.png'),
          checked: true
        }
      ],
      valid: false
    };

  }

  handleChange =()=> {
    this.setState({
      checked: !this.state.categories.checked
    })
  }

  render() {
    return (
      <div className="blue-bg">
        <div className="NewsLetterContainer">
        <img
          className="Book-Recommendations"
          src={require('../assets/book-recommendations.png')}
          alt=""
        />
        <img
          className="category-subheading"
          src={require('../assets/choose-from-the-cate.png')}
          alt=""
        />
        <div className="category-container">
          {
            this.state.categories.map(( category, i )=> {

              return(
                <div className="category-block" key={i}>
                  <input
                    type="checkbox"
                    onChange={ this.handleChange }
                    checked={ this.state.categories.checked }
                  />
                  <img
                    alt=""
                    src={category.name}
                  />
                  <img
                    className="category-image"
                    alt=""
                    src={category.image}
                  />
                </div>
              );
            })
          }
        </div>
        <SubForm />
      </div>

      </div>
    );
  }
}

export default NewsLetter;


// need to require in src attribute when using webpack and accessing local images
