
export default function HomePage() {
  return (
    <body>
      <nav className="s-menu">
        <ul>
          <li className="s-menu_item">
            <a href="/">Página Inicial</a>
          </li>
          <li className="s-menu_item s-menu_icon">
            <img src="../assets/icons/spider.svg" alt="spider" />
          </li>
          <li className="s-menu_item">
            <a href="#">Tobey Maguire</a>
          </li>
          <li className="s-menu_item">
            <a href="#">Andrew Garfield</a>
          </li>
          <li className="s-menu_item">
            <a href="#">Tom Holland</a>
          </li>
        </ul>
      </nav>

      <div className="s-container">
        <div className="s-card">
          <div className="s-card_content">
            <img className="s-card_background" src="../assets/pic-sm-bg-01.jpg" alt="Tobey Maguire" />
            <img className="s-card_image" src="../assets/spider-man-01.png" alt="Tobey Maguire" />
            <h2 className="s-card_title">Tobey Maguire</h2>
          </div>
        </div>
        <div className="s-card">
          <div className="s-card_content">
            <img className="s-card_background" src="../assets/pic-sm-bg-02.jpg" alt="Tom Holland" />
            <img className="s-card_image" src="../assets/spider-man-02.png" alt="Tom Holland" />
            <h2 className="s-card_title">Tom Holland</h2>
          </div>
        </div>
        <div className="s-card">
          <div className="s-card_content">
            <img className="s-card_background" src="../assets/pic-sm-bg-03.jpg" alt="Andrew Garfield" />
            <img className="s-card_image" src="../assets/spider-man-03.png" alt="Andrew Garfield" />
            <h2 className="s-card_title">Andrew Garfield</h2>
          </div>
        </div>
      </div>

      <div className="s-controller">
        <div className="s-controller_button">
          01
        </div>
        <div className="s-controller_button">
          02
        </div>
        <div className="s-controller_button">
          03
        </div>
        <div className="s-controller_line"></div>
      </div>
    </body>
  );
}