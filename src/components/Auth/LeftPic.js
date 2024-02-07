import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Screen from '../../assets/images/screen.png'

export default function LeftPic() {
  return (
    <>
   
      <Stack pl={16} position={'relative'}>
      
        <Stack className="m2-h p2" mb={6}>
          <Text color={'#fff'}>The #1 rated app for Automotive Detailers</Text>
          <Heading as={'h2'}>Auto Detailing<br/>
Scheduling Software</Heading>
        </Stack>
        <Stack  className='rotate' >
            <Box className='rotatebox'>
            <Image   src={Screen}/>
            </Box>
            
        </Stack>
      </Stack>
    </>
  );
}
