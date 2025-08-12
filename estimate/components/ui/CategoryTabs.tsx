import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { twMerge } from 'tailwind-merge';

const TAB_MARGIN = 4;
const TAB_HEIGHT = 40;

export interface CategoryTabsProps {
    selected: string;
    onSelect: (cat: string) => void;
    categories?: string[];
}

export default function CategoryTabs({ selected, onSelect, categories = [] }: CategoryTabsProps) {
    // Prevent error if categories is undefined
    const TAB_COUNT = categories.length;
    const SCREEN_WIDTH = Dimensions.get('window').width;
    const TAB_WIDTH =
        TAB_COUNT > 0
            ? Math.max(100, (SCREEN_WIDTH - TAB_MARGIN * (TAB_COUNT + 1)) / TAB_COUNT)
            : 100;

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: TAB_MARGIN }}>
            <View className="flex-row mt-4 mx-2">
                {categories.length === 0 ? (
                    <Text className="flex items-center justify-center text-center text-gray-400">
                        No categories
                    </Text>
                ) : (
                    categories.map((cat) => (
                        <TouchableOpacity
                            key={cat}
                            style={{
                                width: TAB_WIDTH,
                                height: TAB_HEIGHT,
                                marginRight: TAB_MARGIN,
                            }}
                            className={twMerge(
                                'items-center justify-center rounded-full border border-secondary p-2',
                                selected === cat
                                    ? 'border-secondary bg-white'
                                    : 'border-gray-200 bg-white'
                            )}
                            onPress={() => onSelect(cat)}
                            activeOpacity={0.8}>
                            <Text
                                className={twMerge(
                                    'text-center font-semibold',
                                    selected === cat ? 'text-primary' : 'text-gray-700'
                                )}
                                numberOfLines={1}
                                ellipsizeMode="tail">
                                {cat}
                            </Text>
                        </TouchableOpacity>
                    ))
                )}
            </View>
        </ScrollView>
    );
}
