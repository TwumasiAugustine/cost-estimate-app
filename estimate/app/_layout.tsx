import { Stack } from 'expo-router';
import '../global.css';
import Header from '../components/ui/Header';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                header: () => (
                    <Header
                        appName="Estimate App"
                        right={
                            <Ionicons
                                name="person-circle"
                                size={28}
                                accessibilityLabel="Profile"
                                color="#ff6347"
                            />
                        }
                    />
                ),
                headerShadowVisible: true,
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerTintColor: '#ff6347',
            }}>
            <Stack.Screen name="(tabs)" />
        </Stack>
    );
}
