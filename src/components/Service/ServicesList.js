import {
  Avatar,
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Link,
  Checkbox,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { servicesdetails } from '../../assets/data/Data.js';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

export default function ServicesList() {
  const [services, setservices] = useState(servicesdetails);

  return (
    <>
      <SimpleGrid
        columns={{ base: '1', sm: '1', md: '1', lg: '1', xl: '2', '2xl': '2' }}
        spacingX="40px"
        spacingY="20px"
      >
        <Stack className={'bread m3-h'}>
          <Heading as={'h3'}>
            List of Services /{' '}
            <Link to={'./'} as={ReactLink} color={'#2BAF59'}>
              Home
            </Link>
          </Heading>
        </Stack>
        <Stack alignItems={{ base: 'start', xl: 'end' }}>
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
            to={'/addservices'}
            as={ReactLink}
          >
            Add New Service
          </Link>
        </Stack>
      </SimpleGrid>
      <UnorderedList gap={6} display={'flex'} py={5} listStyleType={'none'}>
        <ListItem>
          <Link
         padding={'10px 50px'}
        bg={'transparent'}
        
         fontWeight={'500'}
         lineHeight={'inherit'}
         color={'#7D7D7D'}
         border={'1px solid #7D7D7D'}
         borderRadius={12}
         _hover={{
           color: '#fff',
           bg : 'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
           border : '1px solid #2BAF59'
         }}
         w={'fit-content'}
         to={'/'}
         as={ReactLink}
       >Maintenance</Link>
        </ListItem>
        <ListItem>
          <Link
         padding={'10px 50px'}
        bg={'transparent'}
        color={'#7D7D7D'}
         fontWeight={'500'}
         lineHeight={'inherit'}
         border={'1px solid #7D7D7D'}
         borderRadius={12}
         _hover={{
           color: '#fff',
           bg : 'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
           border : '1px solid #2BAF59'
         }}
         w={'fit-content'}
         to={'/'}
         as={ReactLink}
       >Engine</Link>
        </ListItem>
        <ListItem>
          <Link
         padding={'10px 50px'}
        bg={'transparent'}
        color={'#7D7D7D'}
         fontWeight={'500'}
         lineHeight={'inherit'}
        
         border={'1px solid #7D7D7D'}
         borderRadius={12}
         _hover={{
           color: '#fff',
           bg : 'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
           border : '1px solid #2BAF59'
         }}
         w={'fit-content'}
         to={'/'}
         as={ReactLink}
       >Interior</Link>
        </ListItem>
        <ListItem>
          <Link
         padding={'10px 50px'}
        bg={'transparent'}
        
         fontWeight={'500'}
         lineHeight={'inherit'}
         color={'#7D7D7D'}
         border={'1px solid #7D7D7D'}
         borderRadius={12}
         _hover={{
           color: '#fff',
           bg : 'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
           border : '1px solid #2BAF59'
         }}
         w={'fit-content'}
         to={'/'}
         as={ReactLink}
       >Under Body</Link>
        </ListItem>
        <ListItem>
          <Link
         padding={'10px 50px'}
        bg={'transparent'}
        color={'#7D7D7D'}
         fontWeight={'500'}
         
         border={'1px solid #7D7D7D'}
         borderRadius={12}
         _hover={{
           color: '#fff',
           bg : 'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
           border : '1px solid #2BAF59'
         }}
         w={'fit-content'}
         to={'/'}
         as={ReactLink}
       >Exterior</Link>
        </ListItem>
       
      </UnorderedList>
      <Stack className="list-ser">
        <Stack
          py={6}
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={'space-between'}
        >
          <Stack className="p1">
            <Text>
              Total Services:{' '}
              <Text as={'span'} fontWeight={'600'} color={'#2BAF59'}>
                12
              </Text>
            </Text>
          </Stack>
          <Stack m={'0 !important'} className="p1">
            <Checkbox
              color={'#7D7D7D'}
              size="md"
              colorScheme="green"
              defaultChecked
            >
              Select All
            </Checkbox>
          </Stack>
        </Stack>
        <Stack bg={'#202125'} px={6} py={8} borderRadius={8}>
          {services.map((v, e) => {
            return (
              <Stack
                direction={'row'}
                flexWrap={'wrap'}
                justifyContent={'space-between'}
                alignItems={'center'}
                py={5}
                borderBottom={'1px solid #595C64'}
                key={e}
              >
                <Box className="m5-h p1">
                  <Checkbox
                    color={'#7D7D7D'}
                    size="md"
                    colorScheme="green"
                    defaultChecked
                  ></Checkbox>
                </Box>
                <Box className="m5-h p1">
                  <Text>Service Name</Text>
                  <Heading as={'h5'}>{v.name}</Heading>
                </Box>
                <Box className="m5-h p1">
                  <Text>Price</Text>
                  <Heading as={'h5'}>{v.price}</Heading>
                </Box>
                <Box className="m5-h p1">
                  <Text>Created Date</Text>
                  <Heading as={'h5'}>{v.date}</Heading>
                </Box>
                <Box display={'flex'} gap={4}>
                  <Link
                    display={'flex'}
                    borderRadius={50}
                    alignItems={'center'}
                    justifyContent={'center'}
                    bg={
                      'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))'
                    }
                    w={'30px'}
                    h={'30px'}
                    to={'/'}
                    color={'#fff'}
                  >
                    <BiEditAlt />
                  </Link>
                  <Link
                    display={'flex'}
                    borderRadius={50}
                    alignItems={'center'}
                    justifyContent={'center'}
                    bg={'#E53E3E'}
                    w={'30px'}
                    h={'30px'}
                    to={'/'}
                    color={'#fff'}
                  >
                    <AiOutlineDelete />
                  </Link>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
}
