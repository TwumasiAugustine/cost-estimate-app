import React, { useState, useRef } from 'react';
import { View, TextInput, ScrollView,  Platform } from 'react-native';
import EmptyCard from '../../components/ui/EmptyCard';
import EstimateActions from '../../components/ui/EstimateActions';
import SectionHeader from '../../components/ui/SectionHeader';
import NotesBox from '../../components/ui/NotesBox';
import EstimateSummary from '../../components/ui/EstimateSummary';

export default function Estimate() {
    const [clientName, setClientName] = useState('');
    const [projectName, setProjectName] = useState('');
    const [notes, setNotes] = useState('');
    const scrollRef = useRef<ScrollView>(null);

    // Placeholder values
    const materials = 0;
    const labor = 0;

    // Scroll to NotesBox when focused
    const handleNotesFocus = () => {
        setTimeout(() => {
            scrollRef.current?.scrollToEnd({ animated: true });
        }, 200);
    };

    return (
        <ScrollView
            ref={scrollRef}
            className="bg-background flex-1 px-4 pt-4"
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingBottom: Platform.OS === 'ios' ? 32 : 100 }}>
            {/* Header */}
            <SectionHeader
                title="New Estimate"
                actionLabel="Save"
                labelClassName="bg-primary rounded-md px-3 py-2"
                iconClassName="text-gray-100"
                onAction={() => {
                    alert('Save button clicked!');
                }}
            />
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
            <SectionHeader title="Materials" actionLabel="Add Item" onAction={() => {
                alert('Add Item clicked');
            }} />
            <EmptyCard
                message="No materials added yet"
                actionLabel="Browse Catalog"
                onAction={() => {}}
            />

            {/* Labor Section */}
            <SectionHeader title="Workmanship" actionLabel="Add Workmanship" labelClassName="text-primary"  onAction={() => {
              alert('Add Workmanship clicked');
            }} />
            <EmptyCard message="No workmanship costs added yet" />

            {/* Notes */}
            <NotesBox value={notes} onChange={setNotes} onFocus={handleNotesFocus} />

            {/* Actions */}
            <EstimateActions />
        </ScrollView>
    );
}
