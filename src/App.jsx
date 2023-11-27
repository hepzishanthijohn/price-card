import { useState } from 'react'
import Data from './Data'
import Card from './Card'
import './App.css'

function App() {
  
   const dataComp=Data.map((data)=>{
    return <Card key={data.key} 
    plan={data.plan} 
    price={data.price}
    user={data.user}
    storage={data.storage}
    publicProjects={data.publicProjects}
    communityAccess={data.communityAccess}
    privateProjects={data.privateProjects}
    phoneSupport={data.phoneSupport}
    subDomain={data.subDomain}
    statusPlan={data.statusPlan}
    
    />
   })

  return (
    
    <>
    {dataComp}
    
    
    </>
  )
}

export default App
