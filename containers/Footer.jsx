import React from 'react'
import "../assets/css/styles.css"
const Footer = () => {
  return (
    <div>
         <footer class="footer">
           <h2 className='text-2xl'>Contact:</h2>
            <p className="text-lg">Email: kumalsameer124@gmail.com </p>

            <div class="footer__social">
                <a href="#" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
            </div>
            <p class="footer__copy">&#169; Copyright 2023. All rigths reserved</p>
        </footer>

    </div>
  )
}

export default Footer