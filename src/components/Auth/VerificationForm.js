import React, { useEffect, useState } from 'react'
import {
    Stack,
    Box,
    Text,
    Heading,
    HStack,
    FormLabel,
    PinInput, PinInputField,
    Button,
    useToast,
  } from '@chakra-ui/react';
import Authlogo from './Authlogo';
import { POST } from '../../utilities/ApiProvider';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../utilities/config';
  

export default function VerificationForm() {
  const toast = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  useEffect(() => {
    let localEmail = localStorage.getItem('liqteqUser');
    localEmail = JSON.parse(localEmail);
    if (localEmail) {
      setEmail(localEmail?.email);
    } else {
     
    }
  }, []);

  useEffect(() => {
   console.log(code);
   console.log(email);
  }, [code])
  

  const verifyCode = async () => {
    setIsLoading(true);
    try {
      if (code === '') {
        toast({
          description: 'Code is required!',
          duration: 2000,
          position: 'bottom-right',
          status: 'error'
        })
      } else {
        let res = await POST(`${baseUrl}/users/verifyOtp`, {
          email,
          otpCode: Number(code)
        });
        console.log('verification', res);
        if (res.status === 'success') {
          toast({
            description: res.message,
            duration: 2000,
            position: 'bottom-right',
            status:  res.status,
          });
          navigate('/login')
        }else{
          toast({
            description: res.message,
            duration: 2000,
            position: 'bottom-right',
            status: 'error'
          });
        }
      }
    } catch (err) {
      toast({
        description: err.message,
        duration: 2000,
        position: 'bottom-right',
        status: 'error'
      })
    }
    setIsLoading(false);
  }

 

  return (
    <>
    <Stack pl={10} pr={'35%'}>
      <Authlogo/>
        <Stack className="m3-h p1" mb={6}>
          <Heading as={'h3'}>Verification Process</Heading>
          <Text>Enter the code that we sent you through email</Text>
        </Stack>
        <Stack className="regwarp" gap={4}>
          <Stack mb={4}>
            <FormLabel fontWeight={400} m={0} color={'#949494'} fontSize={'14px'}>
              Enter Code
            </FormLabel>
            <Box className="pfiled">
              <HStack>
                <PinInput value={code} onChange={e => setCode(e)}  placeholder='-'>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Box>
          </Stack>

          <Stack direction={'row'}>
          <Button
          onClick={verifyCode}
          isLoading={isLoading}
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
      </Stack>
    </>
  )
}
