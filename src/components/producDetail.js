import React, { useState } from 'react'
import { SEO, Stars } from './'
import priceFormat from '../utils/priceFormat';
import { Tag, SizeButton, SizeSelect, Button, StyledProductDetail, QtySelect } from '../styles/components'


export default function producDetail({sku: id, price, product: {name, metadata}}) {
    const formatePrice = priceFormat(price)
    const [size, setSize] = useState(2)
    const [qty, setQty] = useState(1)
    return (
        <StyledProductDetail>
            <SEO title={name} />
            <img src={metadata.img} alt={name}/>
            <div>
                <Tag>Popular</Tag>
                <h2>{name}</h2>
                <b>{formatePrice}</b>
                <Stars/>
                <small>{metadata.description}</small>
                { metadata.verdura && (<SizeSelect selected={size}> 
                                        <SizeButton onClick={ () => setSize(1) }> g </SizeButton>
                                        <SizeButton onClick={ () => setSize(2) }> lb </SizeButton>
                                        <SizeButton onClick={ () => setSize(3) }> kg </SizeButton> 
                                       </SizeSelect>)
                }
                <p>Peso: </p>
                <QtySelect>
                    <button onClick={ () => (qty > 1 ? setQty(qty - 1): null)}> - </button>
                    <input type='text' disabled value={qty}></input>
                    <button onClick={ () => setQty(qty + 1)}> + </button>
                </QtySelect>
                <Button>Incluir en la Canasta</Button>
            </div>
        </StyledProductDetail>
    )
}
