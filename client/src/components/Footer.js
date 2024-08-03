import React from 'react'
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import {FaDiscord, FaInstagram ,FaPhone,FaYoutube} from 'react-icons/fa'
// import Container from '../styles/Container';

const Footer = ( ) => {
  return (
    <Wrapper>
        <section className='contact-short'>
        <div className='grid grid-two-column'>
            <div>
                <h3> Ready to get Started</h3>
                <h3> Talk to us Today</h3>
            </div>
            <div>
               <Button className='btn hireme-btn'>
                <NavLink to='/contact'>
                     Get started
                    </NavLink></Button> 
            </div>
            </div>

    </section>
    <footer>
    <div className='container grid grid-four-column'>
        <div className='footer-about'>
            <h3>  Suneel Pradeep </h3> 
        <p style={{color:'white'}}> Full Stack Developer </p>
        </div>
    
    <div className='footer-subscribe'>
      <h3> Subscribe to get important updates  </h3> 
      <form onSubmit={(e)=> {e.preventDefault(); window.location.href = `mailto:${e.target.email.value}`}}>
      <input type='mail' placeholder='Your Mail' name='mail' style={{marginBottom:'0.5rem'}} autoComplete='off'/>
      <Button > Subscribe</Button>
      </form>
  
    </div>
    <div className='footer-social'>
       <h3> Follow us  </h3> 
       <div className='footer-social--icons'>
       <div><a href='https://www.instagram.com/suneel_pradeep' style={{color:'blue'}}><FaDiscord alt='discord' className='icons' /></a></div>
       <div><a href='https://www.instagram.com/suneel_pradeep' style={{color:'blue'}} ><FaInstagram alt='instagram' className='icons' /></a></div>
       <div><a href='https://www.instagram.com/suneel_pradeep' style={{color:'blue'}}><FaYoutube alt='youtube' className='icons'  /></a></div>
    </div>
    </div>
    <div className='footer-contact'>
       <h3> Call us  </h3> 
       <div style={{padding:"0.6rem 0.5rem 1rem 1rem",width:'4rem',borderRadius:"50%",border:"2px solid #fff"}}><a href='tel:+918595334669'><FaPhone alt='instagram' className='icons' /></a></div>
        {/* <a href="tel:+918595334669" style={{textDecoration:'none',fontSize:'1rem'}}> +918595334669 </a> */}
    </div>
    </div>
   
    <div className='footer-bottom--section'>
         <hr />
       <div className='container grid grid-two-column'> 
       <div>
        <p> @{new Date().getFullYear()} Anime Portraits. All Rights Reserved.  </p>
        </div>
        <div>
            <p> PRIVACY POLICY </p>
            <p> TERMS & CONDITIONS </p>
            </div>
    </div>
    </div>
    
    </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
 
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      color: blue;
      gap: 2rem;
      div {
        padding: 0.6rem 0.5rem 1rem 1rem;
        border-radius: 50%;
        border: 2px solid #fff ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
 
  .footer-bottom--section {
    color: white;
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  .footer-call{
    padding: 0.6rem 0.5rem 1rem 1rem;
    border-radius: 50%;
    border: 2px solid #fff ${({ theme }) => theme.colors.white};
    .icons {
      color: ${({ theme }) => theme.colors.white};
      font-size: 2.4rem;
      position: relative;
      cursor: pointer;
    }
  
}
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
      width : 100%;
    }
  }
`;
export default Footer