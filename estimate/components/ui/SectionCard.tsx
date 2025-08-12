import React from 'react';
import { View, Text } from 'react-native';

interface SectionCardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, children, className }) => (
    <View className={`mb-4 rounded-xl bg-white p-4 shadow-sm ${className || ''}`.trim()}>
        <Text className="text-primary-700 mb-3 text-base font-bold">{title}</Text>
        {children}
    </View>
);

export default SectionCard;
