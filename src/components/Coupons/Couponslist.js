import React, { useState } from 'react'
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
    Badge,
    Icon,
  } from '@chakra-ui/react';
  import { Link as ReactLink } from 'react-router-dom';
  import { couponlist } from '../../assets/data/Data.js';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai'
import { RiCoupon2Line } from "react-icons/ri";;

export default function Couponslist() {

  const [coupon, setcoupon] = useState(couponlist);

  return (
    <>
    <SimpleGrid
        columns={{ base: '1', sm: '1', md: '1', lg: '1', xl: '2', '2xl': '2' }}
        spacingX="40px"
        spacingY="20px"
      >
        <Stack className={'bread m3-h'}>
          <Heading as={'h3'}>
            All Coupons  /{' '}
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
            to={'/addcoupons'}
            as={ReactLink}
          >
            Add New Coupons
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
       >Active</Link>
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
       >Inactive</Link>
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
              Total Coupons:{' '}
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
          {coupon.map((v, e) => {
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
                <Box display={'flex'} gap={3} mb={6}>
            <Box w={'50px'} h={'50px'} bg={
                      'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))'
                    }
                    alignItems={'center'}
                    display={'flex'}
                    justifyContent={'center'}
                    borderRadius={50}
                    >
            <Icon color={'#fff'} fontSize={'25px'} as={RiCoupon2Line}/>
            </Box>
               <Box   className='venbox p1 m3-h'>
              <Text>{v.couponName}</Text>
              <Heading as={'h3'}>{v.couponoff}</Heading>
            </Box>
            </Box>
                <Box className="m5-h p1">
                  <Text>Code</Text>
                  <Heading as={'h5'}>{v.code}</Heading>
                </Box>
                <Box className="m5-h p1">
                  <Text>Price</Text>
                  <Heading as={'h5'}>{v.price}</Heading>
                </Box>
                <Box className="m5-h p1">
                  <Text>Start Time</Text>
                  <Heading as={'h5'}>{v.starttime}</Heading>
                </Box>
                <Box className="m5-h p1">
                  <Text>End Time</Text>
                  <Heading as={'h5'}>{v.endtime}</Heading>
                </Box>
                <Box className="m5-h p1">
                      <Text>Status</Text>
                      <Badge
                        padding={'10px 20px'}
                        borderRadius={'25px'}
                        bg={
                          v.Status == 'Inactive'
                            ? '#f4de152b'
                            : 'rgba(46, 196, 135, 0.16)'
                        }
                        color={v.Status == 'Inactive' ? '#F4DE15' : '#2EC487'}
                      >
                        {v.Status}
                      </Badge>
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
  )
}
