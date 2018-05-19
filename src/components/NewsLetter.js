import React, { Component } from 'react';
import SubForm from './SubForm';

class NewsLetter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hideButton: '',
      blueBgVh: '',
      hideCategories: [
      {
        class: 'hide-category-block',
        name: require("../assets/food-drink-copy-2.png"),
        image: require("../assets/bitmap-copy-12.png")
      },
      {
        class: 'hide-category-block',
        name: require("../assets/gardening-copy.png"),
        image: require("../assets/bitmap-copy-11.png")
      },
      {
        class: 'hide-category-block',
        name: require("../assets/health-fitness-copy-2.png"),
        image: require("../assets/bitmap-copy-6.png")
      },
      {
        class: 'hide-category-block',
        name: require("../assets/history-reference-copy-2.png"),
        image: require("../assets/bitmap-copy-3.png")
      },
      {
        class: 'hide-category-block',
        name: require("../assets/lego-books-copy-2.png"),
        image: require("../assets/bitmap-copy-8.png")
      },
      {
        class: 'hide-category-block',
        name: require("../assets/marvel-copy.png"),
        image: require("../assets/bitmap-copy-10.png")
      },
      {
        class: 'hide-category-block',
        name: require("../assets/pregnancy-parentin-copy-2.png"),
        image: require("../assets/bitmap-copy-4.png")
      },
      {
        class: 'hide-category-block',
        name: require("../assets/star-wars-copy-2.png"),
        image: require("../assets/bitmap-copy-5.png")
      },
      {
        class: 'hide-category-block',
        name: require("../assets/travel-copy-3.png"),
        image: require("../assets/bitmap-copy-13.png")
      },
    ]

    };

  }

  // handleChange =()=> {
  //   this.setState({
  //     checked: !this.state.categories.checked
  //   })
  // }

  handleClick =()=> {
    this.setState({
      hideButton: 'hide-button',
      blueBgVh: 'blue-bg-vh',
      hideCategories: [
      {
        class: '',
        name: require("../assets/food-drink-copy-2.png"),
        image: require("../assets/bitmap-copy-12.png")
      },
      {
        class: '',
        name: require("../assets/gardening-copy.png"),
        image: require("../assets/bitmap-copy-11.png")
      },
      {
        class: '',
        name: require("../assets/health-fitness-copy-2.png"),
        image: require("../assets/bitmap-copy-6.png")
      },
      {
        class: '',
        name: require("../assets/history-reference-copy-2.png"),
        image: require("../assets/bitmap-copy-3.png")
      },
      {
        class: '',
        name: require("../assets/lego-books-copy-2.png"),
        image: require("../assets/bitmap-copy-8.png")
      },
      {
        class: '',
        name: require("../assets/marvel-copy.png"),
        image: require("../assets/bitmap-copy-10.png")
      },
      {
        class: '',
        name: require("../assets/pregnancy-parentin-copy-2.png"),
        image: require("../assets/bitmap-copy-4.png")
      },
      {
        class: '',
        name: require("../assets/star-wars-copy-2.png"),
        image: require("../assets/bitmap-copy-5.png")
      },
      {
        class: '',
        name: require("../assets/travel-copy-3.png"),
        image: require("../assets/bitmap-copy-13.png")
      },
    ]
    })
  }

  render() {
    return (
      <div className={`blue-bg ${this.state.blueBgVh}`}>
        <div className="NewsLetterContainer">

          <div className="book-recommendations"></div>
          <div className="category-subheading"></div>

<div className="category-container">
    <div className="category-flex">
            <div className="category-block">
              <input type="checkbox"/>
              <img src={require("../assets/children-s-copy-2.png")} alt=""/>
              <img src={require("../assets/bitmap-copy-2.png")} alt=""/>
            </div>

            <div className="category-block">
              <input type="checkbox"/>
              <img src={require("../assets/crafts-hobbies-copy.png")} alt=""/>
              <img src={require("../assets/bitmap-copy-9.png")} alt=""/>
            </div>

            <div className="category-block">
              <input type="checkbox"/>
              <img src={require("../assets/education-teachers-copy-2.png")} alt=""
              />
              <img
                src={require("../assets/bitmap-copy-7@2x.png")}
                alt=""
                className="category-image"
            />
            </div>

            <button
              className='show-all-categories'
              id={this.state.hideButton}
              onClick={this.handleClick}
              >
                Show All Categories &#709;
            </button>

            {
              this.state.hideCategories.map((category, i) => {
                return(
                  <div className={`${category.class} category-block`}>
                    <input type="checkbox"/>
                    <img src={category.name} alt="" />
                    <img src={category.image} alt="" />
                  </div>
                )
              })
            }
      </div>
</div>

        <SubForm />
      </div>

      </div>
    );
  }
}

export default NewsLetter;


// need to require in src attribute when using webpack and accessing local images
