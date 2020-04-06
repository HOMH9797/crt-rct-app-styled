import React from 'react'

import Estreno from '../componentes/Estreno'
import Destaque from '../componentes/Destaque'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Destaque></Destaque>
                <Estreno></Estreno>
            </div>
        )
    }
}

export default HomePage