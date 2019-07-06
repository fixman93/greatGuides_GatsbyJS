import React, { Component } from 'react';

import './adventures.css'
import picture1 from '../../../images/item1.jpg'
class AdventuresItem extends Component {
  render() {
    console.log('props', this.props.itemInfo.item)
    return (
      <article className='adventures-item'>
        <div className='card'>
          <div className='imageInfo'>
            <img src={this.props.guideImage} alt='img1' className='main-img' />
            <div className='review'>
              <div className='user'>
                {/* <img src={userImg} alt='User' /> */}
              </div>
              <div className='rating'>
                <b>{this.props.itemInfo.item.title}</b>
                <ul>
                  <li>
                    <i className='fa fa-star' aria-hidden='true' /> {this.props.itemInfo.item.rating.stars}
                  </li>
                  <li>
                    <i className='fa fa-circle' aria-hidden='true' /> {this.props.itemInfo.item.rating.review} review
                  </li>
                  <li>
                    <i className='fa fa-circle' aria-hidden='true' /> {this.props.itemInfo.item.rating.adventures} adventures
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='status'>
              <span>HIKING: </span>
              <span>14 DAYS</span>
            </div>
            <h2>{this.props.itemInfo.item.userName}</h2>
            <div className='place'>
              {/* <img src={location} alt='location' /> */}
              {this.props.itemInfo.item.location}
            </div>

            <div className='description'>
              <p>
                {this.props.itemInfo.item.description1}
                <a href='http://localhost'>Read More</a>
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
