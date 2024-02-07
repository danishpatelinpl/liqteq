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
  Toast,
  useToast,
} from '@chakra-ui/react';
import { GoMail } from 'react-icons/go';
import React, { useState } from 'react';

import Authlogo from './Authlogo';
import { useNavigate } from 'react-router-dom';
import { POST } from '../../utilities/ApiProvider';
import { baseUrl } from '../../utilities/config';

export default function ForgotPass() {
  const toast = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [ForgotInfo, setForgotInfo] = useState({
    email: '',
  });


  const ForgotSubmit = async () => {
    setIsLoading(true);
    try {
      if (ForgotInfo.email === '') {
        toast({
          description: 'All fields are required!',
          status: 'error',
          position: 'top-right',
          duration: 1000
        })
      } else {
        let res = await POST(`${baseUrl}/users/forgetPassword`, ForgotInfo);
        console.log('login responce', res);
        if (res.status === 'success') {
          toast({
            description: res.message,
            status: res.status === 'success' ? 'success' : 'error',
            position: 'bottom-right',
            duration: 3000
          });
          navigate('/verification');
        }
        else{
  
        }
        
      }
    }
    catch (err) {
      Toast({
        description: err.message,
        status: 'success',
        position: 'top-right',
        duration: 1000
      })
    }
    setIsLoading(false);
  }

  return (
    <>
      <Stack pl={6} pr={'35%'}>
        <Authlogo />
        <Stack className="m3-h p1" mb={6}>
          <Heading as={'h3'}>Forgot Password?</Heading>
          <Text>
            Enter you email address and we will send you a verification code
            through email
          </Text>
        </Stack>
        <Stack className="regwarp" gap={4}>
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
              <Icon fontSize={'25px'} color={'#949494'} as={GoMail} />
              <Input type="text" value={ForgotInfo.email}  onChange={e =>
                  setForgotInfo({ ...ForgotInfo, email: e.target.value })
                } placeholder="Enter Your Email " />
            </Box>
          </Stack>

          <Stack>
            <Button
              padding={'10px 50px'}
              bg={
                'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))'
              }
              color={'#fff'}
              fontWeight={'500'}
              lineHeight={'inherit'}
              _hover={{
                color: '#000',
              }}
              w={'fit-content'}
              isLoading={isLoading}
              onClick={ForgotSubmit}
            >
              Continue
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
