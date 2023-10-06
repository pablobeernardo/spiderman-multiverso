export default function HomePage() {
  return (
    <body>
      <nav class="s-menu">
        <ul>
          <li class="s-menu_item">
            <a href="/">Página Inicial</a>
          </li>
          <li class="s-menu_item s-menu_icon">
            <img src="../assets/icons/spider.svg" alt="spider" />
          </li>
          <li class="s-menu_item">
            <a href="#">Tobey Maguire</a>
          </li>
          <li class="s-menu_item">
            <a href="#">Andrew Garfield</a>
          </li>
          <li class="s-menu_item">
            <a href="#">Tom Holland</a>
          </li>
        </ul>
      </nav>

      <div class="s-container">
        <a href="#" class="s-card">
          <img class="s-card_background" src="../assets/pic-sm-bg-01.jpg" />
          <img class="s-card_image" src="../assets/spider-man-01.png" alt="Tobey Maguire" />
          <h2 class="s-card_title">Tobey Maguire</h2>
        </a>
        <a href="#" class="s-card">
          <img class="s-card_background" src="../assets/pic-sm-bg-02.jpg" />
          <img class="s-card_image" src="../assets/spider-man-02.png" alt="Tom Holland" />
          <h2 class="s-card_title">Tom Holland</h2>
        </a>
        <a href="#" class="s-card">
          <img class="s-card_background" src="../assets/pic-sm-bg-03.jpg" />
          <img class="s-card_image" src="../assets/spider-man-03.png" alt="Andrew Garfiel" />
          <h2 class="s-card_title">Andrew Garfiel</h2>
        </a>
      </div>

      <div class="s-controller">
        <div class="s-controller_button">
          01
        </div>
        <div class="s-controller_button">
          02
        </div>
        <div class="s-controller_button">
          03
        </div>
        <div class="s-controller_line"></div>
      </div>

    </body>
  );
}
