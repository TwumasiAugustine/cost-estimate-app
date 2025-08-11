import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SectionHeaderProps {
    title: string;
    actionLabel?: string;
    onAction?: () => void;
    labelClassName?: string;
    iconClassName?: string;
}

export default function SectionHeader({
    title,
    actionLabel,
    onAction,
    labelClassName,
    iconClassName = 'text-primary',
}: SectionHeaderProps) {
    return (
        <View className="mb-2 flex-row items-center justify-between p-2">
            <Text className="text-2xl font-bold text-primary">{title}</Text>
            {actionLabel && (
                <TouchableOpacity onPress={onAction} className="flex-row items-center">
                    <Ionicons name="add" size={18} className={iconClassName} />
                    <Text
                        className={`ml-1 font-semibold text-lg ${labelClassName ?? ''}`}
                    >
                        {actionLabel}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
