import React from 'react'
import "../assets/css/styles.css"
const Footer = () => {
  return (
    <div>
         <footer className="footer">
           <h2 className='text-2xl'>Contact:</h2>
            <p className="text-lg">Email: kumalsameer124@gmail.com </p>

            <div className="footer__social">
                <a href="#" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
                <a href="#" className="footer__icon"><i className='bx bxl-instagram' ></i></a>
                <a href="#" className="footer__icon"><i className='bx bxl-twitter' ></i></a>
            </div>
            <p className="footer__copy">&#169; Copyright 2023. All rigths reserved</p>
        </footer>

    </div>
  )
}

export default Footer