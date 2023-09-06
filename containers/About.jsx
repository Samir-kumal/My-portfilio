import React from 'react'
import "../assets/css/styles.css"
import Photo from "../assets/img/about.jpg"
import Image from 'next/image'
const About = () => {
  return (
    <div>
        <section className="about section " id="about">
                <h2 className="section-title">About</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        
                        {/* <img src={Photo} alt=""  /> */}
                        <Image src={Photo}   height={800} width={700}/>
                        
                    </div>
                    
                    <div>
                        <h2 className="about__subtitle">Greetings,</h2>
                        <p  className="about__text">  I'm Samir Kumal, and I proudly call Pokhara, Nepal, my home. I'm deeply passionate about web development, and it's my mission to craft extraordinary websites and Mobile applications. 
                        <br/>
                    <br/>


                            My dedication goes beyond just creating websites; it's about crafting experiences that leave a lasting impression. I'm committed to delivering not just good but outstanding solutions to my clients.
                        <br/>
                          
                        <br/>
                        
                      
                            I look forward to connecting with you and exploring how I can contribute my expertise to your digital endeavors.
                            
                            </p>           
                    </div>                                   
                </div>
            </section>
    </div>
  )
}

export default About