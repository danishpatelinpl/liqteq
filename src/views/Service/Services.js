import React from 'react';
import MainDashboard from '../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import ServicesList from '../../components/Service/ServicesList';

export default function Services() {
  return (
    <>
      <MainDashboard>
        <Stack px={4}>
          <ServicesList />
        </Stack>
      </MainDashboard>
    </>
  );
}
