/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint consistent-return: 0 */
import { useEffect, useRef } from 'react'

export type EventListenerOptions = {
  enabled?: boolean
  target?: GlobalEventHandlers
}

export type EventListenerHook = (
  eventType: keyof GlobalEventHandlersEventMap,
  handler: (event: Event | MouseEvent) => void,
  option: EventListenerOptions,
) => void

const useEventListener: EventListenerHook = (eventType, handler, options) => {
  const handlerRef = useRef(handler)

  useEffect(() => {
    handlerRef.current = handler
  }, [])

  useEffect(() => {
    if (!options.enabled) {
      return
    }

    function internalHandler(e: Event): void {
      return handlerRef?.current(e)
    }

    const target = (options.target = document)

    target.addEventListener(eventType, internalHandler)

    return () => {
      options.target!.removeEventListener(eventType, internalHandler)
    }
  }, [eventType, options])
}

export default useEventListener
