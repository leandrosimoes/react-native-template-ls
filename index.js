import { AppRegistry } from 'react-native'
import AppWrapper from '~/components'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => AppWrapper)
