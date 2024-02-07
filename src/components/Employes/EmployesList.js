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
  import {empolyes} from '../../assets/data/Data.js'
  import { Link as ReactLink } from 'react-router-dom';

export default function EmployesList() {

    const [emplist, setemplist] = useState(empolyes)

  return (
    <>
       <SimpleGrid
        columns={{ base: '1', sm: '1', md: '1', lg: '1', xl: '2', '2xl': '2' }}
        spacingX="40px"
        spacingY="20px"
      >
        <Stack className={'bread m3-h'}>
          <Heading as={'h3'}>
          View All Employees /{' '}
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
            to={'/addemployes'}
            as={ReactLink}
          >
            Add New Employee
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
       >Technicians</Link>
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
       >CSR</Link>
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
       >Manager</Link>
        </ListItem>
     
       
      </UnorderedList>
      <Stack className="list-ser">
        <Stack
          py={6}
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Stack className="p1">
            <Text>
            Total Technicians:{' '}
              <Text as={'span'} fontWeight={'600'} color={'#2BAF59'}>
                12
              </Text>
            </Text>
          </Stack>
          <Stack m={'0 !important'} className="p1">
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
       >Technicians</Link>
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
       >CSR</Link>
        </ListItem>
     
     
       
      </UnorderedList>
          </Stack>
        </Stack>
        <Stack bg={'#202125'} px={6} py={8} borderRadius={8}>
        <SimpleGrid  columns={{ base: "1",sm: "1",md: "1", lg: "2",xl : '2', '2xl' : '2' }} spacingX='40px' spacingY='20px'>
          {
            emplist?.map((v,e)=>{
              return(
          <Stack key={e} bg={'#2E3035'} px={4} py={6}   borderRadius={6}>
            
            <SimpleGrid columns={{ base: "1",sm: "1",md: "1", lg: "1",xl : '3', '2xl' : '3' }} spacingX='40px' spacingY='20px'>
            <Box display={'flex'} gap={3} mb={6}>
            <Avatar name='Kent Dodds' src={v.avtar} />
               <Box   className='venbox p1 m3-h'>
              <Text>{v.id}</Text>
              <Heading as={'h3'}>{v.name}</Heading>
            </Box>
            </Box>
            <Stack   className='venbox p1 m3-h'>
              <Text>Total Jobs</Text>
              <Heading as={'h3'}>{v.number}</Heading>
            </Stack>
            <Stack   className='venbox p1 m3-h'>
              <Text>Member Since</Text>
              <Heading as={'h3'}>{v.email}</Heading>
            </Stack>
            </SimpleGrid>
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
           textAlign={'center'}
            to={'/addservices'}
            as={ReactLink}
          >
            Add New Employee
          </Link>
          </Stack>
              )
            })
          }
          
         
          
        </SimpleGrid>
        </Stack>
      </Stack>
    </>
  )
}
