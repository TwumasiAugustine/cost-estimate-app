import React from 'react';
import { View, Text, Switch } from 'react-native';

interface SettingsSwitchProps {
    label: string;
    description?: string;
    value: boolean;
    onValueChange: (val: boolean) => void;
    color?: string;
}

const SettingsSwitch: React.FC<SettingsSwitchProps> = ({
    label,
    description,
    value,
    onValueChange,
    color,
}) => (
    <View className="mb-3 flex-row items-center justify-between">
        <View>
            <Text className="text-primary-700 text-base font-medium">{label}</Text>
            {description ? <Text className="text-sm text-gray-500">{description}</Text> : null}
        </View>
        <Switch
            value={value}
            onValueChange={onValueChange}
            trackColor={{ false: '#e5e7eb', true: color || '#b7791f' }}
            thumbColor={value ? color || '#b7791f' : '#f4f3f4'}
            ios_backgroundColor="#e5e7eb"
        />
    </View>
);

export default SettingsSwitch;
