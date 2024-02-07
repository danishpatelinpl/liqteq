import React from 'react'
import NewPassform from '../../components/Auth/NewPassform'
import { Container, Stack, Grid, GridItem, Image, Box } from '@chakra-ui/react';
import LeftPic from '../../components/Auth/LeftPic';
import SidePic from '../../components/Auth/SidePic';


export default function NewPassword() {
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
            <NewPassform/>
            </GridItem>
          </Grid>
        </Container>
      </Stack>
    </>
  )
}
