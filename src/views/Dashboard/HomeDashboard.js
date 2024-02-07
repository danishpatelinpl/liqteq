import React from 'react';
import MainDashboard from '../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import Dashdetails from '../../components/Dashboard/Dashdetails';
import Listowners from '../../components/Dashboard/Listowners';

export default function HomeDashboard() {
  return (
    <>
      <MainDashboard>
        <Stack px={4}>
          <Stack mb={4}>
            <Dashdetails />
          </Stack>
          <Stack direction={'row'} gap={6}>
          <Stack w={'50%'} >
            <Listowners />
          </Stack>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
