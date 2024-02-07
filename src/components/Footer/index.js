import { Stack, Text, Box, Container, Button, Image, Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <Box>
        <Container maxW={"container.xl"}>
          <Box p={"40px 0px"} borderBottom={"2px solid #000"}>
            <Stack direction={"row"} alignItems={"baseline"} justifyContent={"space-between"} flexWrap={"wrap"}>

              <Box>
                <Text fontSize={"50px"} fontWeight={"600"} maxW={"500px"} lineHeight={"1.1"}>Did finding us help your problem?</Text>
              </Box>
              <Box>
                <Text fontSize={"18px"} fontWeight={"500"}>MEET US</Text>
                <Text maxW={"215px"}>Lorem ipsum dolor sit amet, consectetur </Text>
              </Box>
              <Box>
                <Text fontSize={"18px"} fontWeight={"500"}>CALL US</Text>
                <Text>(+01) 873 – 924</Text>
              </Box>
              <Box>
                <Text fontSize={"18px"} fontWeight={"500"}>MAIL US</Text>
                <Text>info@arcsystems.com</Text>
              </Box>
            </Stack>
          </Box>

          <Box p={"15px 0px"} borderBottom={"2px solid #000"}>
            <Stack direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"}>
              <Box>
                <Text fontSize={"18px"} fontWeight={"500"} color={"#2BAF59"} mb={"10px"}>Follow us</Text>
                <Link to={"#"}>
                  <Text fontSize={"18px"} fontWeight={"500"} _hover={{color:"#2BAF59"}}>Instagram</Text>
                </Link>
                <Link to={"#"}>
                  <Text fontSize={"18px"} fontWeight={"500"} _hover={{color:"#2BAF59"}}>Twitter</Text>
                </Link>
                <Link to={"#"}>
                  <Text fontSize={"18px"} fontWeight={"500"} _hover={{color:"#2BAF59"}}>Linkedin</Text>
                </Link>
                <Link to={"#"}>
                  <Text fontSize={"18px"} fontWeight={"500"} _hover={{color:"#2BAF59"}}>Youtube</Text>
                </Link>
              </Box>
              <Box>
                <Text fontSize={"18px"} fontWeight={"500"} color={"#2BAF59"} mb={"10px"}>USEFUL LINKS</Text>
                <Link to={"#"}>
                  <Text fontSize={"18px"} fontWeight={"500"} _hover={{color:"#2BAF59"}}>Help Center</Text>
                </Link>
              </Box>
              <Box>
                <Text fontSize={"18px"} fontWeight={"500"} color={"#2BAF59"} mb={"10px"}>QUICK LINKS</Text>
                <Link to={"#"}>
                  <Text fontSize={"18px"} fontWeight={"500"} _hover={{color:"#2BAF59"}}>Home</Text>
                </Link>
                <Link to={"#"}>
                  <Text fontSize={"18px"} fontWeight={"500"} _hover={{color:"#2BAF59"}}>About Us</Text>
                </Link>
                <Link to={"#"}>
                  <Text fontSize={"18px"} fontWeight={"500"} _hover={{color:"#2BAF59"}}>Services</Text>
                </Link>
                <Link to={"#"}>
                  <Text fontSize={"18px"} fontWeight={"500"} _hover={{color:"#2BAF59"}}>Contact Us</Text>
                </Link>
              </Box>
              <Box>
                <Text fontSize={"18px"} fontWeight={"500"} color={"#2BAF59"} mb={"10px"}>NAVIGATIONS</Text>
                <Link to={"#"}>
                  <Text fontSize={"18px"} fontWeight={"500"} _hover={{color:"#2BAF59"}}>About Us</Text>
                </Link>
                <Link to={"#"}>
                  <Text fontSize={"18px"} fontWeight={"500"} _hover={{color:"#2BAF59"}}>Affiliate</Text>
                </Link>
                <Link to={"#"}>
                  <Text fontSize={"18px"} fontWeight={"500"} _hover={{color:"#2BAF59"}}>Help Center</Text>
                </Link>
              </Box>
              <Box>
                <Text fontSize={"18px"} fontWeight={"500"} color={"#2BAF59"}>WORK HOURS</Text>
                <Text mt={"15px"} mb={"5px"} borderBottom={"1px solid #000"} fontWeight={"500"}>Mon - Wed:9AM - 4PM</Text>
                <Text mt={"15px"} mb={"5px"} borderBottom={"1px solid #000"} fontWeight={"500"}>Thur- Fri :9AM - 5PM</Text>
                <Text mt={"15px"} mb={"5px"} fontWeight={"500"}>Weekend: Closed</Text>
              </Box>
            </Stack>
            <Box p={"60px 0px 0px 0px"}>
              <Text fontSize={"18px"} fontWeight={"500"}>Copyright <Text as={"a"} href={"/"} color={"#2BAF59"}>ARC SYSTEMS</Text> all right reserved</Text>
            </Box>
          </Box>
          <Stack alignItems={"flex-end"} p={"10px 0px"} flexWrap={"wrap"}>
            <Link to="#">
              <Text fontSize={"18px"} fontWeight={"500"} _hover={{color:"#2BAF59"}}>Privacy Policy | Term of use</Text>
            </Link>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
