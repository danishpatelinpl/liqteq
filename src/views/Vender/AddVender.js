import React from 'react';
import MainDashboard from '../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import NewVender from '../../components/Vendor/NewVender';

export default function AddVender() {
  return (
    <>
    <MainDashboard>
      <Stack px={4}>
        <NewVender/>
      </Stack>
    </MainDashboard>
  </>
  )
}
