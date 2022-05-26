import React from 'react'

export interface ThemType {
  buttonType: string;
}

const themeContextDefaultValue = {
  buttonType: 'default',
}

export const ThemeContext = React.createContext(themeContextDefaultValue)
