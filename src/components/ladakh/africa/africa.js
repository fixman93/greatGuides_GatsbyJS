import React from 'react';

import Container from '../../../common/container/Container';
import AdventuresItem from './adventuresItem';
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
              }
            }
          }
        }
      }
    `
  )
  console.log('site', site.siteMetadata.rwander)
  console.log('site', site.siteMetadata.peruItems)
  return (
    <div className='adventures ladakh'>
      <Container>
        <div className='row'>
          {site.siteMetadata && site.siteMetadata.peruItems ? site.siteMetadata.peruItems.map((items, i) => {
            return (
              <AdventuresItem
                key={i}
                guideImage={items.item.mainImage}
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