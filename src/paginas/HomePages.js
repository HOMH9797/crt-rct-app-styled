import React from 'react'
import axios from 'axios'
import Estreno from '../componentes/Estreno'
import Destaque from '../componentes/Destaque'
import styled from 'styled-components'

const Titulo = styled.h1`
    background: rgba(120, 144, 156, 1);
    color: white;
    margin:0;
    padding:12px;
`

class HomePage extends React.Component {

    state = {
        peliculas: [],
        peliculaDestacada: "",
        pelicula_Estreno: []
    }

    componentDidMount() {
        this.getData()
        this.getEstrenos_proximo()
    }

    getEstrenos_proximo = async () => {
        try {
            const resultado = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=8e41f79827844155d7782abeeee81a89&language=es')
            this.setState({
                pelicula_Estreno: resultado.data.results
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    getData = async () => {
        try {
            const resultados = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8e41f79827844155d7782abeeee81a89&language=es')
            this.setPeliculaDestacada(resultados.data.results)
            this.setState({
                peliculas: resultados.data.results
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    setPeliculaDestacada(peliculas) {
        const peliculaDestacada = peliculas[Math.floor(Math.random() * peliculas.length)]
        this.setState({
            peliculaDestacada
        })
    }

    render() {
        return (
            <div>
                <Destaque pelicula={this.state.peliculaDestacada} />
                <Titulo>En Cartelera:</Titulo>
                <Estreno peliculas={this.state.peliculas} />
                <Titulo>Estrenos:</Titulo>
                <Estreno peliculas={this.state.pelicula_Estreno} />
            </div>
        )
    }
}

export default HomePage