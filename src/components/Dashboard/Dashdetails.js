import {
  Avatar,
  AvatarGroup,
  Box,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { BsHouseDoor } from 'react-icons/bs';
import { RiUserSettingsLine } from 'react-icons/ri';
import { BsBag } from 'react-icons/bs';
import { Link as ReactLink } from 'react-router-dom';

export default function Dashdetails() {
  return (
    <>
      <Box display={'flex'} gap={6} flexWrap={'wrap'}>
        <Stack w={'35%'} bg={'#202125'} p={6} borderRadius={8} className="p1">
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box
              alignItems={'center'}
              gap={2}
              className="dashd m3-h"
              display={'flex'}
            >
              <Icon fontSize={'25px'} color={'#2BAF59'} as={FiUsers} />
              <Heading as={'h3'}>315</Heading>
            </Box>
            <AvatarGroup size="md" max={2}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
          </Stack>
          <Text>Total Owners</Text>
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
            w={'100%'}
            to={'/addservices'}
            as={ReactLink}
            textAlign={'center'}
          >
            View All
          </Link>
        </Stack>
        <Stack w={'20%'} bg={'#202125'} p={6} borderRadius={8} className="p1">
          <Box
            alignItems={'center'}
            gap={2}
            className="dashd m3-h"
            display={'flex'}
          >
            <Icon fontSize={'25px'} color={'#2BAF59'} as={BsHouseDoor} />
            <Heading as={'h3'}>1254</Heading>
          </Box>
          <Text>Total Inventory Items</Text>
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
            w={'100%'}
            to={'/addservices'}
            as={ReactLink}
            textAlign={'center'}
          >
            View All
          </Link>
        </Stack>
        <Stack w={'20%'}  bg={'#202125'} p={6} borderRadius={8} className="p1">
          <Box 
            alignItems={'center'}
            gap={2}
            className="dashd m3-h"
            display={'flex'}
          >
            <Icon fontSize={'25px'} color={'#2BAF59'} as={RiUserSettingsLine} />
            <Heading as={'h3'}>52451</Heading>
          </Box>
          <Text>Existing Customers</Text>
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
            w={'100%'}
            to={'/addservices'}
            as={ReactLink}
            textAlign={'center'}
          >
            View All
          </Link>
        </Stack>
        <Stack w={'20%'}  bg={'#202125'} p={6} borderRadius={8} className="p1">
          <Box
            alignItems={'center'}
            gap={2}
            className="dashd m3-h"
            display={'flex'}
          >
            <Icon fontSize={'25px'} color={'#2BAF59'} as={BsBag} />
            <Heading as={'h3'}>52451</Heading>
          </Box>
          <Text>Total List of jobs</Text>
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
            w={'100%'}
            to={'/addservices'}
            as={ReactLink}
            textAlign={'center'}
          >
            View All
          </Link>
        </Stack>
      </Box>
    </>
  );
}
