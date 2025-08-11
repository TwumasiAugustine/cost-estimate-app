import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import '../global.css';

export default function NotFoundScreen() {
    return (
        <View className="bg-background flex-1 items-center justify-center px-6">
            <View className="mb-8 items-center">
                <MaterialIcons name="error-outline" size={64} color="#f87171" />
                <Text className="mt-4 text-2xl text-red-400">
                    404
                </Text>
                <Text
                    className="mt-2 text-center text-md text-gray-500 dark:text-gray-400">
                    Oops! The page you are looking for was not found.
                </Text>
            </View>
            <Link
                href="/"
                className="flex-row items-center rounded-full bg-blue-600 px-4 py-2"
                style={{ elevation: 2 }}>
                <MaterialIcons name="home" size={20} color="#fff" />
                <Text className="ml-2 font-semibold text-white">Go Home</Text>
            </Link>
        </View>
    );
}
