import { Inter } from '@next/font/google'
import React from 'react'
import { RecoilRoot } from 'recoil'
import BarChart from './chart/BarChart'
import { Exchange } from './exchange-rate/Exchange'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<RecoilRoot>
			<React.Suspense fallback={<div>Loading...</div>}>
				{/* <Exchange></Exchange> */}
				{/* <Data></Data> */}
				<BarChart></BarChart>
			</React.Suspense>
    	</RecoilRoot>
  )
}
