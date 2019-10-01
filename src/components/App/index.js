import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from '~/screens/Home'
import AboutScreen from '~/screens/About'

import Theme from '~/theme'

const DrawerNavigator = createDrawerNavigator(
    {
        Home: HomeScreen,
        About: AboutScreen,
    },
    {
        drawerPosition: 'right',
        drawerBackgroundColor: Theme.SecondaryColor,
        hideStatusBar: false,
        overlayColor: Theme.MainColor,
        contentOptions: {
            activeTintColor: Theme.SecondaryColor,
            activeBackgroundColor: Theme.MainColor,
        },
    }
)

export default createAppContainer(DrawerNavigator)
