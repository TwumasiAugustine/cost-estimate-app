import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'expo-router';

interface HeaderProps {
    appName?: string;
    icons?: React.ReactNode;
    onMenuPress?: () => void;
    right?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ appName = 'EstimateApp', icons, onMenuPress, right }) => {
    const router = useRouter();
    const renderRight = () => {
        if (
            React.isValidElement(right) &&
            right.type === Ionicons &&
            typeof (right.props as any)?.name === 'string' &&
            (right.props as any).name === 'person-circle'
        ) {
            return (
                <TouchableOpacity
                    onPress={() => router.push('/(tabs)/settings')}
                    className="ml-2 rounded-full bg-gray-800/60 p-1 active:bg-gray-800">
                    {React.cloneElement(right as React.ReactElement<any>, { color: '#8a6a2f' })}
                </TouchableOpacity>
            );
        }
        return right ? (
            <View className="ml-2">{right}</View>
        ) : icons ? (
            <View className="ml-2">{icons}</View>
        ) : null;
    };

    return (
        <View
            className={twMerge(
                'flex-row items-center border-b border-gray-800 bg-[#181c24] px-4 py-3 shadow-sm shadow-black/30',
                'min-h-[56px]'
            )}>
            {/* Left: Menu or Icon */}
            {onMenuPress ? (
                <TouchableOpacity
                    onPress={onMenuPress}
                    className="mr-2 rounded-full bg-gray-800/60 p-1 active:bg-gray-800">
                    <Ionicons name="menu" size={24} color="#8a6a2f" />
                </TouchableOpacity>
            ) : (
                <Ionicons name="calculator" size={26} color="#8a6a2f" className="mr-2" />
            )}

            {/* Center: App Name */}
            <Text className="flex-1  text-lg font-bold tracking-tight text-white">
                {appName}
            </Text>

            {/* Right: Custom icons or actions */}
            {renderRight()}
        </View>
    );
};

export default Header;
