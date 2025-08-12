import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

export default function NotesBox({
    value,
    onChange,
    onFocus,
}: {
    value: string;
    onChange: (v: string) => void;
    onFocus?: () => void;
}) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={100}
            enabled>
            <View className="mb-4">
                <Text className="text-primary mb-2 text-base font-bold">Notes</Text>
                <TextInput
                    className="border-border bg-background-card min-h-[64px] rounded-xl border px-3 py-2 text-gray-700"
                    placeholder="Add notes for this estimate..."
                    placeholderTextColor="#bfa054"
                    multiline
                    value={value}
                    onChangeText={onChange}
                    accessibilityLabel="Add notes for this estimate"
                    onFocus={onFocus}
                />
            </View>
        </KeyboardAvoidingView>
    );
}
