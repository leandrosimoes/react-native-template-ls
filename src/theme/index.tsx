import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { DarkTheme } from './theme'

export const ThemedWrapper: React.FC = ({ children }) => {
    return <ThemeProvider theme={DarkTheme}>{children}</ThemeProvider>
}
