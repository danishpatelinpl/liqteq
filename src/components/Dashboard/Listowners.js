import { Avatar, Box, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { React, useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import L3 from '../../assets/images/data/l3.png';
import { ownerlist } from '../../assets/data/Data.js';

export default function Listowners() {

const [owner, setowner] = useState(ownerlist)

  return (
    <>
      <Stack>
        <Box
          display={'flex'}
          flexWrap={'wrap'}
          justifyContent={'space-between'}
        >
          <Stack className="m4-h">
            <Heading as={'h4'}>List Of Owners</Heading>
          </Stack>
          <Stack>
            <Link as={ReactLink} to={'/'} color={'#7D7D7D'}>
              View All
            </Link>
          </Stack>
        </Box>
        <Stack borderRadius={6} bg={'#202125'} gap={3} p={6}>
        {
            owner.map((v,e)=>{
                return(
                    <Stack
                    direction={'row'}
                    py={6}
                    px={4}
                    borderRadius={6}
                    flexWrap={'wrap'}
                    justifyContent={'space-between'}
                    bg={'#2E3035'}
                    key={e}
                  >
                    <Box display={'flex'} gap={3}>
                      <Avatar name="Kent Dodds" src={v.avtar} />
                      <Box className="venbox p1 m3-h">
                        <Text>{v.id}</Text>
                        <Heading as={'h3'}>{v.name}</Heading>
                      </Box>
                    </Box>
                    <Stack className="venbox p1 m3-h">
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
                        w={'100%'}
                        to={'/addservices'}
                        as={ReactLink}
                        textAlign={'center'}
                      >
                        View Full Details
                      </Link>
                    </Stack>
                  </Stack>
                )
            })
        }
         
        </Stack>
      </Stack>
    </>
  );
}
