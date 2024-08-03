import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  
  const {isAuthenticated, user} = useAuth0()
 const getLoginNameEmail = (forwhat)=>{
       if(forwhat ==='name') { return isAuthenticated ? user.name : '' }
       else if(forwhat==='email') { return isAuthenticated ? user.email : '' }
 }
   const [data,setdata ] = useState({
    username: getLoginNameEmail('name'),
    email: getLoginNameEmail('email'),
    message : '',
    
   });

   const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch('https://formspree.io/f/mqkowdlz', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

  
 
  return (
  <Wrapper>
    <h2 className="common-heading"> Feel free to Contact Us </h2>
    <iframe title='ofc address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.560355913534!2d77.07181447537688!3d28.52287227572492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bdeb0493321%3A0x8033f5a85e8305ed!2sChaitanya%20Apartment%2C%20Kapashera%2C%20New%20Delhi%2C%20Dundahera%20Rd%2C%20Kapas%20Hera%20Extension%2C%20Kapas%20Hera%2C%20Delhi%2C%20110037!5e0!3m2!1sen!2sin!4v1681972020739!5m2!1sen!2sin"
     width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy"
     referrerPolicy="no-referrer-when-downgrade"></iframe>
     
     <div className="container">
 <div className="contact-form">
  <form method="POST" action="https://formspree.io/f/mqkowdlz" className="contact-inputs" onSubmit={handleSubmit}>
    {/* <label >Username</label> */}
    <input  required name='username' type="text" placeholder="username" 
    autoComplete="off" value={data.username}
    onChange={(e)=>setdata({...data,username: e.target.value})}  />
    {/* <label >Email</label> */}
    <input    required name = 'email'  type="email" placeholder="email" autoComplete="off" value={data.email} onChange={(e)=>{setdata({...data,email: e.target.value})}}  />
    {/* <label >Details </label> */}
    <textarea   name='message' placeholder="what do you want to say?" autoComplete="off" required value={data.message} onChange={(e)=>{setdata({...data,message: e.target.value})}} />
   {/* <input type="submit" value={data.submit} onClick={(e)=>{e.preventDefault(); setdata({...data, submit:e.target.value})}}  /> */}
   <input type="submit" />
  </form>
</div>
     </div>
  </Wrapper>);
};

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;
