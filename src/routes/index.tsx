import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Dimensions } from 'react-native'
import { EScreens } from '../@types'
import HomeScreen from '../screens/Home'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const { width } = Dimensions.get('window')

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={EScreens.HOME} component={HomeScreen} />
        </Stack.Navigator>
    )
}

const App: React.FC = () => {
    return (
        <Drawer.Navigator
            drawerPosition='right'
            drawerStyle={{ width: width - 50 }}>
            <Drawer.Screen name={EScreens.MAIN} component={StackNavigator} />
        </Drawer.Navigator>
    )
}

export default App
