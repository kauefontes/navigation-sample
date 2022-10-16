import React from "react";
import { Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function ScreenA() {
    const navigation = useNavigation()
    function goToScreen() {
        navigation.navigate('screenB', { name: 'Quewui' })
    }


    return (
        <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
            <Button
                title=" Go to B"
                onPress={goToScreen} />
        </View>
    )
}