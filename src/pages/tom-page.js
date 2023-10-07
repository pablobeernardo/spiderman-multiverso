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
                <p>Sinopse: Depois de ser picado por uma aranha geneticamente modificada,
                    Peter Parker ganha super poderes e as habilidades da aranha para se agarrar a
                    qualquer superfície. Ele promete usá-los para combater o crime e começa a entender
                    as palavras de seu querido tio Ben: com grandes poderes vêm grandes responsabilidades.
                </p>
            </div>
            <div className="div-trailler">
                <img src="../../assets/youtube-svgrepo-com.svg" alt="logo-youtube" />
                <a href="https://www.youtube.com/watch?v=rk-dF1lIbIg" target="_blank">Assista o trailer</a>
            </div>
            <div className="galery-photos">
                <img src="../../assets/tom1.png" alt="poster1" />
                <img src="../../assets/tom2.png" alt="poster2" />
                <img src="../../assets/tom3.png" alt="poster3" />
            </div>

        </div>
    );
}