'use client'

import { agesArray } from '@/constants/captiveArray';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';


const AgesChart = () => {
  return (
    <>
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={agesArray}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#231adb"
          label
        />
        <Tooltip wrapperStyle={{borderRadius: '25px'}} itemStyle={{color: 'green'}} offset={50}/>
      </PieChart>
    </ResponsiveContainer>
    {/* <ResponsiveContainer width='100%' height={450} className='mx-4'>
      <PieChart width={400} height={400} >
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={agesArray}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#231adb"
          label
        />
        <Tooltip wrapperStyle={{borderRadius: '25px'}} itemStyle={{color: 'green'}} offset={50}/>
      </PieChart >
    </ResponsiveContainer> */}
    </>
  )
}
export default AgesChart