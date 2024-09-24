import React from 'react';
import { NavigationContainer } from "@react-navegation/native"
import { createStackNavigator } from "@react-navegation/stack" 

import Note from "./src/pages/Note/" 
import NewNote from "./src/pages/NewNote/" 
import Details from "./src/pages/Details/" 

const Stack = createStackNavigation ()

export default function App() {
    return (
        <navigationContainer>
            <Stack.Navigator initialRouteName="Note">
                <Stack.Screen
                name="Note"
                component={Nota}
                options={{
                    headerTintColor: "#a1ab81"
                }}
                />

                <Stack.Screen
                name="NewNote"
                component={Nota}
                options={{
                    headerTintColor: "#a1ab81"
                }}
                />

                <Stack.Screen
                name="Details"
                component={Nota}
                options={{
                    headerTintColor: "#a1ab81"
                }}
                />
            </Stack.Navigator>
        </navigationContainer>
    );
}