import {  Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'home-sharp' : 'home-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="catalogue"
                options={{
                    tabBarLabel: 'Catalogue',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'list' : 'list-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="estimate"
                options={{
                    tabBarLabel: 'Estimate',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'calculator' : 'calculator-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'settings' : 'settings-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
