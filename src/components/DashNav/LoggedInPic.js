import { Avatar, Menu, MenuButton, MenuItem, MenuList, Stack, Text, Button, Icon } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { FaRegBell } from 'react-icons/fa'
import { FaCircle } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
import { useDispatch } from 'react-redux';



import Cookies from 'js-cookie'

export default function LoggedInPic() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.value);

    useEffect(() => {
        console.log('User',user);
        if (user) {
          
        }
        
      }, [user]);

    return (
        <Stack direction={'row'} alignItems={'center'} gap={{ base: 1, lg: 2, 'xl': 12 }} py={4}>
     
            <Menu>
                <MenuButton textAlign={'center'} as={Button} backgroundColor={'transparent'} padding={0} _hover={{ backgroundColor: 'transparent' }} _active={{ backgroundColor: 'transparent' }}>
                    <Icon as={FaRegBell} color={'#fff'} fontSize={'24px'} />
                </MenuButton>
                <MenuList fontSize={14}>
                    <MenuItem><FaCircle size={6} color={'#f79e22'} /><Text ml={2}>Notification Number One.</Text></MenuItem>
                    <MenuItem><FaCircle size={6} color={'#f79e22'} /><Text ml={2}>Notification Number Two.</Text></MenuItem>
                    <MenuItem><FaCircle size={6} color={'#f79e22'} /><Text ml={2}>Notification Number Three.</Text></MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton className="loggedBtn"  as={Button} backgroundColor={'transparent'} padding={0} _hover={{ backgroundColor: 'transparent' }} _active={{ backgroundColor: 'transparent' }}>
                <Avatar size={{ base: 'sm', md: 'md' }} fontSize={'12px'} src='' border={'2px solid #3B3D44'} bg={'#3B3D44;'} color={'#fff'}  name={user?.fullName ?? 'John Doe'} />
                    <Text color={'#fff'} textTransform={'capitalize'} fontWeight={500} fontSize={{ base: 13, md: 14 }}>{user?.fullName ?? 'John Doe'}</Text>
                    <Icon color={'#fff'} as={FiChevronDown} />
                </MenuButton>
                <MenuList  border={'1px solid #3B3D44'}  color={'#3B3D44'} fontSize={14}>
                    <MenuItem as={ReactLink} to={'/dashboard'}>Dashboard</MenuItem>
                    <MenuItem 
                     onClick={() => {
                        localStorage.setItem('LiqteqUser', null);
                        Cookies.set('LiqteqUser', null);
                        localStorage.clear();
                     
                        navigate('/');
                      }}
                    
                    >Logout</MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                {/* <MenuButton textAlign={'center'} as={Button} backgroundColor={'transparent'} padding={0} _hover={{ backgroundColor: 'transparent' }} _active={{ backgroundColor: 'transparent' }}>
                    <FaBell size={24} color={'#666e82'} />
                </MenuButton>
                <MenuList fontSize={14}>
                    <MenuItem><FaCircle size={6} color={'#f79e22'} /><Text ml={2}>Dummy Notification to fill up some space.</Text></MenuItem>
                    <MenuItem><FaCircle size={6} color={'#f79e22'} /><Text ml={2}>Dummy Notification to fill up some space.</Text></MenuItem>
                </MenuList> */}
            </Menu>
        </Stack>
    )
}
