import React from 'react';

import Container from '../../../common/container/Container';
import AdventuresItem from './norwayItem';
import { useStaticQuery, graphql } from "gatsby"


import './norway.css'

const Adventures = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            norwayItems {
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
  return (
    <div className='adventures ladakh'>
      <Container>
        <div className='row'>
          {site.siteMetadata && site.siteMetadata.norwayItems ? site.siteMetadata.norwayItems.map((items, i) => {
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
