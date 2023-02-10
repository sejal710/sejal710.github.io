
import React, { useRef} from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import {IoMdContact} from 'react-icons/io'
import { Animate } from "react-simple-animate";
import { useToast ,Box,Flex,Link,Tooltip,Image} from '@chakra-ui/react'
import './style.scss'
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
      <Flex gap={["10px", "20px", "20px", "40px"]} className="contact__flex">
      <Link href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJKjFpWNfPwzpLxQBSsJZcJXkQQztWwwvdLtVMggsDRTMHPmGbsDwfWxzhNwdNlhDTZL" target="_blank">
      <Tooltip label='710sejal@gmail.com'>
            <Box className='contact__flex__icons' >
                <Box>
                <Image w="100%" src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" />
            </Box>
          </Box >
      </Tooltip>
     </Link>
     <Link href='https://www.linkedin.com/in/sejal-jaiswal-645b4b217/' target="_blank">
                <Tooltip label='Sejal Jaiswal'>
                  <Box className='contact__flex__icons'>
                    <Box>
                <Image w="100%" src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" />
              </Box>
           </Box>
          </Tooltip>
       </Link>

      <Link href="https://github.com/sejal710" target="_blank">
          <Tooltip label='sejal710' >
            <Box className='contact__flex__icons'>
             <Box>
                <Image w="100%" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
             </Box>
            </Box>
        </Tooltip>
      </Link>
      <Link target="_blank">
         <Tooltip label='+91 6261019377'>
            <Box className='contact__flex__icons'>
              <Box>
                <Image w="100%" src="https://i.ibb.co/1057jXJ/png-transparent-telephone-logo-iphone-telephone-call-smartphone-phone-electronics-text-trademark-thu.png" />
              </Box>
            </Box>
          </Tooltip>
        </Link>
      </Flex>
  </section>
  )
}