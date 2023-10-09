import React from "react";
import Button from 'react-bootstrap/Button';
import { BackButton } from "../style/components/buttons-control";


export default function AndrewPage() {
    return (
        <div className="andrew-background">
            <div className="logo-movie">
                <BackButton/>
                <img src="../../assets/logo-andrew.png" alt="logo-andrew" />
            </div>
            <div className="card-menu">
                <div className="menu-div">
                    <div className="menu-info">Ano 2012</div>
                    <div className="menu-info">Direção: Marc Webb</div>
                </div>
                <p>Sinopse: O jovem Peter Parker quer saber mais sobre sua origem. 
                    Ele encontra uma pasta que pertenceu ao seu pai e tenta descobrir por que seus pais 
                    desapareceram. A sua busca o leva a Oscorp e ao dr. Curt Connors, que tem como alter 
                    ego o letal Lagarto.
                </p>
            </div>
            <div className="div-trailler">
                <img src="../../assets/youtube-svgrepo-com.svg" alt="logo-youtube" />
                <a href="https://www.youtube.com/watch?v=6nzNdpJ3qMo" target="_blank">Assista o trailer</a>
            </div>
            <div className="galery-photos">
                <img src="../../assets/andrew-01.png" alt="poster1" />
                <img src="../../assets/andrew-02.png" alt="poster2" />
                <img src="../../assets/andrew-03.png" alt="poster3" />
            </div>

        </div>
    );
}