import React from "react";
import "../assets/css/styles.css"
const Header = () => {
  return (
    <header class="l-header">
      <nav class="nav bd-grid">
        <div>
          <a href="#" class="nav__logo">
            Samir
          </a>
        </div>

        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link active">
                Home
              </a>
            </li>
            <li class="nav__item">
              <a href="#about" class="nav__link">
                About
              </a>
            </li>
            <li class="nav__item">
              <a href="#skills" class="nav__link">
                Skills
              </a>
            </li>
            <li class="nav__item">
              <a href="#work" class="nav__link">
                Work
              </a>
            </li>
            <li class="nav__item">
              <a href="#contact" class="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div class="nav__toggle" id="nav-toggle">
          <i class="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
