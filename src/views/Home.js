import { Stack, Text, Box, Container, Button, Image, Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import reg1 from '../assets/images/reg1.png';
import reg2 from '../assets/images/reg2.png';
import reg3 from '../assets/images/reg3.png';
import vid from '../assets/images/vid.png';
import over from '../assets/images/over.png';
import pack1 from '../assets/images/pack1.png';
import pack2 from '../assets/images/pack2.png';
import ReviewSlide from "../components/Sliders/ReviewSlide";
import Header from '../components/Header/index.js';
import Footer from '../components/Footer/index.js';


export default function Home() {

  return (
    <>
<Header/>
    <Box
      bgColor={'#000'}
      p={"70px 0px"}
      height={"850px"}
      >
      <Container maxW="container.xl">
        <Stack
          w={'100%'}
          direction={'row'}
          alignItems={'baseline'}
          justifyContent={'space-between'}
          color={'#fff'}  
          >
            <Box>
              <Text
                color={'#FFF'}
                fontSize={"60px"}
                fontWeight={"700"}
                mb={"20px"}
                lineHeight={"normal"}
                >
                The Operating System <br/> For{' '}
                  <Text
                  as={"span"}
                  color={'#1D723B !important'}
                  >
                  Auto Repair & Detailing
                  </Text>
                  {' '}Business
              </Text>
              <Text
                fontSize={"18px"}
                fontWeight={"500"}
                maxW={"440px"}
                >
                With just few Clicks, you’ll be able to connect your favorite application, and say goodbye to manual work
              </Text>
            </Box>
            <Box>
              <Button
               href={"#"}
               height={"auto"}
               borderRadius={"10px"}
               p={"13px 40px"}
               bg={"var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))"}
               border={"2px solid #1D723B"}
               mb={"10px"}
               _hover={{bg:"none",color:'#1D723B'}}
               >
                Start Using Your Auto Detailing Software
              </Button>

              <Stack
              direction={'row'}
              alignItems={'flex-start'}
              justifyContent={"space-between"}
              mb={"20px"}
              >
                <Box>
                  <Text fontSize={"26px"} fontWeight={"700"} color={"#1D723B"}>55,000 +</Text>
                  <Text fontWeight={"500"}>Appointment <br/> Booked</Text>
                </Box>
                <Box>
                  <Text fontSize={"26px"} fontWeight={"700"} color={"#1D723B"}>32Hours</Text>
                  <Text fontWeight={"500"}>Saved Monthly</Text>
                </Box>
                <Box>
                  <Text fontSize={"26px"} fontWeight={"700"} color={"#1D723B"}>2,500+</Text>
                  <Text fontWeight={"500"}>Employees</Text>
                </Box>
              </Stack>

              <Stack
              direction={"row"}
              color={"#FFF502"}
              fontSize={"30px"}
              mb={"20px"}
              >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </Stack>
              <Stack direction={'row'} alignItems={'center'}>
                <Stack direction={"row"}>
                  <Image width={"60px"} height={"60px"} src={reg1}/>
                  <Image width={"60px"} height={"60px"} ml={"-10px !important"} src={reg2}/>
                  <Image width={"60px"} height={"60px"} ml={"-10px !important"} src={reg3}/>
                </Stack>
                <Box>
                  <Text fontSize={"32px"} fontWeight={"700"}>Regular{' '}<Text as="span" color={"#1D723B "}>Users</Text></Text>
                </Box>
              </Stack>

            </Box>
        </Stack>
        <Box pt={"50px"}>
          <Image src={vid} margin={"auto"} width={"650px"} height={"auto"} />
        </Box>
      </Container>
    </Box>

    <Box
     style={{
      backgroundImage: `url(${over})`,
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center',
      backgroundSize:'cover'
      }}
      height={'660px'}
      mt={"-150px"}
      pt={"200px"}
      >
      <Container maxW={"container.xl"}>
        <Box textAlign={"center"}>
          <Text 
          fontSize={"27px"} 
          fontWeight={"500"} 
          lineHeight={"normal"} 
          color={"#1D723B "}
          >
          Overview
          </Text>
          <Text 
          fontSize={"60px"} 
          fontWeight={"700"} 
          lineHeight={"normal"}
          >
          What is Your Name?
          </Text>
        </Box>
        <Box textAlign={"center"} maxW={'1080px'} margin={"auto"} p={"30px 0px"}>
          <Text
            fontSize={"20px"} 
            fontWeight={"600"}
            mb={"30px"}
          >
            Yourname is a cloud-Based car detaling business software that lets your business form multiple from multiple devices in real-time, it streamlines you to save time, minimize mistakes, and focus better on your work.
          </Text>
          <Text
            fontSize={"20px"} 
            fontWeight={"500"}
            mb={"30px"}
          >
          Your clients will have a more convenient and pleasant experience. Our software will help you improve initial impressions,attract more customers, and generate more sales.
          </Text>

          <Button
            href={"#"}
            height={"auto"}
            borderRadius={"10px"}
            p={"13px 40px"}
            color={"#fff"}
            bg={"var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))"}
            border={"2px solid #1D723B"}
            mb={"10px"}
            _hover={{bg:"none",color:'#1D723B'}}
          >
            Learn More
          </Button>
        </Box>
      </Container>
    </Box>

    <Box
      bg={"#000"}
      p={"40px 0px"}
    >
      <Container maxW={'container.xl'}>
        <Box>
          <Text
            fontSize={"60px"}
            fontWeight={"700"}
            textAlign={"center"}
            mb={"30px"}
            style={{
              background: 'var(--grdient-green, linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
              WebkitBackgroundClip: 'text',
              backgroundClip:'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Benefits
          </Text>
          <Text
            maxW={'700px'}
            margin={"auto"}
            textAlign={"center"}
            color={"#fff"}
            fontSize={"18px"}
            fontWeight={"500"}
            mb={"30px"}
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
          </Text>
        </Box>
        <Box mb={"30px"}>
          <Stack direction={"row"} alignItems={"center"} justifyContent={'space-between'}>
            <Box 
              width={"220px"} 
              height={"200px"}
              p={"65px 10px"}
              borderRadius={"14px"}
              style={{
                background: 'var(--grdient-green, linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))'
              }}
            >
              <Text
              textAlign={"center"}
              color={"#fff"}
              fontSize={"26px"}
              fontWeight={"500"}>Track Your Business Metrics</Text>
            </Box>
            <Box 
              width={"220px"} 
              height={"200px"}
              p={"65px 10px"}
              borderRadius={"14px"}
              bg={"#1E1E1E"}
            >
              <Text
              textAlign={"center"}
              color={"#fff"}
              fontSize={"26px"}
              fontWeight={"500"}>Real-Time Tracking</Text>
            </Box>
            <Box 
              width={"220px"} 
              height={"200px"}
              p={"65px 10px"}
              borderRadius={"14px"}
              style={{
                background: 'var(--grdient-green, linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))'
              }}
            >
              <Text
              textAlign={"center"}
              color={"#fff"}
              fontSize={"26px"}
              fontWeight={"500"}>Measure Productivity</Text>
            </Box>
            <Box 
              width={"220px"} 
              height={"200px"}
              p={"65px 10px"}
              borderRadius={"14px"}
              bg={"#1E1E1E"}
            >
              <Text
              textAlign={"center"}
              color={"#fff"}
              fontSize={"26px"}
              fontWeight={"500"}>Track Your Payments</Text>
            </Box>
            <Box 
              width={"220px"} 
              height={"200px"}
              p={"65px 15px"}
              borderRadius={"14px"}
              style={{
                background: 'var(--grdient-green, linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))'
              }}
            >
              <Text
              textAlign={"center"}
              color={"#fff"}
              fontSize={"26px"}
              fontWeight={"500"}>Customer Aging Module</Text>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>

    <Box
      bg={"#000"}
      p={'30px 0px'}
      >
      <Container maxW={"container.xl"}>
        <Box maxW={"730px"} m={"auto"} mb={'50px'}>
          <Text 
            fontSize={"60px"} 
            fontWeight={"700"} 
            textAlign={"center"} 
            lineHeight={"normal"}
            color={"#fff"}
            >
            Flexible Plans to help grow your business
          </Text>
        </Box>
        <Box>
          <Stack direction={"row"} justifyContent={"center"} gap={"40px"}>

            <Box
              width={'400px'}
              bg={'#fff'}
            >
              <Box
                color={"#fff"}
                height={"244px"}
                p={"20px 26px"}
                style={{ backgroundImage: `url(${pack1})`, backgroundRepeat:'no-repeat',backgroundPosition:'center', backgroundSize:'cover'}}>
                <Text
                  fontSize={"40px"} 
                  fontWeight={"700"}
                  mb={"10px"}
                  >
                  Basic Plan
                </Text>
                <Text
                  fontSize={"19px"} 
                  fontWeight={"500"} 
                  >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                </Text>
              </Box>
              <Box
                p={"20px 35px 35px 35px"}
              >
                <Stack direction={"row"} alignItems={"center"} gap={"10px"} mb={"15px"}>
                  <Box p={"3px"} bg={"#1D723B"} borderRadius={"50%"}>
                    <IoMdCheckmark color={"#fff"}/>
                  </Box>
                  <Text fontWeight={"500"} maxW={"250px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} gap={"10px"} mb={"15px"}>
                  <Box p={"3px"} bg={"#1D723B"} borderRadius={"50%"}>
                    <IoMdCheckmark color={"#fff"}/>
                  </Box>
                  <Text fontWeight={"500"} maxW={"250px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} gap={"10px"} mb={"25px"}>
                  <Box p={"3px"} bg={"#1D723B"} borderRadius={"50%"}>
                    <IoMdCheckmark color={"#fff"}/>
                  </Box>
                  <Text fontWeight={"500"} maxW={"250px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Stack>
                <Box mb={"20px"}>
                    <Text fontSize={"40px"} fontWeight={"700"}>$14.99/<Text as={"span"} fontSize={"18px"} fontWeight={"500"}>Monthly</Text></Text>
                </Box>
                <Button href={"#"} w={"100%"} border={"2px solid #1D723B"} bg={"var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))"} color={"#fff"} fontSize={"19px"} fontWeight={"500"} _hover={{background:"none",color:"#1D723B"}}>Choose Plan</Button>
              </Box>
            </Box>

            <Box
              width={'400px'}
              bg={"#1D723B"}
            >
              <Box
                color={"#000"}
                width={'400px'}
                height={"244px"}
                p={"20px 26px"}
                style={{ backgroundImage: `url(${pack2})`, backgroundRepeat:'no-repeat',backgroundPosition:'center', backgroundSize:'cover'}}>
                <Text
                  fontSize={"40px"} 
                  fontWeight={"700"} 
                  >
                  Premium Plan
                </Text>
                <Text
                  fontSize={"20px"} 
                  fontWeight={"500"} 
                  >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                </Text>
              </Box>
              <Box
                p={"20px 35px 35px 35px"}
              >
                <Stack direction={"row"} alignItems={"center"} gap={"10px"} mb={"15px"}>
                  <Box p={"3px"} bg={"#fff"} borderRadius={"50%"}>
                    <IoMdCheckmark color={"#1D723B"}/>
                  </Box>
                  <Text color={"#fff"} fontWeight={"500"} maxW={"250px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} gap={"10px"} mb={"15px"}>
                  <Box p={"3px"} bg={"#fff"} borderRadius={"50%"}>
                    <IoMdCheckmark color={"#1D723B"}/>
                  </Box>
                  <Text color={"#fff"} fontWeight={"500"} maxW={"250px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} gap={"10px"} mb={"15px"}>
                  <Box p={"3px"} bg={"#fff"} borderRadius={"50%"}>
                    <IoMdCheckmark color={"#1D723B"}/>
                  </Box>
                  <Text color={"#fff"} fontWeight={"500"} maxW={"250px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Stack>
                <Box mb={"20px"}>
                    <Text fontSize={"40px"} fontWeight={"700"} color={"#fff"}>$14.99/<Text as={"span"} fontSize={"18px"} fontWeight={"500"}>Monthly</Text></Text>
                </Box>
                <Button href={"#"} w={"100%"} bg={"#fff"} color={"#000"} border={"2px solid #fff"} fontSize={"19px"} fontWeight={"500"} _hover={{background:"none",color:"#fff"}}>Choose Plan</Button>
              </Box>
            </Box>

          </Stack>
        </Box>
      </Container>
    </Box>

    <Box
      p={"50px 0px"}
    >
      <Container maxW={"container.xl"}>
        <Box textAlign={"center"} mb={"40px"}>
          <Text fontSize={"27px"} fontWeight={"700"} mb={"10px"} 
            style={{
              background: 'var(--grdient-green, linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
              WebkitBackgroundClip: 'text',
              backgroundClip:'text',
              WebkitTextFillColor: 'transparent',
            }}>
            Testimonials
          </Text>
          <Box maxW={"500px"} m={"auto"}>
            <Text fontSize={"60px"} fontWeight={"700"} lineHeight={"1.1"} mb={"15px"}>
              What our customers say
            </Text>
            <Text fontSize={"18px"} fontWeight={"700"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. </Text>
          </Box>
        </Box>
        <Box>
          <ReviewSlide/>
        </Box>
      </Container>
    </Box>

    <Box
      bg={"#000"}
      p={"50px 0px"}
    >
      <Container maxW={"container.xl"}>
          <Box textAlign={"center"}>
            <Text fontSize={"27px"} fontWeight={"700"} color={"var(--green, #2EC487)"}>FAQ</Text>
            <Box color={"#fff"} maxW={"610px"} m={"auto"} mb={"30px"}>
              <Text fontSize={"60px"} fontWeight={"700"} lineHeight={"1.1"} mb={"20px"}>Frequently Asked Questions</Text>
              <Text fontSize={"18px"} fontWeight={"700"} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. </Text>
            </Box>
            <Box>
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem border={"none"} mb={"30px"}>
                    <h2>
                        <AccordionButton p={"20px 40px"} borderRadius={"15px"} border={"2px solid #fff"} boxShadow={"1px 1px 6px #00000042"}>
                            <Box as="span" flex='1' textAlign='left' fontSize={"22px"} fontWeight={"700"} color={"#FFF"} >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Box>
                            <AccordionIcon color={"#FFF"} fontSize={"30px !important"}/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} p={"20px 40px 40px 40px"} bg={"#1E1E1E"} borderRadius={"0px 0px 10px 10px"}>
                      <Text textAlign='left' fontSize={"18px"} fontWeight={"700"} color={"#FFF"} maxW={"980px"}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem border={"none"} mb={"30px"}>
                    <h2>
                        <AccordionButton p={"20px 40px"} borderRadius={"15px"} border={"2px solid #fff"} boxShadow={"1px 1px 6px #00000042"}>
                            <Box as="span" flex='1' textAlign='left' fontSize={"22px"} fontWeight={"700"} color={"#FFF"} >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Box>
                            <AccordionIcon color={"#FFF"} fontSize={"30px !important"}/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} p={"20px 40px 40px 40px"} bg={"#1E1E1E"} borderRadius={"0px 0px 10px 10px"}>
                      <Text textAlign='left' fontSize={"18px"} fontWeight={"700"} color={"#FFF"} maxW={"980px"}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem border={"none"} mb={"30px"}>
                    <h2>
                        <AccordionButton p={"20px 40px"} borderRadius={"15px"} border={"2px solid #fff"} boxShadow={"1px 1px 6px #00000042"}>
                            <Box as="span" flex='1' textAlign='left' fontSize={"22px"} fontWeight={"700"} color={"#FFF"} >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Box>
                            <AccordionIcon color={"#FFF"} fontSize={"30px !important"}/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} p={"20px 40px 40px 40px"} bg={"#1E1E1E"} borderRadius={"0px 0px 10px 10px"}>
                      <Text textAlign='left' fontSize={"18px"} fontWeight={"700"} color={"#FFF"} maxW={"980px"}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem border={"none"}>
                    <h2>
                        <AccordionButton p={"20px 40px"} borderRadius={"15px"} border={"2px solid #fff"} boxShadow={"1px 1px 6px #00000042"}>
                            <Box as="span" flex='1' textAlign='left' fontSize={"22px"} fontWeight={"700"} color={"#FFF"} >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Box>
                            <AccordionIcon color={"#FFF"} fontSize={"30px !important"}/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} p={"20px 40px 40px 40px"} bg={"#1E1E1E"} borderRadius={"0px 0px 10px 10px"}>
                      <Text textAlign='left' fontSize={"18px"} fontWeight={"700"} color={"#FFF"} maxW={"980px"}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
            </Box>
          </Box>
      </Container>
    </Box>
    <Footer/>

    </>
  );
}