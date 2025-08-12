import React from 'react';
import { View, Text } from 'react-native';

interface InfoFieldProps {
    label: string;
    value: string;
}

const InfoField: React.FC<InfoFieldProps> = ({ label, value }) => (
    <View className="mb-2">
        <Text className="text-primary-700 mb-1 font-medium">{label}</Text>
        <View className="bg-primary-50 border-primary-100 rounded-lg border px-3 py-2">
            <Text className="text-primary-900 text-base">{value}</Text>
        </View>
    </View>
);

export default InfoField;
