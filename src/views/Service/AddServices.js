import React from 'react';
import MainDashboard from '../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import NewService from '../../components/Service/NewService';

export default function AddServices() {
  return (
    <>
      <MainDashboard>
      <Stack  px={4}>
       <NewService/>
      </Stack>
    </MainDashboard>
    </>
  )
}
