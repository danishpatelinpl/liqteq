import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  useDisclosure,
  DrawerContent,
  BoxProps,
  FlexProps,
  Image,
  UnorderedList,
  ListItem,
  Collapse,
  Button,
  Text,
  Stack,
} from '@chakra-ui/react';
import {
  FiHome,
  FiCalendar,
  FiCompass,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import { BsChat, BsPieChart } from 'react-icons/bs';
import { BiWallet } from 'react-icons/bi';
import { AiOutlineTable } from 'react-icons/ai';
import {IoIosArrowDown} from 'react-icons/io';
import { Link as ReactLink } from 'react-router-dom';

import { IconType } from 'react-icons';
import { ReactText } from 'react';
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router';

export default function Sidenav({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        minH={{ base: 'fit-content', lg: '100vh' }}
        bg={useColorModeValue('gray.100', 'gray.900')}
        position={{ base: 'absolute', lg: 'initial' }}
        zIndex={'1'}
        left={'40px'}
        top={'32px'}
        w={{ base: '0px', lg: 'auto' }}
      >
        <SidebarContent
          onClose={() => onClose}
          display={{ base: 'none', lg: 'block' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav display={{ base: 'flex', lg: 'none' }} onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p={{ base: '0', md: '4' }}>
          {children}
        </Box>
      </Box>
    </>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isMainOpen, onToggle: onMainToggle } = useDisclosure();
  


  return (
    <Box
      bg={'#202125'}
      w={{ base: 'full', lg: 72 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex py={8}  alignItems="center" mx="8" justifyContent="center">
        <Image alt={'Logo'} src={logo} draggable={false} w={'100px'} />
        <CloseButton
          color={'#fff'}
          display={{ base: 'flex', lg: 'none' }}
          onClick={onClose}
        />
      </Flex>

      <Stack pl={4}>
        <UnorderedList className="sidemenu" listStyleType={'none'}>
       
          <ListItem>
            <Link as={ReactLink} to={'/dashboard'}>
              <Icon as={FiHome} />
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link as={'a'} onClick={onToggle}>
              <Icon as={AiOutlineTable} />
              POS Cash Drawer
              <Icon ml={1} fontSize={'15px !important'} as={IoIosArrowDown}/>
            </Link>
            <Collapse in={isOpen} animateOpacity>
              <Box pl={4} mt="4">
                <UnorderedList className='sidesubmenu'  listStyleType={'none'}>
                  <ListItem>
                    <Link as={ReactLink} to={'/'}>
                    Opening Procedures
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={ReactLink} to={'/'}>
                    Create New Jobs
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={ReactLink} to={'/'}>
                    Job List
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={ReactLink} to={'/'}>
                    Closing Procedures
                    </Link>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Collapse>
          </ListItem>
      
          <ListItem>
            <Link as={ReactLink} to={'/employes'}>
              <Icon as={BiWallet} />
              Employees
            </Link>
          </ListItem>
        
          <ListItem>
            <Link as={ReactLink} to={'/'}>
              <Icon as={BsChat} />
              Management Reports
            </Link>
          </ListItem>
          <ListItem>
            <Link as={ReactLink} to={'/'}>
              <Icon as={BsPieChart} />
              Attendance
            </Link>
          </ListItem>
          <ListItem>
            <Link as={ReactLink} to={'/vender'}>
              <Icon as={FiSettings} />
              Vendors
            </Link>
          </ListItem>
          <ListItem>
            <Link as={'a'} onClick={onMainToggle}>
              <Icon as={AiOutlineTable} />
              Inventory
              <Icon ml={1} fontSize={'15px !important'} as={IoIosArrowDown}/>
            </Link>
            <Collapse in={isMainOpen} animateOpacity>
              <Box pl={4} mt="4">
                <UnorderedList className='sidesubmenu'  listStyleType={'none'}>
                  <ListItem>
                    <Link as={ReactLink} to={'/'}>
                    Inventory Setup
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={ReactLink} to={'/'}>
                    Inventory Tracking
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={ReactLink} to={'/'}>
                    Inventory Reporting
                    </Link>
                  </ListItem>
                 
                </UnorderedList>
              </Box>
            </Collapse>
          </ListItem>
          <ListItem>
            <Link as={ReactLink} to={'/services'}>
              <Icon as={FiCompass} />
              List of Services
            </Link>
          </ListItem>
          <ListItem>
            <Link as={ReactLink} to={'/coupons'}>
              <Icon as={FiCompass} />
              Coupons
            </Link>
          </ListItem>
          <ListItem>
            <Link as={ReactLink} to={'/'}>
              <Icon as={FiCompass} />
              Offer & Discount
            </Link>
          </ListItem>
          <ListItem>
            <Link as={ReactLink} to={'/'}>
              <Icon as={FiCompass} />
              Settings
            </Link>
          </ListItem>
          <ListItem>
            <Link as={ReactLink} to={'/'}>
              <Icon as={FiCompass} />
              Help
            </Link>
          </ListItem>
     
        </UnorderedList>
      </Stack>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  url: String;
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, url, children, ...rest }: NavItemProps) => {
  const navigate = useNavigate();

  return (
    <Link
      onClick={() => navigate(url)}
      style={{ textDecoration: 'none', color: '#000' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#FFC728',
          color: '#000',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: '#000',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: '35px' }}
      px={{ base: 0, md: 0 }}
      height="auto"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="0px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};
