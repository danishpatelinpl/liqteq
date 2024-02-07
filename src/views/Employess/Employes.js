import React from 'react';
import MainDashboard from '../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import EmployesList from '../../components/Employes/EmployesList';

export default function Employes() {
  return (
    <>
      <MainDashboard>
        <Stack px={4}>
         <EmployesList/>
        </Stack>
      </MainDashboard>
    </>
  )
}
