'use client'

import { agesArray } from '@/constants/captiveArray';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';


const AgesChart = () => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <PieChart width={400} height={400} >
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={agesArray}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}
export default AgesChart