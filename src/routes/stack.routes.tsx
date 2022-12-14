import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreenA } from '../screens/ScreenA'
import { ScreenB } from '../screens/ScreenB'

const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
    return (
        <Navigator >
            <Screen
                name='screenA'
                options={{
                    headerShown: false
                }}
                component={ScreenA}
            />
            <Screen
                name='screenB'
                options={{
                    title: 'Screen B',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: 'white'
                }}
                component={ScreenB}
            />
        </Navigator>
    )
}