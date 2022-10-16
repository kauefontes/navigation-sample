import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import { ScreenA } from '../screens/ScreenA'
import { ScreenB } from '../screens/ScreenB'

const { Screen, Navigator } = createBottomTabNavigator()

export function TabRoutes() {
    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: 'navy',
                tabBarInactiveTintColor: 'grey',
                headerShown: false
            }}
        >
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name='home'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name='explore'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Navigator>
    )
}