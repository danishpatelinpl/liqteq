import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Link,
  Radio,
  RadioGroup,
  Text,
  Avatar,
  UnorderedList,
  ListItem,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  Icon,
  Checkbox,
  Badge,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import L3 from '../../assets/images/data/l3.png';
import { BsThreeDots } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import {
  empdetaildata,
  epmattendance,
  epmattendanceReq,
} from '../../assets/data/Data.js';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

export default function SingleEmp() {
  const [empdetail, setempdetail] = useState(empdetaildata);
  const [empAtt, setempAtt] = useState(epmattendance);
  const [empAttReq, setempAttReq] = useState(epmattendanceReq);
  return (
    <>
      <SimpleGrid
        columns={{ base: '1', sm: '1', md: '1', lg: '1', xl: '2', '2xl': '2' }}
        spacingX="40px"
        spacingY="20px"
      >
        <Stack className={'bread m3-h'}>
          <Heading as={'h3'}>
            Employee Details /{' '}
            <Link to={'./'} as={ReactLink} color={'#2BAF59'}>
              Home
            </Link>
          </Heading>
        </Stack>
      </SimpleGrid>
      <Stack bg={'#202125'} px={6} py={12} borderRadius={8}>
        <Stack
          direction={'row'}
          pb={6}
          flexWrap={'wrap'}
          justifyContent={'space-between'}
        >
          <Box>
            <Heading
              bg={
                'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))'
              }
              padding={2}
              fontSize={'14px'}
              color={'#fff'}
              borderRadius={6}
              as={'h5'}
            >
              Employee: CSR
            </Heading>
          </Box>
          <Box className="p1">
            <Text>Member Since: 2023</Text>
          </Box>
        </Stack>

        <Stack
          direction={'row'}
          py={6}
          flexWrap={'wrap'}
          justifyContent={'space-between'}
          borderBottom={'1px solid #595C64'}
        >
          <Box display={'flex'} gap={3} mb={6}>
            <Avatar name="Kent Dodds" src={L3} />
            <Box className="venbox p1 m3-h">
              <Text>ID: 28745</Text>
              <Heading as={'h3'}>Adam Knight</Heading>
            </Box>
          </Box>
          <Stack className="venbox p1 m3-h">
            <Text>Address</Text>
            <Heading as={'h3'}>47 W 13th St, New York, NY 10011, USA</Heading>
          </Stack>
          <Stack className="venbox p1 m3-h">
            <Text>Email Address</Text>
            <Heading as={'h3'}>Adam.k97@gmail.com</Heading>
          </Stack>
          <Stack className="venbox p1 m3-h">
            <Text>Contact Details</Text>
            <Heading as={'h3'}>+1 (210) 457-5210</Heading>
          </Stack>
        </Stack>

        <Stack
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={'space-between'}
          alignItems={'end'}
        >
          <Stack>
            <UnorderedList
              gap={6}
              display={'flex'}
              py={5}
              listStyleType={'none'}
            >
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
                    bg: 'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
                    border: '1px solid #2BAF59',
                  }}
                  w={'fit-content'}
                  to={'/'}
                  as={ReactLink}
                >
                  All Jobs
                </Link>
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
                    bg: 'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
                    border: '1px solid #2BAF59',
                  }}
                  w={'fit-content'}
                  to={'/'}
                  as={ReactLink}
                >
                  Attendance
                </Link>
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
                    bg: 'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
                    border: '1px solid #2BAF59',
                  }}
                  w={'fit-content'}
                  to={'/'}
                  as={ReactLink}
                >
                  Privilege's
                </Link>
              </ListItem>
            </UnorderedList>
          </Stack>
          <Stack>
            <Menu>
              <MenuButton>
                <Icon fontSize={'35px'} color={'#545454'} as={BsThreeDots} />
              </MenuButton>
              <MenuList bg={'#545454'} border={'0'}>
                <MenuItem
                  _hover={{
                    bg: 'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
                  }}
                  _focus={{
                    bg: '#545454',
                  }}
                  color={'#fff'}
                >
                  <Link as={ReactLink} to={'/'}>
                    Block
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{
                    bg: 'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
                  }}
                  color={'#fff'}
                >
                  <Link as={ReactLink} to={'/'}>
                    Remove
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Stack>

        {/* ===tab div=== */}

        {/* Tab job One */}
        <Stack className="epmt1">
          <Stack
            direction={'row'}
            py={6}
            flexWrap={'wrap'}
            justifyContent={'space-between'}
          >
            <Box className="p1">
              <Text>Total Jobs: 17</Text>
            </Box>
            <Box>
              <Menu>
                <MenuButton>
                  <Text color={'#7D7D7D'}>
                    {' '}
                    All Jobs{' '}
                    <Icon
                      fontSize={'16px'}
                      color={'#545454'}
                      as={IoIosArrowDown}
                    />
                  </Text>
                </MenuButton>
                <MenuList bg={'#545454'} border={'0'}>
                  <MenuItem
                    _hover={{
                      bg: 'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
                    }}
                    _focus={{
                      bg: '#545454',
                    }}
                    color={'#fff'}
                  >
                    <Link as={ReactLink} to={'/'}>
                      Block
                    </Link>
                  </MenuItem>
                  <MenuItem
                    _hover={{
                      bg: 'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
                    }}
                    color={'#fff'}
                  >
                    <Link as={ReactLink} to={'/'}>
                      Remove
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Stack>

          <Stack gap={6}>
            {empdetail?.map((v, e) => {
              return (
                <Stack
                  direction={'row'}
                  flexWrap={'wrap'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  py={5}
                  bg={'#2E3035'}
                  borderRadius={6}
                  py={6}
                  px={3}
                  key={e}
                >
                  <Box display={'flex'} gap={3}>
                    <Avatar name="Kent Dodds" src={v.avtar} />
                    <Box className="venbox p1 m3-h">
                      <Text>{v.id}</Text>
                      <Heading as={'h3'}>{v.name}</Heading>
                    </Box>
                  </Box>
                  <Box className="m5-h p1">
                    <Text>Status</Text>
                    <Heading as={'h5'}>{v.status}</Heading>
                  </Box>
                  <Box className="m5-h p1">
                    <Text>Coupon</Text>
                    <Heading as={'h5'}>{v.Coupon}</Heading>
                  </Box>
                  <Box className="m5-h p1">
                    <Text>Discount</Text>
                    <Heading as={'h5'}>{v.Discount}</Heading>
                  </Box>
                  <Box className="m5-h p1">
                    <Text>Invoice</Text>
                    <Heading as={'h5'}>{v.Invoice}</Heading>
                  </Box>
                  <Box className="m5-h p1">
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
                      to={'/'}
                      as={ReactLink}
                    >
                      View Full Details
                    </Link>
                  </Box>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
        {/* Tab job One */}

        {/* Tab Attendance two */}
        <Stack className="epmt2">
          <Stack
            direction={'row'}
            py={6}
            flexWrap={'wrap'}
            justifyContent={'space-between'}
          >
            <Box className="p1">
              <Text>Total Jobs: 17</Text>
            </Box>
            <Box>
              <Menu>
                <MenuButton>
                  <Text color={'#7D7D7D'}>
                    {' '}
                    All Jobs{' '}
                    <Icon
                      fontSize={'16px'}
                      color={'#545454'}
                      as={IoIosArrowDown}
                    />
                  </Text>
                </MenuButton>
                <MenuList bg={'#545454'} border={'0'}>
                  <MenuItem
                    _hover={{
                      bg: 'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
                    }}
                    _focus={{
                      bg: '#545454',
                    }}
                    color={'#fff'}
                  >
                    <Link as={ReactLink} to={'/'}>
                      Block
                    </Link>
                  </MenuItem>
                  <MenuItem
                    _hover={{
                      bg: 'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
                    }}
                    color={'#fff'}
                  >
                    <Link as={ReactLink} to={'/'}>
                      Remove
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Stack>

          <Stack
            direction={'row'}
            alignItems={'center'}
            flexWrap={'wrap'}
            pb={3}
            justifyContent={'space-between'}
          >
            <Stack>
              <UnorderedList
                gap={6}
                display={'flex'}
                py={5}
                listStyleType={'none'}
              >
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
                      bg: 'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
                      border: '1px solid #2BAF59',
                    }}
                    w={'fit-content'}
                    to={'/'}
                    as={ReactLink}
                  >
                    All Attendance
                  </Link>
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
                      bg: 'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))',
                      border: '1px solid #2BAF59',
                    }}
                    w={'fit-content'}
                    to={'/'}
                    as={ReactLink}
                  >
                    Attendance Request
                  </Link>
                </ListItem>
              </UnorderedList>
            </Stack>
          </Stack>
          {/* tabinerr one */}
          <Stack>
            <Stack>
              <Checkbox
                alignSelf={'end'}
                color={'#7D7D7D'}
                size="md"
                colorScheme="green"
                defaultChecked
              >
                Select All
              </Checkbox>
            </Stack>
            <Stack gap={6}>
              {empAtt?.map((v, e) => {
                return (
                  <Stack
                    direction={'row'}
                    flexWrap={'wrap'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    py={5}
                    bg={'#2E3035'}
                    borderRadius={6}
                    py={6}
                    px={3}
                    key={e}
                  >
                    <Box className="m5-h p1">
                      <Checkbox
                        color={'#7D7D7D'}
                        size="md"
                        colorScheme="green"
                        defaultChecked
                      ></Checkbox>
                    </Box>
                    <Box className="m5-h p1">
                      <Text>No</Text>
                      <Heading as={'h5'}>{v.no}</Heading>
                    </Box>
                    <Box className="m5-h p1">
                      <Text>Date</Text>
                      <Heading as={'h5'}>{v.date}</Heading>
                    </Box>
                    <Box className="m5-h p1">
                      <Text>Day</Text>
                      <Heading as={'h5'}>{v.day}</Heading>
                    </Box>
                    <Box className="m5-h p1">
                      <Text>Clock In</Text>
                      <Heading as={'h5'}>{v.clockin}</Heading>
                    </Box>
                    <Box className="m5-h p1">
                      <Text>Clock Out</Text>
                      <Heading as={'h5'}>{v.clockout}</Heading>
                    </Box>
                    <Box className="m5-h p1">
                      <Text>Break Duration</Text>
                      <Heading as={'h5'}>{v.breakduration}</Heading>
                    </Box>
                    <Box className="m5-h p1">
                      <Text>Hours Worked</Text>
                      <Heading as={'h5'}>{v.Hours}</Heading>
                    </Box>
                    <Box className="m5-h p1">
                      <Text>Status</Text>
                      <Badge
                        padding={'10px 20px'}
                        borderRadius={'25px'}
                        bg={
                          v.Status == 'Leave'
                            ? 'rgba(244, 21, 21, 0.16)'
                            : 'rgba(46, 196, 135, 0.16)'
                        }
                        color={v.Status == 'Leave' ? '#F41515' : '#2EC487'}
                      >
                        {v.Status}
                      </Badge>
                    </Box>
                    <Box display={'flex'} gap={4}>
                      <Link
                        display={'flex'}
                        borderRadius={50}
                        alignItems={'center'}
                        justifyContent={'center'}
                        bg={
                          'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))'
                        }
                        w={'30px'}
                        h={'30px'}
                        to={'/'}
                        color={'#fff'}
                      >
                        <BiEditAlt />
                      </Link>
                      <Link
                        display={'flex'}
                        borderRadius={50}
                        alignItems={'center'}
                        justifyContent={'center'}
                        bg={'#E53E3E'}
                        w={'30px'}
                        h={'30px'}
                        to={'/'}
                        color={'#fff'}
                      >
                        <AiOutlineDelete />
                      </Link>
                    </Box>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
          {/* tab inner one */}

          {/* tab inner two */}
          <Stack>
            <Stack>
              <Checkbox
                alignSelf={'end'}
                color={'#7D7D7D'}
                size="md"
                colorScheme="green"
                defaultChecked
              >
                Select All
              </Checkbox>
            </Stack>
            <Stack gap={6}>
              {empAttReq?.map((v, e) => {
                return (
                  <Stack
                    direction={'row'}
                    flexWrap={'wrap'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    py={5}
                    bg={'#2E3035'}
                    borderRadius={6}
                    py={6}
                    px={3}
                    key={e}
                  >
                    <Box className="m5-h p1">
                      <Checkbox
                        color={'#7D7D7D'}
                        size="md"
                        colorScheme="green"
                        defaultChecked
                      ></Checkbox>
                    </Box>
                    <Box className="m5-h p1">
                      <Text>No</Text>
                      <Heading as={'h5'}>{v.no}</Heading>
                    </Box>
                    <Box className="m5-h p1">
                      <Text>Date</Text>
                      <Heading as={'h5'}>{v.date}</Heading>
                    </Box>
                    <Box className="m5-h p1">
                      <Text>Day</Text>
                      <Heading as={'h5'}>{v.day}</Heading>
                    </Box>
                    <Box className="m5-h p1">
                      <Text>Issue Type</Text>
                      <Heading as={'h5'}>{v.IssueType}</Heading>
                    </Box>
                    <Box className="m5-h p1">
                      <Text>Issue Description</Text>
                      <Button
                        padding={'10px 25px'}
                        bg={
                          'var(--grdient-green, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #2BAF59 -1.34%, #1D723B 99.92%))'
                        }
                        fontSize={'15px'}
                        color={'#fff'}
                        fontWeight={'500'}
                        lineHeight={'inherit'}
                        borderRadius={12}
                        _hover={{
                          color: '#000',
                        }}
                        w={'fit-content'}
                       
                      >
                        View
                      </Button>
                    </Box>

                    <Box display={'flex'} gap={4}>
                    <Button
                        padding={'10px 25px'}
                       bg={'rgba(46, 196, 135, 0.16)'}
                        fontSize={'15px'}
                        color={'#2EC487'}
                        fontWeight={'500'}
                        lineHeight={'inherit'}
                        borderRadius={12}
                        _hover={{
                          color: '#fff',
                        }}
                        w={'fit-content'}
                       
                      >
                        Accept
                      </Button>
                      <Button
                        padding={'10px 25px'}
                        bg={'rgba(244, 21, 21, 0.16)'}
                        fontSize={'15px'}
                        color={'#F41515'}
                        fontWeight={'500'}
                        lineHeight={'inherit'}
                        borderRadius={12}
                        _hover={{
                          color: '#fff',
                        }}
                        w={'fit-content'}
                       
                      >
                        Reject
                      </Button>
                    </Box>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
          {/* tab inner two */}
        </Stack>
        {/* Tab Attendance two */}

        {/*Tab Privileges three */}
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
        {/* Tab Privileges three */}

        {/* ===tab div=== */}
      </Stack>
    </>
  );
}
