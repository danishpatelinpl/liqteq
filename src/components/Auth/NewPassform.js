import {
    Stack,
    Box,
    Image,
    Text,
    Heading,
    Icon,
    Checkbox,
    FormLabel,
    Input,
    Button,
    Link,
  } from '@chakra-ui/react';
  import Go from '../../assets/images/icon/go.png';
  import Fb from '../../assets/images/icon/fb.png';
  import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
  import { BsEyeSlash, BsEye ,BsBag } from 'react-icons/bs';
  import { GoMail } from 'react-icons/go';
  import React, { useState } from 'react';
  import { Link as ReactLink } from 'react-router-dom';
import Authlogo from './Authlogo';

export default function NewPassform() {

    const [showpass, setshowpass] = useState(false);
    const [reshowpass, setreshowpass] = useState(false);

  return (
    <>
     <Stack pl={6} pr={'35%'}>
        <Authlogo/>
        <Stack className="m3-h p1" mb={6}>
          <Heading as={'h3'}>New Password</Heading>
          <Text>Set new password and login</Text>
        </Stack>
        <Stack className="regwarp" gap={4}>
         
        
          <Stack>
            <FormLabel fontWeight={400} m={0} color={'#949494'} fontSize={'14px'}>
              Password
            </FormLabel>
            <Box className="Ifiled">
              <Icon fontSize={'25px'} color={'#949494'} as={AiOutlineLock} />
              <Input
                type={showpass ? 'text' : 'password'}
                placeholder="Enter Password"
              />
              <Button onClick={() => setshowpass(!showpass)}>
                <Icon color={'#949494'}  as={showpass ? BsEye : BsEyeSlash} />
              </Button>
            </Box>
          </Stack>
          <Stack>
            <FormLabel fontWeight={400} m={0} color={'#949494'} fontSize={'14px'}>
              Re-type Password
            </FormLabel>
            <Box className="Ifiled">
              <Icon fontSize={'25px'} color={'#949494'} as={AiOutlineLock} />
              <Input
                type={reshowpass ? 'text' : 'password'}
                placeholder="Enter Re-type Password"
              />
              <Button onClick={() => setreshowpass(!reshowpass)}>
                <Icon color={'#949494'} as={reshowpass ? BsEye : BsEyeSlash} />
              </Button>
            </Box>
          </Stack>
          
          <Stack  gap={14}>
            <Button
              padding={'10px 50px'}
              bg={'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))'}
              color={'#fff'}
              fontWeight={'500'}
              lineHeight={'inherit'}
              _hover={{
                color:'#000',
              }}
              w={'fit-content'}
            >
              Continue
            </Button>
            
          </Stack>
        
        </Stack>
      </Stack></>
  )
}
