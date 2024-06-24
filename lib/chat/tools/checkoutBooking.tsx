import 'server-only'

import { z } from 'zod'
import type { Message } from 'ai'
import { nanoid } from '@/lib/utils'
import { BotCard, BotMessage } from '@/components/stocks'
import {
  PurchaseTickets,
  PurchaseProps
} from '@/components/flights/purchase-ticket'
import { createStreamableUI, getMutableAIState } from 'ai/rsc'

export type ToolParameters = z.input<typeof definition.parameters>
export type ToolProps = any

export const definition = {
  description: 'Show the UI to purchase/checkout a flight and hotel booking.',
  parameters: z.object({})
}

export const call = (
  args: ToolParameters,
  aiState: ReturnType<typeof getMutableAIState>,
  uiStream: ReturnType<typeof createStreamableUI>
) => {
  debugger

  aiState.done({
    ...aiState.get(),
    interactions: []
  })

  uiStream.update(UIFromAI())
}

export const UIFromAI = (props?: PurchaseProps) => (
  <BotCard>
    <PurchaseTickets {...props} />
  </BotCard>
)
