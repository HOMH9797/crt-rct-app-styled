import React from 'react'
import styled from 'styled-components'

const Inicio = styled.div`
font-family: 'Anton', sans-serif;
    background: rgba(55,71,79,1);
    color:white;
`

export default ({pelicula}) => (
    <Inicio>
        {pelicula.title}
    </Inicio>
)