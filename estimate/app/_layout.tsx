import { Stack, useRouter } from 'expo-router';
import '../global.css';
import Header from '../components/ui/Header';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
    const router = useRouter();

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
                                color="#8a6a2f"
                                onPress={() => {
                                    router.push('/(tabs)/settings');
                                }}
                            />
                        }
                    />
                ),
                headerShadowVisible: true,
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerTintColor: '#8a6a2f',
            }}
        >
            <Stack.Screen name="(tabs)" />
        </Stack>
    );
}

