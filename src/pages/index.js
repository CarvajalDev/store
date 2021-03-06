import React from "react"
import { Link, graphql } from "gatsby"
import { SEO, Jumbo, Products } from "../components"
/*import styled from 'styled-components' */

export const query = graphql`
query GET_DATA {
  allSite {
    edges {
      node {
        siteMetadata {
          description
        }
      }
    }
  }
  allStripeSku {
    edges {
      node {
        id
        currency
        price
        product {
          id
          name
          metadata {
            img
            description
            verdura
          }
        }
      }
    }
  }
}
`
/* ejemplo de Styled-Component
const Button = styled.button `
  width: 120px;
  background-color: #98ca3f;
  border: none;
  border-radius: 20px;
  color: ${props => props.color};
` 
*/


const IndexPage = ({data}) => {
  console.log(data)
  return(
  <>
    <SEO title="Home" />
    <Jumbo description= {data.allSite.edges[0].node.siteMetadata.description} />
    <Products products={data.allStripeSku.edges} />
    {/* componente de Styled <Button color='gray'>Comprar</Button>*/ }
    <Link to="/gracias/">Go to gracias</Link>
  </>
)}

export default IndexPage
