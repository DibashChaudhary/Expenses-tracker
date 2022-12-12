import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TransForm } from '../components/form/TransForm'
import { Layout } from '../components/layout/Layout'
import { TransTable } from '../components/table/TransTable'
import { fetchTrans } from '../utils/axiosHelper'


export const Dashboard = () => {

  const [trans, setTrans] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    getTrans();

    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user)
    !user && navigate("/")
  }, []);

  const getTrans = async () => {
    const { trans } = await fetchTrans();

    trans?.length && setTrans(trans);
  };
  console.log(trans);
  return (
    <Layout>
      <TransForm getTrans={getTrans}/>
      <TransTable trans={trans} getTrans={getTrans}/>
    </Layout>
    
  )
}
