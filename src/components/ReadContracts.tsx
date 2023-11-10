'use client'

import { useContractReads } from 'wagmi'

import { wagmiContractConfig } from './contracts'
import { stringify } from '../utils/stringify'

export function ReadContracts() {
  const { data, isSuccess, isLoading } = useContractReads({
    contracts: [
      {
        ...wagmiContractConfig,
        functionName: 'balanceOf',
        args: ['0x29407fb56e09c4fff1a3ad5a84140b2eeef14cb2'],
      },
      {
        ...wagmiContractConfig,
        functionName: 'name',
      },
      {
        ...wagmiContractConfig,
        functionName: 'totalSupply',
      },
    ],
  })

  return (
    <div>
      <div>Data:</div>
      {isLoading && <div>loading...</div>}
      {isSuccess &&
        data?.map((data) => <pre key={stringify(data)}>{stringify(data)}</pre>)}
    </div>
  )
}
