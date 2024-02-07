import { Container, Stack, Grid, GridItem, Image, Box } from '@chakra-ui/react';
import React from 'react';
import RegisterForm from '../../components/Auth/RegisterForm';
import LeftPic from '../../components/Auth/LeftPic';
import SidePic from '../../components/Auth/SidePic';



export default function Register() {
  return (
    <>
    <Stack
        w={'100%'}
        h={'100vh'}
        overflow={'hidden'}
        alignItems={'center'}
        justifyContent={'center'}
        position={'relative'}
        bg={'#16171B'}
      >
         <SidePic/>
        <Container maxW={'9xl'}>
          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={{ base: 2, sm: 6 }}
            alignItems={'center'}
          >
            <GridItem colSpan={{ base: '4', md: '6' }}>
             <LeftPic/>
            </GridItem>
            <GridItem colSpan={{ base: '4', md: '6' }}>
            <RegisterForm />
            </GridItem>
          </Grid>
        </Container>
      </Stack>
    </>
  )
}
