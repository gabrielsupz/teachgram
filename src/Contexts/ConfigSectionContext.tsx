import { useContext, createContext, useState } from 'react'

interface ConfigSectionProvider {
  children: React.ReactNode
}

interface ConfigSectionContextType {
  configSection: boolean
  setConfigSection: React.Dispatch<React.SetStateAction<boolean>>
}
const ConfigSectionContext = createContext<ConfigSectionContextType>(
  {} as ConfigSectionContextType
)

export const ConfigSectionProvider = ({ children }: ConfigSectionProvider) => {
  const [configSection, setConfigSection] = useState<boolean>(true)
  return (
    <ConfigSectionContext.Provider value={{ configSection, setConfigSection }}>
      {children}
    </ConfigSectionContext.Provider>
  )
}

export const useConfigSection = () => {
  const context = useContext(ConfigSectionContext)
  return context
}
