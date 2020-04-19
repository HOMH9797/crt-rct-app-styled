import React, { Fragment } from "react"
import Titulo from '../componentes/TituloSeccion'
import styled from 'styled-components'
import Actor from './Actor'

const Container = styled.div`
    display:flex;
    overflow:scroll
`

export default ({ cast }) => {
    if (cast) {
        return (
            <Fragment>
                <Titulo>Reparto:</Titulo>
                <Container>
                    {cast.map(cast => (
                        <div key={cast.cast_id}>
                            <Actor cast={cast} />
                        </div>
                    ))}
                </Container>
            </Fragment>
        )
    } else {
        return (<div>
            Cargando...
        </div>)
    }
}