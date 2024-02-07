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
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { BsEyeSlash, BsEye, BsBag } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import React, { useEffect, useState } from 'react';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import Authlogo from './Authlogo';
import { POST } from '../../utilities/ApiProvider';
import { baseUrl } from '../../utilities/config';
import { useDispatch } from 'react-redux';
import { loadUser } from '../../reducers/useReducers';

export default function LoginForm() {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const [showpass, setshowpass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginInfo, setloginInfo] = useState({
    email: '',
    password: '',
  });

useEffect(() => {
 
  console.log('Login Info', loginInfo);
}, [loginInfo])


const LoginSubmit = async () => {

  setIsLoading(true);
  try {
    if (loginInfo.email === '' || loginInfo.password === '') {
      toast({
        description: 'All fields are required!',
        status: 'error',
        position: 'top-right',
        duration: 1000
      })
    } else {
      let res = await POST(`${baseUrl}/users/login`, loginInfo);
      console.log('login responce', res);
      toast({
        description: res.message,
        status: res.status,
        position: 'bottom-right',
        duration: 3000
      });
      if (res.status === 'success') {
        dispatch(loadUser(res.data));
        navigate('/dashboard');
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
          <Heading as={'h3'}>Login</Heading>
          <Text>Enter your details to log in your account</Text>
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
              <Input
                value={loginInfo.email}
                type="email"
                onChange={e =>
                  setloginInfo({ ...loginInfo, email: e.target.value })
                }
                placeholder="Enter Your Email "
              />
            </Box>
          </Stack>

          <Stack>
            <FormLabel
              fontWeight={400}
              m={0}
              color={'#949494'}
              fontSize={'14px'}
            >
              Password
            </FormLabel>
            <Box className="Ifiled">
              <Icon fontSize={'25px'} color={'#949494'} as={AiOutlineLock} />
              <Input
                value={loginInfo.password}
                type={showpass ? 'text' : 'password'}
                onChange={e => setloginInfo({...loginInfo, password : e.target.value})}
                placeholder="Enter Password"
              />
              <Button onClick={() => setshowpass(!showpass)}>
                <Icon color={'#949494'} as={showpass ? BsEye : BsEyeSlash} />
              </Button>
            </Box>
          </Stack>
          <Stack textAlign={'right'} className="cterm">
            <Link
              as={ReactLink}
              fontWeight={500}
              fontSize={'13px'}
              color={'#2BAF59'}
              to={'/forgotpasssword'}
            >
              Forgot Password?
            </Link>
          </Stack>
          <Stack direction={'row'} gap={14}>
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
              borderRadius={6}
              w={'fit-content'}
              isLoading={isLoading}
              onClick={LoginSubmit}
            >
              Login
            </Button>
          </Stack>
          <Stack className="cterm">
            <Text textAlign={'center'} fontSize={'16px'} color={'#fff'}>
              Already have an account?
              <Link
                as={ReactLink}
                fontWeight={600}
                color={'#218644'}
                to={'/register'}
              >
                {' '}
                Sign Up
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
