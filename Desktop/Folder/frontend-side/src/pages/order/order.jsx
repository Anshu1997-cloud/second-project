import React, { useContext } from 'react'
import Layout from '../../components/layout/layout'
import myContext from '../../context/data/myContext'

const Order = () => {
  const context = useContext(myContext);
  const {name, Class} = context
  return (
    <Layout>order
      <h1>Name :{name}</h1>
       <h1>Class  :{Class}</h1>
    </Layout>
  )
}

export default Order