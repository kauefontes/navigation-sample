import React from "react";
import { useRoute, useNavigation } from '@react-navigation/native'
import { Button, Text, View } from "react-native";

type ParamProps = {
    name: string
}

export function ScreenB() {
    const navigation = useNavigation()
    const route = useRoute()
    const { name } = route.params as ParamProps
    return (
        <View style={{ flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>
                ¡{name}!
            </Text>
            <Button title='Go Back' onPress={navigation.goBack} />
        </View>
    )
}