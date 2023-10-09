import React from "react";
import Button from 'react-bootstrap/Button';
import { BackButton } from "../style/components/buttons-control";


export default function TomPage() {
    return (
        <div className="tom-background">
            <div className="logo-movie">
                <BackButton/>
                <img src="../../assets/logo-tom.png" alt="logo-tom" />
            </div>
            <div className="card-menu">
                <div className="menu-div">
                    <div className="menu-info">Ano 2002</div>
                    <div className="menu-info">Direção: Sam Raimi</div>
                </div>
                <p>Sinopse: Peter Parker está em uma viagem de duas semanas 
                    pela Europa, ao lado de seus amigos de colégio, quando é surpreendido 
                    pela visita de Nick Fury. Convocado para mais uma missão heroica, ele precisa enfrentar 
                    vários vilões que surgem em cidades-símbolo do continente, como Londres, Paris e Veneza, e 
                    também a aparição do enigmático Mysterio.
                </p>
            </div>
            <div className="div-trailler">
                <img src="../../assets/youtube-svgrepo-com.svg" alt="logo-youtube" />
                <a href="https://www.youtube.com/watch?v=MqQdHaBtvGs" target="_blank">Assista o trailer</a>
            </div>
            <div className="galery-photos">
                <img src="../../assets/tom1.png" alt="poster1" />
                <img src="../../assets/tom2.png" alt="poster2" />
                <img src="../../assets/tom3.png" alt="poster3" />
            </div>

        </div>
    );
}