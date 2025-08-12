import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../Button';
import { twMerge } from 'tailwind-merge';

interface EstimateCardProps {
    id: string | number;
    clientName: string;
    cost: number;
    status: 'Completed' | 'In Progress' | 'Pending';
    createdAt?: string | number;
    items: { name: string; quantity: number; price: number }[];
    title: string;
}

const statusStyles: Record<EstimateCardProps['status'], string> = {
    Completed: 'bg-green-100 text-green-600 border border-green-300',
    'In Progress': 'bg-yellow-100 text-yellow-600 border border-yellow-300',
    Pending: 'bg-red-100 text-red-600 border border-red-300',
};

const EstimateCard: React.FC<EstimateCardProps> = ({
    clientName,
    cost,
    status,
    createdAt,
    items,
    title,
}) => {
    return (
        <View
            className={twMerge(
                // Responsive padding, shadow, rounded, border, white bg
                'mb-4 rounded-2xl border border-gray-200 bg-white shadow-sm px-4 py-5',
                'sm:px-6 sm:py-6',
                'md:px-8 md:py-7'
            )}
            style={{
                // Subtle elevation for Android
                elevation: 3,
            }}
        >
            <View className="mb-2 flex-row items-center justify-between">
                <Text className="text-lg font-bold text-primary max-w-[60%]" numberOfLines={1}>
                    {title}
                </Text>
                <Text className="text-lg font-bold text-primary">₵{cost.toLocaleString()}</Text>
            </View>
            <View className="mb-1 flex-row items-center justify-between">
                <Text className="text-sm text-gray-700" numberOfLines={1}>
                    <Text className="font-semibold">Client:</Text> {clientName}
                </Text>
                <Text className="text-xs text-gray-400">
                    {items.length} {items.length > 1 ? 'items' : 'item'}
                </Text>
            </View>
            <View className="mb-3 flex-row items-center gap-2">
                <Text
                    className={twMerge(
                        'rounded-full px-2 py-0.5 text-xs font-semibold',
                        statusStyles[status]
                    )}
                    accessibilityRole="text"
                >
                    {status}
                </Text>
                <Text className="text-xs text-gray-400">
                    <Text className="font-semibold">Created:</Text>{' '}
                    {createdAt ? new Date(createdAt).toLocaleDateString() : '--'}
                </Text>
            </View>
            <View className="mt-3 flex-row gap-2">
                <Button
                    title="Edit"
                    icon="create-outline"
                    iconPosition="left"
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onPress={() => alert('Edit button clicked!')}
                    accessibilityLabel="Edit estimate"
                />
                <Button
                    title="Export"
                    icon="document-text-outline"
                    iconPosition="left"
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onPress={() => alert('Export button clicked!')}
                    accessibilityLabel="Export estimate"
                />
                <Button
                    title="Share"
                    icon="share-social-outline"
                    iconPosition="left"
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onPress={() => alert('Share button clicked!')}
                    accessibilityLabel="Share estimate"
                />
            </View>
        </View>
    );
};

export default EstimateCard;
