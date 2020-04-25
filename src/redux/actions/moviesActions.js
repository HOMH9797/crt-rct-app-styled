import tipo from './tipo'
import axios from 'axios'

const urlBase = 'https://api.themoviedb.org/3/movie/'
const key = '8e41f79827844155d7782abeeee81a89'

export const getEstrenos = ()=> dispatch => {
    dispatch ({
        type: tipo.GET_ESTRENOS,
        payload: axios.get(`${urlBase}now_playing?api_key=${key}`)
    })
}

