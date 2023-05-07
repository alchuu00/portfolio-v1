import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a className="clickable" href="https://www.instagram.com/aljacekada/" target="_blank"><InstagramIcon/></a>
            <a className="clickable" href="https://www.facebook.com/alja.cekada/" target="_blank"><FacebookIcon/></a>
            <a className="clickable" href="https://github.com/alchuu00" target="_blank"><GitHubIcon/></a>
            <a className="clickable" href="https://www.linkedin.com/in/alja-cekada/" target="_blank"><LinkedInIcon/></a>
        </div>
        <p>&copy; 2023 alchuu00</p>
    </div>
  )
}

export default Footer