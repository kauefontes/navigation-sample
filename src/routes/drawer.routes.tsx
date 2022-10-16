import { createDrawerNavigator } from '@react-navigation/drawer'
import { MaterialIcons } from '@expo/vector-icons'

import { ScreenA } from '../screens/ScreenA'
import { ScreenB } from '../screens/ScreenB'

const { Screen, Navigator } = createDrawerNavigator()

export function DrawerRoutes() {
    return (
        <Navigator
            screenOptions={{}}
        >
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: () => <MaterialIcons name='home' size={22} />
                }}
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    drawerLabel: 'Explore',
                    drawerIcon: () => <MaterialIcons name='explore' size={22} />
                }}
            />
        </Navigator>
    )
}