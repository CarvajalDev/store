import React from 'react'
import {SEO} from '../components'
import {Button, Purchase} from '../styles/components'
import {Link} from 'gatsby'

export default function gracias() {
    return (
        <div>
            <SEO title='Gracias por tu compra'/>
            <Purchase>
                <h2>Compra Exitosa</h2>
                <p> Gracias por tu compra </p>
                <p> Esperamos que disfrutes de los mejores productos del campo </p>
                <span role='img' aria-label='emoji'> ❤️ </span>
            
                <Link to='/'>
                    <Button> Sigue Comprando </Button> 
                </Link>
            </Purchase>
        </div>
    )
}
