import React from 'react';
import MainDashboard from '../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
 import SingleEmp from '../../components/Employes/SingleEmp';

export default function EmployesDetail() {
  return (
    <MainDashboard>
        <Stack px={4}>
        <SingleEmp/>
        </Stack>
      </MainDashboard>
  )
}
