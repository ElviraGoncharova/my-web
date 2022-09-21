import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import styled from "styled-components";

npm i '@emailjs/browser'

const Contact_us = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
      .sendForm(
        'service_s8a6gy5', 
        'template_fbll9vh', 
        form.current, 
        'No7Kils3UnusT7kfw'
        )


        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, 
        (error) => {
            console.log(error.text);
        }
        );
    };
  
    return (
    <StyledContactForm>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
        </StyledContactForm>
    )
};

export default Contact_us




 
  