import React from 'react'
import "./_Footer.css"
import gptlogo from "../../assets/logo.svg"
function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
           <h1 className="gradient__text">
             Do you want to step in to the
              future before others
           </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gptlogo} alt="logo" />
        <p>	DN-24, 2nd Floor, Sector - V<br/>
          Salt Lake ,
             Kolkata</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contacts</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>UN IT Solution Pvt Ltd</p>
          <p>Privacy Policy</p>
          <p>9051972799</p>
          <p>unIt201@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&copy; 2021 GPT-3 , All rights Reserved.</p>
        <p>Designed and Developed by Santra Developers</p>
      </div>
    </div>
  )
}

export default Footer
