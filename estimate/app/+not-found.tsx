import { View } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
    return (
        <ThemedView className="bg-background flex-1 items-center justify-center px-6">
            <View className="mb-8 items-center">
                <MaterialIcons name="error-outline" size={64} color="#f87171" />
                <ThemedText type="title" className="mt-4 text-red-400">
                    404
                </ThemedText>
                <ThemedText
                    type="subtitle"
                    className="mt-2 text-center text-lg text-gray-500 dark:text-gray-400">
                    Oops! The page you are looking for was not found.
                </ThemedText>
            </View>
            <Link
                href="/"
                className="flex-row items-center rounded-full bg-blue-600 px-4 py-2"
                style={{ elevation: 2 }}>
                <MaterialIcons name="home" size={20} color="#fff" />
                <ThemedText className="ml-2 font-semibold text-white">Go Home</ThemedText>
            </Link>
        </ThemedView>
    );
}
