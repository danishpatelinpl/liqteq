import { Stack, Text, Box, Image } from "@chakra-ui/react";
import {Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";
import { FaStar } from "react-icons/fa";
import revImg from '../../assets/images/revimg.png'


const ReviewSlide =()=>{
    return(
        <>
            <Swiper
            slidesPerView={1}
            // spaceBetween={"30px"}
            // breakpoints={{
            //     375: {
            //     slidesPerView: 1,
            //     spaceBetween: 0,
            //     },
            //     768: {
            //     slidesPerView: 2,
            //     spaceBetween: '15px',
            //     },
            //     1024: {
            //     slidesPerView: 1,
            //     spaceBetween: '15px',
            //     }
            // }}
            >
                <SwiperSlide>
                    <Stack alignItems={"center"} pt={"60px"} justifyContent={"center"}>
                        <Box bg={"#000"} width={"1000px"} textAlign={"center"} borderRadius={"20px"}>
                            <Image src={revImg} width={"120px"} height={"120px"} m={"auto"} mt={"-60px"}/>
                            <Text fontSize={"18px"} fontWeight={"700"} maxW={"800px"} m={"auto"} color={"#fff"} p={"20px 0px"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                            <Stack
                                direction={"row"}
                                color={"#FFF502"}
                                fontSize={"20px"}
                                mb={"20px"}
                                justifyContent={"center"}
                                >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </Stack>
                            <Box textAlign={"center"} p={"20px 0px"}>
                                <Text fontSize={"18px"} fontWeight={"700"} color={"#fff"}>Dorthey W</Text>
                                <Text fontSize={"18px"} fontWeight={"700"} color={"#fff"}>CEO & Founder</Text>
                            </Box>
                        </Box>
                    </Stack>
                </SwiperSlide>
                <SwiperSlide>
                    <Stack alignItems={"center"} pt={"60px"} justifyContent={"center"}>
                        <Box bg={"#000"} width={"1000px"} textAlign={"center"} borderRadius={"20px"}>
                            <Image src={revImg} width={"120px"} height={"120px"} m={"auto"} mt={"-60px"}/>
                            <Text fontSize={"18px"} fontWeight={"700"} maxW={"800px"} m={"auto"} color={"#fff"} p={"20px 0px"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                            <Stack
                                direction={"row"}
                                color={"#FFF502"}
                                fontSize={"20px"}
                                mb={"20px"}
                                justifyContent={"center"}
                                >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </Stack>
                            <Box textAlign={"center"} p={"20px 0px"}>
                                <Text fontSize={"18px"} fontWeight={"700"} color={"#fff"}>Dorthey W</Text>
                                <Text fontSize={"18px"} fontWeight={"700"} color={"#fff"}>CEO & Founder</Text>
                            </Box>
                        </Box>
                    </Stack>
                </SwiperSlide>
                <SwiperSlide>
                    <Stack alignItems={"center"} pt={"60px"} justifyContent={"center"}>
                        <Box bg={"#000"} width={"1000px"} textAlign={"center"} borderRadius={"20px"}>
                            <Image src={revImg} width={"120px"} height={"120px"} m={"auto"} mt={"-60px"}/>
                            <Text fontSize={"18px"} fontWeight={"700"} maxW={"800px"} m={"auto"} color={"#fff"} p={"20px 0px"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                            <Stack
                                direction={"row"}
                                color={"#FFF502"}
                                fontSize={"20px"}
                                mb={"20px"}
                                justifyContent={"center"}
                                >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </Stack>
                            <Box textAlign={"center"} p={"20px 0px"}>
                                <Text fontSize={"18px"} fontWeight={"700"} color={"#fff"}>Dorthey W</Text>
                                <Text fontSize={"18px"} fontWeight={"700"} color={"#fff"}>CEO & Founder</Text>
                            </Box>
                        </Box>
                    </Stack>
                </SwiperSlide>
                <SwiperSlide>
                    <Stack alignItems={"center"} pt={"60px"} justifyContent={"center"}>
                        <Box bg={"#000"} width={"1000px"} textAlign={"center"} borderRadius={"20px"}>
                            <Image src={revImg} width={"120px"} height={"120px"} m={"auto"} mt={"-60px"}/>
                            <Text fontSize={"18px"} fontWeight={"700"} maxW={"800px"} m={"auto"} color={"#fff"} p={"20px 0px"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                            <Stack
                                direction={"row"}
                                color={"#FFF502"}
                                fontSize={"20px"}
                                mb={"20px"}
                                justifyContent={"center"}
                                >
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </Stack>
                            <Box textAlign={"center"} p={"20px 0px"}>
                                <Text fontSize={"18px"} fontWeight={"700"} color={"#fff"}>Dorthey W</Text>
                                <Text fontSize={"18px"} fontWeight={"700"} color={"#fff"}>CEO & Founder</Text>
                            </Box>
                        </Box>
                    </Stack>
                </SwiperSlide>
            </Swiper>
        </>
    )
};

export default ReviewSlide;