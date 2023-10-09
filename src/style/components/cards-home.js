import React from 'react'
import { Link } from 'react-router-dom'

export default function CardsHome() {
    return (
        <div class="s-container">
            <Link to="/tobey-page" class="s-card">
                <img class="s-card_background" src="../assets/pic-sm-bg-01.jpg" />
                <img class="s-card_image" src="../assets/spider-man-01.png" alt="Tobey Maguire" />
                <h2 class="s-card_title">Tobey Maguire</h2>
            </Link>
            <Link to="/andrew-page" class="s-card">
                <img class="s-card_background" src="../assets/pic-sm-bg-03.jpg" />
                <img class="s-card_image" src="../assets/spider-man-03.png" alt="Andrew Garfiel" />
                <h2 class="s-card_title">Andrew Garfiel</h2>
            </Link>
            <Link to="/tom-page" class="s-card">
                <img class="s-card_background" src="../assets/pic-sm-bg-02.jpg" />
                <img class="s-card_image" src="../assets/spider-man-02.png" alt="Tom Holland" />
                <h2 class="s-card_title">Tom Holland</h2>
            </Link>
        </div>
    )
}