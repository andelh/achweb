import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaRegEnvelope, FaGithub } from 'react-icons/fa'

//NPM
import styled from 'styled-components'

const FooterWrapper = styled.div`
    width: 100%;
    padding: 1rem;
    text-align: center;
    font-size: 14px;
    font-family: Avenir-Roman;
    color: #930000;
`
const FooterGroup = styled.div`
    margin: 0 auto;
    display: block;
    width: 100%;
`

const SocialsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    max-width: 300px;
    margin: 20px auto;

`

const SocialIcon = styled.div`
    font-size: 1.8rem;
    display: inline;
    transition: 0.5s ease;
    
    &:hover {
        color: #650000;
    }

`

const AvailableCopy = styled.p`
    color: white;
    font-size: 30px;
    max-width: 650px;
    margin: 0 auto;
    padding: 20px;
    font-family: Avenir;
    font-weight: 900;
    line-height: 150%;
`

const ios = "https://itunes.apple.com/tt/app/wheredpump/id1125892248?mt=8"
const android = "https://play.google.com/store/apps/details?id=com.wheredpump.wheredpump.wheredpump&hl=en"

class Footer extends React.Component {
    render() {
        return(
            <FooterWrapper>
                <FooterGroup>
                <AvailableCopy>I am available to work on projects 😊 Shoot me <a style={{color: '#930000'}} href="mailto:andelhusbands@gmail.com">an email</a> or find me on socials as well. 👇</AvailableCopy>

                <SocialsContainer>
                        <SocialIcon><a style={{color: 'inherit'}} rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/andel.husbands"><FaFacebookF /></a></SocialIcon>
                        <SocialIcon><a style={{color: 'inherit'}} rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/andelhusbands_/"><FaInstagram /></a></SocialIcon>
                        <SocialIcon><a style={{color: 'inherit'}} rel="noopener noreferrer" target="_blank" href="https://twitter.com/AndelHusbands"><FaTwitter /></a></SocialIcon>
                        <SocialIcon><a style={{color: 'inherit'}} rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/andel-husbands-013198120"><FaLinkedinIn /></a></SocialIcon>
                        <SocialIcon><a style={{color: 'inherit'}} rel="noopener noreferrer" target="_blank" href="https://www.github.com/andelh"><FaGithub /></a></SocialIcon>
                        <SocialIcon><a style={{color: 'inherit'}} rel="noopener noreferrer" target="_blank" href="mailto:andelhusbands@gmail.com"><FaRegEnvelope /></a></SocialIcon>
                    </SocialsContainer>
                    <p style={{color:'white', margin: '5px 0'}}>© 2019 Andel Husbands. All Rights Reserved.</p>
                </FooterGroup>
            </FooterWrapper>
        )
        
    }
} 

export default Footer