 import React from 'react'
import MainDashboard from '../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import Couponslist from '../../components/Coupons/Couponslist';
 
 export default function Coupons() {
   return (
     <>
      <MainDashboard>
        <Stack px={4}>
          <Couponslist/>
        </Stack>
      </MainDashboard>
     </>
   )
 }
 