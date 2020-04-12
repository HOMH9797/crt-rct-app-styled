import React from 'react';
import styled from 'styled-components';
import Lgo from '../img/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg';

const Footer = styled.div`
    background: rgba(38, 50, 56, 1);
    padding:20px;
    >img{
        width:180px;
        height:80px;
    }
`


export default () => (
    <Footer>
        <img src={Lgo} alt="" />
    </Footer>
)