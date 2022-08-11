import { createContext, ReactNode, useMemo, useState } from 'react'

export type ModulesContextData = {
  selectedModule: string
  setSelectedModule: (data: string) => void
}

type ModulesContextProps = {
  children: ReactNode
}

const ModulesContext = createContext({} as ModulesContextData)

function ModulesProvider({ children }: ModulesContextProps): JSX.Element {
  const [selectedModule, setSelectedModule] = useState('')

  const value = useMemo(() => ({ selectedModule, setSelectedModule }), [selectedModule])

  return <ModulesContext.Provider value={value}>{children}</ModulesContext.Provider>
}

export { ModulesContext, ModulesProvider }
