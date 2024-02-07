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
  Select,
  useToast,
  Toast,
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

export default function RegisterForm() {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const [showpass, setshowpass] = useState(false);
  const [reshowpass, setreshowpass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [RegInfo, setRegInfo] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  useEffect(() => {
    console.log('Reg Info', RegInfo);
  }, [RegInfo]);


  
  const RegSubmit = async () => {

    setIsLoading(true);
    try {
      if (RegInfo.fullName === '' || RegInfo.email === ''|| RegInfo.password === ''|| RegInfo.confirmPassword === ''|| RegInfo.role === '') {
        Toast({
          description: 'All fields are required!',
          status: 'error',
          position: 'top-right',
          duration: 1000
        })
      } else {
        let res = await POST(`${baseUrl}/users/register`, RegInfo);

        console.log('login responce', res);
        if (res.status === 'success') {
          toast({
            description: res.message,
            status: res.status,
            position: 'bottom-right',
            duration: 3000
          });
          dispatch(loadUser(res.data));
          navigate('/login ');
        }
        else{
          toast({
            description: res.message,
            status: res.status,
            position: 'bottom-right',
            duration: 3000
          });
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
        <Stack className="m3-h p1" pb={3}>
          <Heading as={'h3'}>Sign Up</Heading>
          <Text>Enter your details to create your account</Text>
        </Stack>
        <Stack className="regwarp" pb={8} gap={2}>
          <Stack>
            <FormLabel
              fontWeight={400}
              m={0}
              color={'#949494'}
              fontSize={'14px'}
            >
              Full Name
            </FormLabel>
            <Box className="Ifiled">
              <Icon fontSize={'25px'} color={'#949494'} as={AiOutlineUser} />
              <Input
                type="text"
                value={RegInfo.fullName}
                onChange={e =>
                  setRegInfo({ ...RegInfo, fullName: e.target.value })
                }
                placeholder="Enter Full Name"
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
              Email Address
            </FormLabel>
            <Box className="Ifiled">
              <Icon fontSize={'25px'} color={'#949494'} as={GoMail} />
              <Input
                type="email"
                value={RegInfo.email}
                onChange={e =>
                  setRegInfo({ ...RegInfo, email: e.target.value })
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
              Select Role Type
            </FormLabel>
            <Box className="Ifiled icnfiled">
              <Icon fontSize={'25px'} color={'#949494'} as={BsBag} />
              <Select
                color={'#fff'}
                value={RegInfo.role}
                onChange={e =>
                  setRegInfo({ ...RegInfo, role: e.target.value })
                }
              >
                <option style={{ display: 'none' }} value="">
                  Select Option
                </option>
                <option value="manager">Manager</option>
                <option value="csr">
                  ustomer service representative (CSR){' '}
                </option>
              </Select>
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
                value={RegInfo.password}
                onChange={e =>
                  setRegInfo({ ...RegInfo, password: e.target.value })
                }
                type={showpass ? 'text' : 'password'}
                placeholder="Enter Password"
              />
              <Button onClick={() => setshowpass(!showpass)}>
                <Icon color={'#949494'} as={showpass ? BsEye : BsEyeSlash} />
              </Button>
            </Box>
          </Stack>
          <Stack>
            <FormLabel
              fontWeight={400}
              m={0}
              color={'#949494'}
              fontSize={'14px'}
            >
              Re-type Password
            </FormLabel>
            <Box className="Ifiled">
              <Icon fontSize={'25px'} color={'#949494'} as={AiOutlineLock} />
              <Input
                value={RegInfo.confirmPassword}
                onChange={e =>
                  setRegInfo({ ...RegInfo, confirmPassword: e.target.value })
                }
                type={reshowpass ? 'text' : 'password'}
                placeholder="Enter Re-type Password"
              />
              <Button onClick={() => setreshowpass(!reshowpass)}>
                <Icon color={'#949494'} as={reshowpass ? BsEye : BsEyeSlash} />
              </Button>
            </Box>
          </Stack>
        </Stack>
        <Stack gap={6}>
          <Stack direction={'row'} gap={14}>
            <Button
              padding={'10px 50px'}
              bg={
                'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))'
              }
              color={'#fff'}
              fontWeight={'500'}
              lineHeight={'inherit'}
              w={'fit-content'}
              _hover={{
                color: '#000',
              }}
              isLoading={isLoading}
              onClick={RegSubmit}
            >
              Register
            </Button>
          </Stack>
          <Stack className="cterm">
            <Text textAlign={'center'} fontSize={'16px'} color={'#fff'}>
              Already have an account?
              <Link as={ReactLink} fontWeight={600} color={'#218644'} to={'/'}>
                {' '}
                Log In
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
