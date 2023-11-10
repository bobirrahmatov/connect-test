'use client'

import { useState } from 'react'
import { type Address, useToken } from 'wagmi'

export function Token() {
  const [address, setAddress] = useState<Address>(
    '0x29407fb56e09c4fff1a3ad5a84140b2eeef14cb2',
  )
  const { data, error, isError, isLoading, refetch } = useToken({ address })

  return (
    <>
      <div>
        <input
          onChange={(e) => setAddress(e.target.value as Address)}
          placeholder="token address"
          value={address}
        />
        <button onClick={() => refetch()}>fetch</button>
      </div>

      {data && (
        <div>
          {data.totalSupply?.formatted} {data.symbol}
        </div>
      )}
      {isLoading && <div>Fetching token...</div>}
      {isError && <div>Error: {error?.message}</div>}
    </>
  )
}
