import React from 'react';

import Container from '../../../common/container/Container';
import AdventuresItem from './africaItem';
import { useStaticQuery, graphql } from "gatsby"


import './africa.css'

const Adventures = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            africanItems {
              item {
                status {
                  category
                  date
                }
                title
                location
                userName
                description1
                show {
                  regular_price
                  promotional_price
                }
                rating {
                  stars
                  review
                  adventures
                }
                mainImage
                guideImage
                link
              }
            }
          }
        }
      }
    `
  )
  console.log('site', site.siteMetadata.africanItems)
  return (
    <div className='adventures ladakh'>
      <Container>
        <div className='row'>
          {site.siteMetadata && site.siteMetadata.africanItems ? site.siteMetadata.africanItems.map((items, i) => {
            return (
              <AdventuresItem
                key={i}
                mainImage={items.item.mainImage}
                itemInfo={items}
              />
            )
          }) : null}
        </div>
      </Container>
    </div>
  );

}


export default Adventures;
