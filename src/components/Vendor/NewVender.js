import { Avatar, Box, Button, Heading, SimpleGrid, Stack, Text ,Link, FormLabel, Input, Icon} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';

export default function NewVender() {
  return (
    <>
     <SimpleGrid columns={{ base: "1",sm: "1",md: "1", lg: "1",xl : '2', '2xl' : '2' }} spacingX='40px' spacingY='20px'>
        <Stack className={'bread m3-h'}>
          <Heading as={'h3'}>
            Add New Vender /{' '}
            <Link to={'./'} as={ReactLink} color={'#2BAF59'} >
              Home
            </Link>
          </Heading>
        </Stack>
      
      </SimpleGrid>
      <Stack bg={'#202125'} px={6} py={12} borderRadius={8}>
      <SimpleGrid columns={{ base: "1",sm: "1",md: "1", lg: "1",xl : '2', '2xl' : '2' }} spacingX='40px' spacingY='20px'>
      <Stack className='adser' gap={6}> 
      <Stack>
            <FormLabel fontWeight={400} m={0} color={'#949494'} fontSize={'14px'}>
            Enter Vendor Name
            </FormLabel>
            <Box className="Ifiled">
              <Input type="text" placeholder="Enter Your Email " />
            </Box>
          </Stack> 
          <Stack>
            <FormLabel fontWeight={400} m={0} color={'#949494'} fontSize={'14px'}>
            Contact Number
            </FormLabel>
            <Box className="Ifiled">
              <Input type="text" placeholder="Enter Your Email " />
            </Box>
          </Stack> 
          <Stack>
            <FormLabel fontWeight={400} m={0} color={'#949494'} fontSize={'14px'}>
            Email Address
            </FormLabel>
            <Box className="Ifiled">
              <Input type="text" placeholder="Enter Your Email " />
            </Box>
          </Stack> 
          <Stack>
            <Link   padding={'10px 50px'}
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
            to={'/'}
            as={ReactLink}>Add Vender</Link>
          </Stack>
      </Stack>
          <Stack>
            <FormLabel fontWeight={400} m={0} color={'#949494'} fontSize={'14px'}>
            Uplaod Picture*
            </FormLabel>
            <Box className="ufiled">
              <Input type="file"  />
            </Box>
          </Stack> 
        </SimpleGrid>
      </Stack>
    </>
  )
}
