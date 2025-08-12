import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import ProfileCard from '../../components/ui/ProfileCard';
import InfoField from '../../components/ui/InfoField';
import SectionCard from '../../components/ui/SectionCard';
import SettingsSwitch from '../../components/ui/SettingsSwitch';
import SettingsInput from '../../components/ui/SettingsInput';
import AdminToolCard from '../../components/ui/AdminToolCard';
import {Button} from '../../components/Button';

export default function Settings() {
    // Demo state, replace with real data/hooks as needed
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [autoSave, setAutoSave] = useState(true);
    const [taxRate, setTaxRate] = useState('7.5');
    const [includeTax, setIncludeTax] = useState(false);

    return (
        <ScrollView
            className="bg-primary-25 flex-1 px-2 py-4"
            contentContainerStyle={{ paddingBottom: 32 }}>
            {/* Profile */}
            <ProfileCard name="johndoe" accountType="Premium Account" initials="JO" />

            {/* Business Info */}
            <SectionCard title="Business Information">
                <InfoField label="Business Name" value="Doe's Carpentry LLC" />
                <InfoField label="Address" value="123 Woodwork Lane, Craftsville" />
                <InfoField label="Phone" value="(555) 123-4567" />
                <InfoField label="Email" value="john@doescapentry.com" />
            </SectionCard>

            {/* App Settings */}
            <SectionCard title="App Settings">
                <SettingsSwitch
                    label="Notifications"
                    description="Receive estimate reminders"
                    value={notifications}
                    onValueChange={setNotifications}
                    color="#b7791f"
                />
                <SettingsSwitch
                    label="Dark Mode"
                    description="Use dark theme"
                    value={darkMode}
                    onValueChange={setDarkMode}
                    color="#b7791f"
                />
                <SettingsSwitch
                    label="Auto-save"
                    description="Save estimates automatically"
                    value={autoSave}
                    onValueChange={setAutoSave}
                    color="#b7791f"
                />
            </SectionCard>

            {/* Tax Settings */}
            <SectionCard title="Tax Settings">
                <SettingsInput
                    label="Tax Rate (%)"
                    value={taxRate}
                    onChangeText={setTaxRate}
                    keyboardType="decimal-pad"
                />
                <SettingsSwitch
                    label="Include tax in item prices"
                    value={includeTax}
                    onValueChange={setIncludeTax}
                    color="#b7791f"
                />
            </SectionCard>

            {/* Admin Tools */}
            <SectionCard title="Admin Tools">
                <AdminToolCard label="Manage Catalog Items" onPress={() => {}} />
            </SectionCard>

            {/* Save/Logout Buttons */}
            <View className="mb-4 mt-2">
                <Button title="Save Changes"  className="mb-3" onPress={() => {}} />
                <Button
                    title="Log Out"

                    textClassName="text-primary-700"
                    onPress={() => {}}
                />
            </View>
        </ScrollView>
    );
}
