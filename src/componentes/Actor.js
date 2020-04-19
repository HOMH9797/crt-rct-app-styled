import React from "react"
import styled from "styled-components"

const urlbaseImage = 'https://image.tmdb.org/t/p/w185'

const Container = styled.div`
    border: 2px solid gold;
    margin: 2px
`
const Foto = styled.img``

const Nombre = styled.span`
    background: rgba(0,0,0,0.5);
    color:white;
`

export default ({ cast }) => (
    <Container>
        <Foto src={cast.profile_path ? urlbaseImage + cast.profile_path : "http://dummyimage.com/185&text=na"}></Foto>
        <Nombre>{cast.character}</Nombre>
    </Container>

)