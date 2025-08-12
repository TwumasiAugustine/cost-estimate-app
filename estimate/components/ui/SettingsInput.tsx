import React from 'react';
import { View, TextInput, Text, TextInputProps } from 'react-native';

interface SettingsInputProps extends TextInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
}

const SettingsInput: React.FC<SettingsInputProps> = ({ label, value, onChangeText, ...props }) => (
    <View className="mb-2">
        <Text className="text-primary-700 mb-1 font-medium">{label}</Text>
        <TextInput
            className="bg-primary-50 border-primary-100 text-primary-900 rounded-lg border px-3 py-2 text-base"
            value={value}
            onChangeText={onChangeText}
            {...props}
        />
    </View>
);

export default SettingsInput;
