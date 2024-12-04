/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Link,
  Tooltip,
  Image,
  Text,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { GoCloudDownload } from "react-icons/go";
import { GoCloud } from "react-icons/go";

import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { projects, skills } from "../Utils/data";

import ProjectCard from "../Components/Card";
import Svg1 from "../Components/Svg1";
import Svg2 from "../Components/Svg2";
import Svg3 from "../Components/Svg3";
import Slider from "react-slick";
import Resume from "../Resume/Hemang_Solanki_Resume.pdf";
import portfolio from "../Images/portfolio-profile-pic.jpeg";

const Home = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [loading, setLoading] = useState(false);
  // const form = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({
        position: "top-right",
        title: "Form Incomplete",
        description: "Please complete all fields",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    emailjs
      .sendForm(
        'service_p0zl70f',
        'template_3e49d2r',
        form.current,
        'tg5A-jEPnntEpWtz6'
      )
      .then(
        (result) => {
          toast({
            position: "top-right",
            title: "Email Sent ✔",
            description: `Thank you ${name} for the message!`,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          toast({
            position: "top-right",
            title: "Error",
            description: "Failed to send email: " + error.text,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };


  const downloadResume = async () => {
    window.open(Resume, "_blank");
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Hemang_Solanki_Resume.5a04bb8c86185b3504fb.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const form = useRef();
  const toast = useToast();

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: matchMedia("(max-width: 425px)").matches
      ? 1
      : matchMedia("(max-width: 1024px)").matches
        ? 2
        : 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    // * it's from Aos library to to use scroll designing
    Aos.init();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    // .sendForm(
    //   process.env.service_p0zl70f ,
    //   process.env.template_3e49d2r,
    //   form.current,
    //   process.env.REACT_APP_SERVICE_SECRET
    // )
    emailjs.sendForm(
      'service_p0zl70f',          // Your Service ID
      'template_3e49d2r',         // Your Template ID
      form.current,
      'tg5A-jEPnntEpWtz6'        // Your Public Key
    )
      .then(
        (result) => {
          toast({
            position: "top-right",
            title: "Email Sent ✔",
            description: `Thank You ${form.current.from_name.value.split(" ")[0]
              } for the message!`,
            status: "success",
            duration: 5000,
            isClosable: true,
          });

          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast({
            position: "top-right",
            title: "Email Not sent.",
            description: "There is some error",
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };



  return (
    <Box>
      <Box id="home">
        <Flex
          flexDirection={["column-reverse", "column-reverse", "row"]}
          m="auto"
          justifyContent="space-around"
          alignItems="center"
          h="100%"
        >
          <Box data-aos="fade-down">
            <Heading>
              Hey! <span className="themeText">I'm</span>
            </Heading>
            <Box className="content">
              <Heading
                fontSize="3.3em"
                className="text"
                data-text="Hemang Solanki"
              >
                <span className="themeText">Hemang Solanki</span>
              </Heading>
            </Box>
            <Text>
              Am a Software Developer, passionate and experienced in building
              Web applications.
            </Text>
            <HStack
              className="hireMe"
              onClick={downloadResume}
            >
              <a>
                <Button>
                  Resume <GoCloud />
                </Button>
              </a>
            </HStack>
          </Box>
          <Box data-aos="fade-down">
            <Svg1 />
          </Box>
        </Flex>
      </Box>

      {/* About me */}

      <Box id="aboutMe">
        <Heading>
          About <span className="themeText">me</span>
        </Heading>
        <Flex
          flexDirection={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
          alignItems="center"
          h="100%"
        >
          <div data-aos="fade-right">
            <Svg3 />
          </div>

          <Flex data-aos="fade-left">
            <Flex w="100%" gap="10%" justifyContent="center">
              <Image
                boxSize="250px"
                src={portfolio}
                alt="Hemang Solanki Avatar"
              />
              <Svg3 />
            </Flex>

            <Box>
              <Text>
                I am currently pursuing a Bachelor of Engineering in Computer
                Engineering and a Full-Stack Development course at Red & White
                Multimedia Education. Passionate about front-end development, I
                specialize in creating visually appealing, responsive, and user-
                friendly websites. My technical proficiency allows me to design
                and develop any type of web application, with a strong focus on
                delivering high-quality solutions. I am known for my sharp
                problem-solving skills and innovative thinking, consistently
                delivering outstanding results in every project. As I look
                forward to my first work experience, I am eager to contribute my
                skills, creativity, and passion to a dynamic team in the field
                of web development.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* Technical Skills section */}
      <Box id="skills">
        <Heading>
          Technical
          <span className="themeText"> Skills</span>
        </Heading>
        <Flex className="skills">
          <Flex>
            <Heading size="lg">
              Front<span className="themeText">end</span>
            </Heading>
            <Box>
              {skills
                .filter((el) => el.tag === "frontend")
                .map((skill) => (
                  <Box key={skill.id} className="skill" data-aos="zoom-in-up">
                    <Box>
                      <Image src={skill.icon} alt={`${skill.title} icon`} />
                    </Box>
                    <Text>{skill.title}</Text>
                  </Box>
                ))}
            </Box>
          </Flex>
          <Flex>
            <Heading size="lg">
              Back<span className="themeText">end</span>
            </Heading>
            <Box>
              {skills
                .filter((el) => el.tag === "backend")
                .map((skill) => (
                  <Box key={skill.id} className="skill" data-aos="zoom-in-down">
                    <Box>
                      <Image src={skill.icon} alt={`${skill.title} icon`} />
                    </Box>
                    <Text>{skill.title}</Text>
                  </Box>
                ))}
            </Box>
          </Flex>
          <Flex>
            <Heading size="lg">
              Platforms <span className="themeText">& Tools</span>
            </Heading>
            <Box>
              {skills
                .filter((el) => el.tag === "platform")
                .map((skill) => (
                  <Box key={skill.id} className="skill" data-aos="zoom-in">
                    <Box>
                      <Image src={skill.icon} alt={`${skill.title} icon`} />
                    </Box>
                    <Text>{skill.title}</Text>
                  </Box>
                ))}
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* show projects */}
      <Box id="projects">
        <Heading textAlign="center">
          Featured <span className="themeText">Projects</span>
        </Heading>
        <Slider {...settings}>
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </Slider>
      </Box>

      {/* Github Statistics */}
      <Box id="githubStats">
        <Heading textAlign="center">
          Github <span className="themeText">stats</span>
        </Heading>
        <Center className="github-stats">
          <Image
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Hemang-solanki&layout=compact&hide_border=true&theme=radical"
            alt="Hemang's most used languages"
          />
          <Image
            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Hemang-solanki&theme=radical"
            alt="Hemang's github Stats"
          />
        </Center>

        <Center className="github-stats">
          <Image
            src="https://github-readme-stats.vercel.app/api?username=Hemang-solanki&show_icons=true&locale=en&theme=dark"
            alt="hemang-solanki"
          />
          <Image
            src="https://github-readme-streak-stats.herokuapp.com/?user=Hemang-solanki&theme=dark"
            alt="hemang-solanki"
          />
        </Center>

        <Center>
          <GitHubCalendar
            username="hemang-solanki"
            color="#4a8af4"
            children={<ReactTooltip html />}
          />
        </Center>
      </Box>

      {/* Contact me */}
      <Box id="contactMe">
        <Heading textAlign="center">
          Contact <span className="themeText">Me</span>
        </Heading>
        <Flex
          flexDirection={["column", "column", "column", "row"]}
          alignItems="center"
        >
          <Box>
            <Svg2 />
          </Box>

          <Box className="form-section">
            <form ref={form} onSubmit={submitHandler}>
              <div className="inputBox">
                <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                  name="name" required />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                  name="email" required />
                <span>Email</span>
              </div>
              <div>
                <textarea placeholder="Message 📧"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <input type="submit"

               value="Send Message" />
            </form>
            <Flex className="contact-info">
              <HStack>
                <SiGmail color="#e34133" />
                <Text>hemanagsolanki10@gmail.com</Text>
              </HStack>
              <HStack>
                <FaPhoneAlt color="#00a14f" />
                <Text>+91 91061 01517</Text>
              </HStack>
            </Flex>
            <Flex gap={["10px", "20px", "20px", "40px"]}>
              <Link href="https://wa.me/919106101517" target="_blank">
                <Tooltip label="+91 9106101517">
                  <Box className="social-icons">
                    <Box>
                      <Image
                        w="100%"
                        src="https://brandlogos.net/wp-content/uploads/2018/10/whatsapp-logo.png"
                        alt="Whatsapp brand logo"
                      />
                    </Box>
                  </Box>
                </Tooltip>
              </Link>

              <Link
                href="https://www.linkedin.com/in/hemang-solanki-71300a254/"
                target="_blank"
              >
                <Tooltip label="Hemang Solanki">
                  <Box className="social-icons">
                    <Box>
                      <Image
                        w="100%"
                        src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png"
                        alt="Linkedin brand logo"
                      />
                    </Box>
                  </Box>
                </Tooltip>
              </Link>

              <Link href="https://github.com/Hemang-solanki" target="_blank">
                <Tooltip label="Hemang-solanki">
                  <Box className="social-icons">
                    <Box>
                      <Image
                        w="100%"
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="Github brand logo"
                      />
                    </Box>
                  </Box>
                </Tooltip>
              </Link>

              <Link href="hemanagsolanki10@gmail.com" target="_blank">
                <Tooltip label="hemanagsolanki10@gmail.com">
                  <Box className="social-icons">
                    <Box>
                      <Image
                        w="100%"
                        src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png"
                        alt="Gmail brand logo"
                      />
                    </Box>
                  </Box>
                </Tooltip>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* footer */}
      <Flex id="footer">
        <Text>Made with 💖 by Hemang Solanki</Text>
      </Flex>
    </Box>
  );
};

export default Home;
