import { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

import { WrapperToggleSwitch } from './styles'

import { useTheme } from 'styles/themeConfig'

export const ToggleSwitch = () => {
  const [isIcon, setIsIcon] = useState(true)
  const { toggleTheme } = useTheme()

  const handleToggleClick = () => {
    setIsIcon(!isIcon)
    toggleTheme() // Chama a função toggleTheme após a alternância do ícone
  }

  return (
    <WrapperToggleSwitch onClick={handleToggleClick}>
      {isIcon ? <FaSun /> : <FaMoon />}
    </WrapperToggleSwitch>
  )
}
