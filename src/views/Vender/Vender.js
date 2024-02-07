import React from 'react';
import MainDashboard from '../../components/DashNav/MainDashboard';
import Allvender from '../../components/Vendor/Allvender';
import { Stack } from '@chakra-ui/react';

export default function Vender() {
  return (
    <>
      <MainDashboard>
        <Stack px={4}>
          <Allvender />
        </Stack>
      </MainDashboard>
    </>
  );
}
