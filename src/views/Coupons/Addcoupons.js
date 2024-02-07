import React from 'react'
import MainDashboard from '../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import NewCoupon from '../../components/Coupons/NewCoupon';


export default function Addcoupons() {
  return (
    <>
         <MainDashboard>
        <Stack px={4}>
         <NewCoupon/>
        </Stack>
      </MainDashboard>
    </>
  )
}
