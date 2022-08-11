import { useContext } from 'react'
import { ModulesContext, ModulesContextData } from '../contexts/modules'

export function useModules(): ModulesContextData {
  const context = useContext(ModulesContext)

  if (!context) {
    throw new Error('useModules must be used within an ModulesProvider')
  }

  return context
}
