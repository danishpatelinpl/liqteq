import React from 'react';
import MainDashboard from '../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import NewEmp from '../../components/Employes/NewEmp'

export default function AddEmployes() {
  return (
    <>
      <MainDashboard>
      <Stack  px={4}>
      <NewEmp/>
      </Stack>
    </MainDashboard>
    </>
  )
}
