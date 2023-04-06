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
            <InstagramIcon/>
            <FacebookIcon/>
            <GitHubIcon/>
            <LinkedInIcon/>
        </div>
        <p>&copy; 2023 alchuu00</p>
    </div>
  )
}

export default Footer