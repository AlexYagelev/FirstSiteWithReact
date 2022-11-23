import React from 'react';
import {Carousel} from 'react-bootstrap';
import FP from '../Photo/FP.jpg'
import P2 from '../Photo/2P.jpg'
import P3 from '../Photo/3P.jpg'
import '../index.css';

export default function Slider(){
    return(
   <Carousel>
        <Carousel.Item style={{'height':'665px'}}>
            <img
                className="d-block w-100"
                src = {FP}
                alt = "First slide"

            />  
            <Carousel.Caption>
                <h3>Web Developer     </h3>
                <p3>Hi my name is Alex </p3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height':'665px'}}>
            <img
                className="d-block w-100"
                src = {P2}
                alt = "First slide"

            />  
            <Carousel.Caption>
                <h3>Web Developer     </h3>
                <p3>Hi my name is Alex </p3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height':'665px'}}>
            <img
                className="d-block w-100"
                src = {P3}
                alt = "First slide"

            />  
            <Carousel.Caption>
                <h3>Web Developer     </h3>
                <p3>Hi my name is Alex </p3>
            </Carousel.Caption>
        </Carousel.Item>
   </Carousel>
    

    
)}
