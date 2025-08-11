import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function NotesBox({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    return (
        <View className="mb-4">
            <Text className="mb-2 text-base font-bold text-[#8a6a2f]">Notes</Text>
            <TextInput
                className="min-h-[64px] rounded-xl border border-[#e7d7bc] bg-white px-3 py-2 text-gray-700"
                placeholder="Add notes for this estimate..."
                placeholderTextColor="#bfa054"
                multiline
                value={value}
                onChangeText={onChange}
                accessibilityLabel="Add notes for this estimate"
            />
        </View>
    );
}
