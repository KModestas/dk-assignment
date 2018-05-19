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
        class: 'hide',
        name: require("../assets/food-drink-copy-2.png"),
        image: require("../assets/bitmap-copy-12.png")
      },
      {
        class: 'hide',
        name: require("../assets/gardening-copy.png"),
        image: require("../assets/bitmap-copy-11.png")
      },
      {
        class: 'hide',
        name: require("../assets/health-fitness-copy-2.png"),
        image: require("../assets/bitmap-copy-6.png")
      },
      {
        class: 'hide',
        name: require("../assets/history-reference-copy-2.png"),
        image: require("../assets/bitmap-copy-3.png")
      },
      {
        class: 'hide',
        name: require("../assets/lego-books-copy-2.png"),
        image: require("../assets/bitmap-copy-8.png")
      },
      {
        class: 'hide',
        name: require("../assets/marvel-copy.png"),
        image: require("../assets/bitmap-copy-10.png")
      },
      {
        class: 'hide',
        name: require("../assets/pregnancy-parentin-copy-2.png"),
        image: require("../assets/bitmap-copy-4.png")
      },
      {
        class:'hide',
        name: require("../assets/star-wars-copy-2.png"),
        image: require("../assets/bitmap-copy-5.png")
      },
      {
        class: 'hide',
        name: require("../assets/travel-copy-3.png"),
        image: require("../assets/bitmap-copy-13.png")
      }
    ]

    };

  }

  handleClick =(newArray)=> {
    this.setState({
    hideButton: 'hide',
    blueBgVh: 'blue-bg-vh',
    ...this.state.hideCategories,
    newArray
    })
  }

  render() {

    const newArray = []


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
              className={`${this.state.hideButton} show-all-categories`}
              onClick={() => this.handleClick(newArray)}
              >
                Show All Categories &#709;
            </button>

            {
              this.state.hideCategories.map((category) => {
                return(
                  <div className={`${category.class} category-block`}>
                    <input type="checkbox"/>
                    <img src={category.name} alt="" />
                    <img src={category.image} alt="" />
                    { category.class = '' }
                    { newArray.push(category) }
                    { console.log(newArray) }
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
