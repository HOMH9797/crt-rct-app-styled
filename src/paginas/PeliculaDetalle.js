import React, { Fragment } from 'react'
import axios from 'axios'
import Destaque from '../componentes/Destaque'
import Cast from '../componentes/Cast'


class PeliculaDetalle extends React.Component {

    state = {
        pelicula: "",
        cast: ""
    }

    componentDidMount() {
        const { peliculaid } = this.props.match.params
        this.getPeliculasDetalle(peliculaid)
        this.getCreditos(peliculaid)
    }

    getPeliculasDetalle = async (idpeli) => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${idpeli}?api_key=8e41f79827844155d7782abeeee81a89&language=es`)
            this.setState({
                pelicula: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    getCreditos = async (idpeli) => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${idpeli}/credits?api_key=8e41f79827844155d7782abeeee81a89&language=es`)
            console.log(data.cast)
            this.setState({
                cast: data.cast
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    render() {
        return (
            <Fragment>
                <Destaque pelicula={this.state.pelicula}>Detalle de pelicula</Destaque>
                <Cast cast={this.state.cast}></Cast>
            </Fragment>
        )
    }
}

export default PeliculaDetalle