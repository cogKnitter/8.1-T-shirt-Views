import React from 'react'
import Bootstrap from 'bootstrap-sass'

export default React.createClass({
  getDefaultProps(){
    return {
          shirts: [
        {
          id: 1,
          imageUrlFront: "http://fillmurray.com/250/250",
          imageUrlBack: "http://placecage.com/250/250",
          title: "Save my Trees",
          price: 19

        },
        {
          id: 2,
          imageUrlFront: "http://fillmurray.com/250/250",
          imageUrlBack: "http://placecage.com/250/250",
          title: "Nature Lover",
          price: 19

        },
        {
          id: 3,
          imageUrlFront: "http://fillmurray.com/250/250",
          imageUrlBack: "http://placecage.com/250/250",
          title: "Forrest Walk",
          price: 19

        }
      ]
    }
  },
  render() {
    return (
      <section className="views-block">
        <h1 className="heading">T shirts</h1>
        <div className="row">
          {this.props.shirts.map(function(resp, i){
            return <div key={i} className="col-md-4">
              <div className="view__wrapper">
                <div id={resp.id} className="carousel" data-ride="carousel" data-interval="false">
                  <div className="carousel-inner">
                    <div className="item active">
                    <img className="shirt__image" src={resp.imageUrlFront}/>
                    </div>
                    <div className="item">
                    <img className="shirt__image" src={resp.imageUrlBack}/>
                    </div>
                  </div>

                  <a className="carousel-swap" href={`#${resp.id}`} role="button" data-slide="prev">
                    <span className="flip glyphicon glyphicon-share"></span>
                  </a>
                </div>
                <div className="btn-group bar">
                  <div>
                    <button className="btn btn-default bar__el"><span className="glyphicon glyphicon-retweet icon carousel-swap" href={`#${resp.id}`} data-slide="prev"></span></button>
                    <button className="btn btn-default bar__el"><span className="glyphicon glyphicon-heart-empty icon"></span></button>
                    <div className="dropup dropup__button">
                    <button className="btn btn-default bar__el" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="glyphicon icon">XL</span></button>
                    <ul className="dropdown-menu">
                      <li className="size__li">XS</li>
                      <li className="size__li">S</li>
                      <li className="size__li">M</li>
                      <li className="size__li">L</li>
                    </ul>
                    </div>
                    <div className="dropup dropup__button">
                    <button className="btn btn-default bar__el dropdown-toggle square__wrapper" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><div className="color__square"></div></button>
                    <ul className="dropdown-menu dropup__wrapper">
                      <li className="square__wrapper"><div className="color__square color__square--1"></div></li>
                      <li className="square__wrapper"><div className="color__square color__square--2"></div></li>
                      <li className="square__wrapper"><div className="color__square color__square--3"></div></li>
                      <li className="square__wrapper"><div className="color__square"></div></li>
                    </ul>
                    </div>
                    <button className="btn btn-default bar__el"><span className="glyphicon glyphicon-shopping-cart icon"></span></button>
                  </div>
                </div>

                <h4 className="item__title">{resp.title}</h4>
                <h4 className="item__price">${resp.price}</h4>

              </div>
            </div>
          })}
        </div>
    </section>
    )
  }
})
