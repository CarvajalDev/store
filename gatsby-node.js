/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions 
    const productTemplate = path.resolve(`src/templates/Product.js`)
    const result = await graphql(`
        query GET_SKUS{
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
        }`)

        if(result.errors){
            throw result.errors
        }
        result.data.allStripeSku.edges.forEach(({node}) => {
            createPage({
                path: `${node.id}`,
                component: productTemplate,
            })
        })
    } 

