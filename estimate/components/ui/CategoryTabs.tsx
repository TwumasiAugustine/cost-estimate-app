import React from 'react';
import { View, Text,  TouchableOpacity } from 'react-native';
import { twMerge } from 'tailwind-merge';

const categories = ['Wood Materials', 'Hardware', 'Finishing', 'Tools'];
export default function CategoryTabs({
    selected,
    onSelect,

}: {
    selected: string;
    onSelect: (cat: string) => void;
}) {
    return (
        <View className="mb-2 flex-row px-2">
            {categories.map((cat) => (
                <TouchableOpacity
                    key={cat}
                    className={twMerge(
                        'mr-2 rounded-full border-tertiary px-4 py-2',
                        selected === cat
                            ? 'border-tertiary bg-white text-primary'
                            : 'border-gray-200 bg-white'
                    )}
                    onPress={() => onSelect(cat)}>
                    <Text
                        className={twMerge(
                            'font-semibold',
                            selected === cat ? 'text-primary' : 'text-gray-700'
                        )}>
                        {cat}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}
