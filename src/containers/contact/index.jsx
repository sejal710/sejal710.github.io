
import React, { useRef} from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import {IoMdContact} from 'react-icons/io'
import { Animate } from "react-simple-animate";
import './style.scss'
import emailjs from 'emailjs-com'

export default function Contact() {
   const form = useRef()
   const handleChange = (e) => {
      //  console.log(e.target.value,e.target.name)
      e.preventDefault();

      emailjs.sendForm('service_urwyk98', 'template_cy816tn', form.current, 'A2p29N7_Ag2DN6dx9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
     
   }

    // emailjs.sendForm('service_urwyk98','template_cy816tn',value)

   
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
          <form className="contact__content__form" onSubmit={handleChange} ref={form}>
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
  </section>
  )
}