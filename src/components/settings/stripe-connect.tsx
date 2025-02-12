'use client'
import React from 'react'
import { Button } from '../ui/button'
import { Loader } from '../loader'
import { useStripe } from '@/hooks/billing/use-billing'

type StripeConnectProps = {
  connected: boolean
}

export const StripeConnect = ({ connected }: StripeConnectProps) => {
  const { onStripeConnect, onStripeAccountPending } = useStripe()
  return (
    <Button
      disabled={connected}
      onClick={onStripeConnect}
      className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white hover:from-blue-700 hover:to-purple-700"
    >
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] opacity-0 hover:animate-shimmer" />
      <Loader loading={onStripeAccountPending}>
        {connected ? 'Connected' : 'Connect to stripe'}
      </Loader>
    </Button>
  )
}
