
import React, { useRef} from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import {IoMdContact} from 'react-icons/io'
import { Animate } from "react-simple-animate";
import { useToast} from '@chakra-ui/react'
import './style.scss'
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
import emailjs from 'emailjs-com'

export default function Contact() {
   const form = useRef()
   const toast = useToast();
   const handleClick = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_urwyk98', 'template_cy816tn', form.current, 'A2p29N7_Ag2DN6dx9')
        .then((result) => {
          console.log(result.text)
          toast({
            position: 'top-right',
            title: 'Email Sent ✔',
            description: `Thank You for the message!`,
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
        }, (error) => {
          console.log(error.text);
          toast({
              title: 'Email Not sent.',
              description: "There is some error",
              status: 'warning',
              duration: 5000,
              isClosable: true,
          })
        });

      
    }

  return (
    <section id='contact' className='contact'>
    <PageHeaderContainer
    headerText='My Contact'
    icon ={<IoMdContact size={40} />}/>
     <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form className="contact__content__form" onSubmit={handleClick} ref={form} >
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="message"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <input type='submit' value='send' className='buttonI' />
          </form>
        </Animate>
      </div>
      <div className="contacts" >
      <h1 className="heading">Contact</h1>
      <div className="details">
        <h3 className="ph-num">Contant Number - +91 6261019377</h3>
        <h3 className="em-adr">Email Address - 710sejal@gmail.com</h3>
        <h3 className="address">Address - Indore, Madhya Pradesh</h3>
      </div>
      <div className="sc-links">
        <div onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/sejal-jaiswal-645b4b217/",
                      "_blank"
                    )
                  } className="linkedIn"><AiFillLinkedin/></div>
        <div onClick={() =>
                    window.open(
                      "https://github.com/sejal710",
                      "_blank"
                    )
                  } className="github"><AiFillGithub/></div>
        <div className="email"><AiOutlineMail/></div>
      </div>
    </div>
  </section>
  )
}