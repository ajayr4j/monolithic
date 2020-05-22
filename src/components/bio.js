/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import mainLogo from'./twit1.png';
import mainLogo1 from'./insta2.png';
import mainLogo2 from'./github1.svg';
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(relativePath: { regex: "/profile-pic1.jpg/" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
      
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter,
            instagram,
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1/4),
      }}
    >
      <Image
        fluid={data.avatar.childImageSharp.fluid}
        alt={author.name}
        style={{
          marginRight: rhythm(1/2),
          marginBottom: 0,
          minWidth: 80,
          height: 80,
          width: 80,
          borderRadius: `50%`,
        }}
        
      />
      
      
      <p>
        <strong>{author.name}</strong><br></br>{author.summary}<br></br>
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}style={{ textDecoration: 'none', color: 'white' }}>
         <img src = {mainLogo} width = "20" height = "20" border-radius = "50" />
        </a>
        <a href={`https://instagram.com/${social.instagram}`}style={{ textDecoration: 'none', color: 'white' }}>
         <img src = {mainLogo1} width = "30" height = "20" border-radius = "50" />
        </a>
        <a href={`https://github.com/${social.github}`}style={{ textDecoration: 'none', color: 'white' }}>
         <img src = {mainLogo2} width = "20" height = "20" border-radius = "50" />
        </a>
      </p>
    </div>
  )
}

export default Bio
