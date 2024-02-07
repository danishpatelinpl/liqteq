import {
  Avatar,
  Button,
  ListItem,
  Menu,
  MenuItem,
  MenuList,
  Stack,
  Text,
  UnorderedList,
  MenuButton,
  Box,
  Input,
  Icon,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoggedInPic from './LoggedInPic';
import { FiSearch } from 'react-icons/fi';

export default function Topnav() {
  const user = useSelector(state => state);

  const [isNavShowed, setisNavShowed] = useState(false);
  const [navItems] = useState([
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Company',
      url: '/company/who-we-are',
    },
    {
      name: 'Funds',
      url: '/Funds/Mutualfund',
    },
    {
      name: 'How to Invest',
      url: '/Howtoinvest/HowToInvest',
    },
    {
      name: 'Downloads',
      url: '/Downloads',
    },
    {
      name: 'Investor Education',
      url: '/Howtoinvest/MutualFundsBasic',
    },
  ]);

  return (
    <>
      <Stack
        position={'relative'}
        mb={'6'}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        bg={'#202125'}
        // bg={'#fff'}
        borderRadius={'0px 0px 0px 19px'}
        px={3}
        pl={6}
      >
        <Stack className="serch" position={'relative'} w={'400px'}>
          <Input
            color={'#fff'}
            border={'0'}
            pl={12}
            type="text"
            placeholder="Search here"
          />
          <Button
            mt={'0 !important'}
            position={'absolute'}
            top={'0'}
            bottom={'0'}
            bg={'transparent'}
            _hover={{ bg: 'transparent' }}
          >
            {' '}
            <Icon color={'#fff'} as={FiSearch} />
          </Button>
        </Stack>

        <Stack>
          <LoggedInPic />
        </Stack>
      </Stack>
    </>
  );
}

const TopNavLinks = ({ name, url }) => {
  return (
    <Button
      paddingY={3}
      _hover={{
        color: 'primaryHeading.100',
        _before: {
          transform: 'scaleX(1)',
          transformOrigin: 'bottom left',
        },
      }}
      _before={{
        content: `""`,
        position: 'absolute',
        w: '100%',
        h: '3px',
        transform: 'scaleX(0)',
        bottom: '-2px',
        left: '0px',
        borderRadius: '25px',
        backgroundColor: 'primaryHeading.100',
        transformOrigin: 'bottom right',
        transition: 'transform 0.3s ease-in-out',
      }}
      as={ReactLink}
      fontSize={{ base: '13px', xl: '16px' }}
      fontWeight={500}
      variant={'link'}
      color={'$666e82'}
      to={url}
    >
      {name}
    </Button>
  );
};
