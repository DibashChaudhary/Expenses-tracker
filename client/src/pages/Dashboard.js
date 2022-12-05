import React from 'react'
import { TransForm } from '../components/form/TransForm'
import { Layout } from '../components/layout/Layout'
import { TransTable } from '../components/table/TransTable'


export const Dashboard = () => {

  return (
    <Layout>
      <TransForm />
      <TransTable />
    </Layout>
    
  )
}
