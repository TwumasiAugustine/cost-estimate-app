import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EmptyCard from '../../components/ui/EmptyCard';
import EstimateActions from '../../components/ui/EstimateActions';
import SectionHeader from '../../components/ui/SectionHeader';
import NotesBox from '../../components/ui/NotesBox';
import EstimateSummary from '../../components/ui/EstimateSummary';

export default function Estimate() {
    const [clientName, setClientName] = useState('');
    const [projectName, setProjectName] = useState('');
    const [notes, setNotes] = useState('');

    // Placeholder values
    const materials = 0;
    const labor = 0;

    return (
        <ScrollView className="bg-background flex-1 px-4 pt-4" keyboardShouldPersistTaps="handled">
            {/* Header */}
            <View className="mb-4 flex-row items-center justify-between">
                <Text className="text-primary text-xl font-bold">New Estimate</Text>
                <TouchableOpacity className="flex-row items-center">
                    <Ionicons name="save-outline" size={22} color="#bfa054" />
                    <Text className="text-secondary ml-1 font-semibold">Save</Text>
                </TouchableOpacity>
            </View>

            {/* Client/Project Inputs */}
            <View className="mb-4 flex-row gap-3">
                <TextInput
                    className="border-border bg-background-card flex-1 rounded-xl border px-3 py-2 text-gray-700"
                    placeholder="Client Name"
                    placeholderTextColor="#bfa054"
                    value={clientName}
                    onChangeText={setClientName}
                    accessibilityLabel="Client Name"
                />
                <TextInput
                    className="border-border bg-background-card flex-1 rounded-xl border px-3 py-2 text-gray-700"
                    placeholder="Project Name"
                    placeholderTextColor="#bfa054"
                    value={projectName}
                    onChangeText={setProjectName}
                    accessibilityLabel="Project Name"
                />
            </View>

            {/* Estimate Summary */}
            <EstimateSummary materials={materials} labor={labor} />

            {/* Materials Section */}
            <SectionHeader title="Materials" actionLabel="Add Item" onAction={() => {}} />
            <EmptyCard
                message="No materials added yet"
                actionLabel="Browse Catalog"
                onAction={() => {}}
            />

            {/* Labor Section */}
            <SectionHeader title="Labor" actionLabel="Add Labor" onAction={() => {}} />
            <EmptyCard message="No labor costs added yet" />

            {/* Notes */}
            <NotesBox value={notes} onChange={setNotes} />

            {/* Actions */}
            <EstimateActions />
        </ScrollView>
    );
}
