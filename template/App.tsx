import React from 'react'
import AppRoutes from './src/routes'
import { ThemedWrapper } from './src/theme'

const AppWrapper = () => {
    return (
        <ThemedWrapper>
            <AppRoutes />
        </ThemedWrapper>
    )
}

export default AppWrapper
