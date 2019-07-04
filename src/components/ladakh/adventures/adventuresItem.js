import React, { Component } from 'react';

import './adventures.css'
import picture1 from '../../../images/item1.jpg'
class AdventuresItem extends Component {
  render() {
    return (
      <article className='adventures-item'>
        <div className='card'>
          <div className='imageInfo'>
            <img src={picture1} alt='img1' className='main-img' />
            <div className='review'>
              <div className='user'>
                {/* <img src={userImg} alt='User' /> */}
              </div>
              <div className='rating'>
                <b>Stanzin Tundup</b>
                <ul>
                  <li>
                    <i className='fa fa-star' aria-hidden='true' /> 4.9
                  </li>
                  <li>
                    <i className='fa fa-circle' aria-hidden='true' /> 225 reviews
                  </li>
                  <li>
                    <i className='fa fa-circle' aria-hidden='true' /> 4 adventures
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
            <h2>Darcha to Padum Trek</h2>
            <div className='place'>
              {/* <img src={location} alt='location' /> */}
              Ladakh, India
            </div>

            <div className='description'>
              <p>
                A model trek through the magnificent gorges that
                is sure to grip you with its glorious beauty!
                This is a popular trek for years and still a must on every trekkers' wish list.
                Darcha Padum Trek is a must go on trek. Sometimes it becomes difficult to control one's
                emotions and excitement in the build up to a trek.
                <a href='http://localhost'>Read More</a>
              </p>
            </div>
            <div className='shop'>
              <div className='regular-price'>
                <span>$1800 / person</span>
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
