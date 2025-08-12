import React from 'react';
import { View, Text } from 'react-native';

interface ProfileCardProps {
    name: string;
    accountType: string;
    initials: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, accountType, initials }) => (
    <View className="mb-4 flex-row items-center rounded-xl bg-white p-4 shadow-sm">
        <View className="bg-primary-500 mr-4 h-14 w-14 items-center justify-center rounded-full">
            <Text className="text-xl font-bold text-white">{initials}</Text>
        </View>
        <View>
            <Text className="text-primary-700 text-lg font-semibold">{name}</Text>
            <Text className="text-sm text-gray-500">{accountType}</Text>
        </View>
    </View>
);

export default ProfileCard;
