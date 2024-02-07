import { Avatar, Box, Button, Heading, SimpleGrid, Stack, Text ,Link} from '@chakra-ui/react';
import React, { useState } from 'react';
import {venders} from '../../assets/data/Data.js'
import { Link as ReactLink } from 'react-router-dom';

export default function Allvender() {

  const [venderlist, setvenderlist] = useState(venders)
 

  return (
    <>
      <SimpleGrid columns={{ base: "1",sm: "1",md: "1", lg: "1",xl : '2', '2xl' : '2' }} spacingX='40px' spacingY='20px'>
        <Stack className={'bread m3-h'}>
          <Heading as={'h3'}>
            All Vender /{' '}
            <Link to={'./'} as={ReactLink} color={'#2BAF59'} >
              Home
            </Link>
          </Heading>
        </Stack>
        <Stack alignItems={{base: "start",xl : 'end'}}>
          <Link
            padding={'10px 50px'}
            bg={
              'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))'
            }
            color={'#fff'}
            fontWeight={'500'}
            lineHeight={'inherit'}
            borderRadius={12}
            _hover={{
              color: '#000',
            }}
            w={'fit-content'}
            to={'/addvender'}
            as={ReactLink}
          >
            Add New Vendor
          </Link>
        </Stack>
      </SimpleGrid>
      <Stack className="p1">
        <Text>You’ve 8 new vendors available</Text>
      </Stack>
      <Stack bg={'#202125'} px={6} py={12} borderRadius={8}>
        <SimpleGrid  columns={{ base: "1",sm: "1",md: "1", lg: "2",xl : '2', '2xl' : '2' }} spacingX='40px' spacingY='20px'>
          {
            venderlist?.map((v,e)=>{
              return(
          <Stack key={e} bg={'#2E3035'} px={4} py={6}   borderRadius={6}>
            <Box display={'flex'} gap={3} mb={6}>
            <Avatar name='Kent Dodds' src={v.avtar} />
               <Box   className='venbox p1 m3-h'>
              <Text>{v.id}</Text>
              <Heading as={'h3'}>{v.name}</Heading>
            </Box>
            </Box>
            <SimpleGrid columns={{ base: "1",sm: "1",md: "1", lg: "1",xl : '2', '2xl' : '2' }} spacingX='40px' spacingY='20px'>
            <Stack   className='venbox p1 m3-h'>
              <Text>Contact Number</Text>
              <Heading as={'h3'}>03245978412</Heading>
            </Stack>
            <Stack   className='venbox p1 m3-h'>
              <Text>Email Address</Text>
              <Heading as={'h3'}>info@continental.com</Heading>
            </Stack>
            </SimpleGrid>
          </Stack>
              )
            })
          }
          
         
          
        </SimpleGrid>
      </Stack>
    </>
  );
}
