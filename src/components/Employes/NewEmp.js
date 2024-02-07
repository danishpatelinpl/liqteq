import {
 
  Box,
  
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Link,
  FormLabel,
  Input,
  
  Radio, RadioGroup
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';

export default function NewEmp() {
  return (
    <>
      <SimpleGrid
        columns={{ base: '1', sm: '1', md: '1', lg: '1', xl: '2', '2xl': '2' }}
        spacingX="40px"
        spacingY="20px"
      >
        <Stack className={'bread m3-h'}>
          <Heading as={'h3'}>
            Add New Employee /{' '}
            <Link to={'./'} as={ReactLink} color={'#2BAF59'}>
              Home
            </Link>
          </Heading>
        </Stack>
      </SimpleGrid>
      <Stack bg={'#202125'} px={6} py={12} borderRadius={8}>
        <SimpleGrid
          borderBottom={'1px solid #595C64'}
          pb={8}
          columns={{
            base: '1',
            sm: '1',
            md: '1',
            lg: '1',
            xl: '2',
            '2xl': '2',
          }}
          spacingX="40px"
          spacingY="20px"
        >
          <Stack className="adser" gap={6}>
            <Stack>
              <FormLabel
                fontWeight={400}
                m={0}
                color={'#949494'}
                fontSize={'14px'}
              >
                Enter Vendor Name
              </FormLabel>
              <Box className="Ifiled">
                <Input type="text" placeholder="Enter Your Email " />
              </Box>
            </Stack>

            <Stack>
              <FormLabel
                fontWeight={400}
                m={0}
                color={'#949494'}
                fontSize={'14px'}
              >
                Email Address
              </FormLabel>
              <Box className="Ifiled">
                <Input type="text" placeholder="Enter Your Email " />
              </Box>
            </Stack>
            <Stack>
              <FormLabel
                fontWeight={400}
                m={0}
                color={'#949494'}
                fontSize={'14px'}
              >
                Contact Number
              </FormLabel>
              <Box className="Ifiled">
                <Input type="text" placeholder="Enter Your Email " />
              </Box>
            </Stack>
          </Stack>
          <Stack>
            <FormLabel
              fontWeight={400}
              m={0}
              color={'#949494'}
              fontSize={'14px'}
            >
              Uplaod Picture*
            </FormLabel>
            <Box className="ufiled">
              <Input type="file" />
            </Box>
          </Stack>
        </SimpleGrid>
        <Stack py={4}>
          <Box mb={4} className="p1">
            <Text>All Privilege's</Text>
          </Box>
          <Stack direction={'row'} gap={'12'} flexWrap={'wrap'}>
            <Stack border={'1px solid #595C64'} borderRadius={8} padding={4} w={'40%'} direction={'row'} justifyContent={'space-between'} className='p1'>
              <Stack><Text>Add Inventory</Text></Stack>
              <RadioGroup defaultValue='2'>
              <Stack color={'#7D7D7D'} spacing={5} direction="row">
                  <Radio colorScheme="green" value="1">
                    Yes
                  </Radio>
                  <Radio colorScheme="red" value="2">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
             
            </Stack>
            <Stack border={'1px solid #595C64'} borderRadius={8} padding={4} w={'40%'} direction={'row'} justifyContent={'space-between'} className='p1'>
              <Stack><Text>Add Inventory</Text></Stack>
              <RadioGroup defaultValue='2'>
              <Stack color={'#7D7D7D'} spacing={5} direction="row">
                  <Radio colorScheme="green" value="1">
                    Yes
                  </Radio>
                  <Radio colorScheme="red" value="2">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
             
            </Stack>
            <Stack border={'1px solid #595C64'} borderRadius={8} padding={4} w={'40%'} direction={'row'} justifyContent={'space-between'} className='p1'>
              <Stack><Text>Add Inventory</Text></Stack>
              <RadioGroup defaultValue='2'>
              <Stack color={'#7D7D7D'} spacing={5} direction="row">
                  <Radio colorScheme="green" value="1">
                    Yes
                  </Radio>
                  <Radio colorScheme="red" value="2">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
             
            </Stack>
            <Stack border={'1px solid #595C64'} borderRadius={8} padding={4} w={'40%'} direction={'row'} justifyContent={'space-between'} className='p1'>
              <Stack><Text>Add Inventory</Text></Stack>
              <RadioGroup defaultValue='2'>
              <Stack color={'#7D7D7D'} spacing={5} direction="row">
                  <Radio colorScheme="green" value="1">
                    Yes
                  </Radio>
                  <Radio colorScheme="red" value="2">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
             
            </Stack>
            <Stack border={'1px solid #595C64'} borderRadius={8} padding={4} w={'40%'} direction={'row'} justifyContent={'space-between'} className='p1'>
              <Stack><Text>Add Inventory</Text></Stack>
              <RadioGroup defaultValue='2'>
              <Stack color={'#7D7D7D'} spacing={5} direction="row">
                  <Radio colorScheme="green" value="1">
                    Yes
                  </Radio>
                  <Radio colorScheme="red" value="2">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
             
            </Stack>
            <Stack border={'1px solid #595C64'} borderRadius={8} padding={4} w={'40%'} direction={'row'} justifyContent={'space-between'} className='p1'>
              <Stack><Text>Add Inventory</Text></Stack>
              <RadioGroup defaultValue='2'>
              <Stack color={'#7D7D7D'} spacing={5} direction="row">
                  <Radio colorScheme="green" value="1">
                    Yes
                  </Radio>
                  <Radio colorScheme="red" value="2">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
             
            </Stack>
            <Stack border={'1px solid #595C64'} borderRadius={8} padding={4} w={'40%'} direction={'row'} justifyContent={'space-between'} className='p1'>
              <Stack><Text>Add Inventory</Text></Stack>
              <RadioGroup defaultValue='2'>
              <Stack color={'#7D7D7D'} spacing={5} direction="row">
                  <Radio colorScheme="green" value="1">
                    Yes
                  </Radio>
                  <Radio colorScheme="red" value="2">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
             
            </Stack>
            <Stack border={'1px solid #595C64'} borderRadius={8} padding={4} w={'40%'} direction={'row'} justifyContent={'space-between'} className='p1'>
              <Stack><Text>Add Inventory</Text></Stack>
              <RadioGroup defaultValue='2'>
              <Stack color={'#7D7D7D'} spacing={5} direction="row">
                  <Radio colorScheme="green" value="1">
                    Yes
                  </Radio>
                  <Radio colorScheme="red" value="2">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
             
            </Stack>
          </Stack>
        </Stack>
        <Stack>
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
           Create & Save
          </Link>
        </Stack>
      </Stack>
    </>
  );
}
