import React from 'react'
import {SEO} from '../components'
import {Button, Purchase} from '../styles/components'
import {Link} from 'gatsby'

export default function cancelar() {
    return (
        <div>
            <SEO title='compra cancelada'></SEO>
            <Purchase>
                <h2> Compra Cancelada </h2> 
                <p> ¡Que Lastima!</p> 
                <p> Aqui seguira el producto esperando por ti </p>
                <span role='img' aria-label='emoji'> 😢 </span>

                <Link to='/'>
                    <Button>Vuelve a Comprar</Button>
                </Link>
            </Purchase>
        </div>
    )
}
