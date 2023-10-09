import  React from 'react';
import { Link } from 'react-router-dom';

export default function NavHome(){
    return(
        <nav class="s-menu">
        <ul>
          <li class="s-menu_item">
            <a href="/">Página Inicial</a>
          </li>
          <li class="s-menu_item s-menu_icon">
            <img src="../assets/icons/spider.svg" alt="spider" />
          </li>
          <li class="s-menu_item">
            <Link to="/tobey-page">Tobey Maguire</Link>
          </li>
          <li class="s-menu_item">
            <Link to="/andrew-page">Andrew Garfield</Link>
          </li>
          <li class="s-menu_item">
            <Link to="/tom-page">Tom Holland</Link>
          </li>
        </ul>
      </nav>
    )
}