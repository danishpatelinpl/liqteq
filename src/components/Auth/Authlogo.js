import { Image, Stack } from '@chakra-ui/react'
import React from 'react'
import Dashlogo from '../../assets/images/logo.png'

export default function Authlogo() {
  return (
    <>
     <Stack mb={6} textAlign={'center'}>
                <Image margin={'auto'} w={'20%'}   src={Dashlogo} alt={'logo'}/>
              </Stack>
    </>
  )
}
