import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface AdminToolCardProps {
    onPress: () => void;
    label: string;
}

const AdminToolCard: React.FC<AdminToolCardProps> = ({ onPress, label }) => (
    <Pressable
        onPress={onPress}
        className="bg-primary-50 border-primary-100 mb-2 flex-row items-center rounded-lg border px-3 py-3"
        accessibilityRole="button"
        accessibilityLabel={label}>
        <Feather name="edit" size={18} color="#b7791f" className="mr-2" />
        <Text className="text-primary-700 text-base font-medium">{label}</Text>
    </Pressable>
);

export default AdminToolCard;
