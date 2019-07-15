import React, { Component } from 'react';

import './peru.css'
class AdventuresItem extends Component {
  render() {
    console.log('props', this.props.itemInfo.item)
    return (
      <article className='adventures-item'>
        <div className='card'>
          <div className='imageInfo'>
            <img src={this.props.mainImage} alt='img1' className='main-img' />
            <div className='review'>
              <div className='user'>
                <img src={this.props.itemInfo.item.guideImage} alt='User' />
              </div>
              <div className='rating'>
                <b>{this.props.itemInfo.item.title}</b>
                {/* <ul>
                  <li>
                    <i className='fa fa-star' aria-hidden='true' /> {this.props.itemInfo.item.rating.stars}
                  </li>
                  <li>
                    <i className='fa fa-circle' aria-hidden='true' /> {this.props.itemInfo.item.rating.review} review
                  </li>
                  <li>
                    <i className='fa fa-circle' aria-hidden='true' /> {this.props.itemInfo.item.rating.adventures} adventures
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='status'>
              <span>{this.props.itemInfo.item.status.category}: </span>
              <span>{this.props.itemInfo.item.status.date}</span>
            </div>
            <h2>{this.props.itemInfo.item.userName}</h2>
            <div className='place'>
              {/* <img src={location} alt='location' /> */}
              {this.props.itemInfo.item.location}
            </div>

            <div className='description'>
              <p>
                {this.props.itemInfo.item.description1}
                <a href={this.props.itemInfo.item.link} target="_blank">Read More</a>
              </p>
            </div>
            <div className='shop'>
              <div className='regular-price'>
                <span>{this.props.itemInfo.item.show.regular_price}</span>
              </div>
              <div className='book-now p-0'>
                <button
                  className='btn orange-btn'

                >
                  Request information
                </button>
                <button
                  className='btn orange-btn'

                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}



export default AdventuresItem;
