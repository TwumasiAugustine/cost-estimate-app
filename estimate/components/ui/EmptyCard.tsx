import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function EmptyCard({
    message,
    actionLabel,
    onAction,
}: {
    message: string;
    actionLabel?: string;
    onAction?: () => void;
}) {
    return (
        <View className="mb-4 items-center rounded-xl border border-[#f1e9d9] bg-white px-4 py-8 shadow-sm">
            <Text className="mb-2 text-gray-400">{message}</Text>
            {actionLabel && (
                <TouchableOpacity onPress={onAction}>
                    <Text className="font-semibold text-[#8a6a2f]">{actionLabel}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
