import { Text, View, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import EstimateCard from '../../components/ui/EstimateCard';
import SectionHeader from '../../components/ui/SectionHeader'

type Estimate = {
    id: string | number;
    clientName: string;
    cost: number;
    status: 'Completed' | 'In Progress' | 'Pending';
    createdAt?: string | number;
    items: { name: string; quantity: number; price: number }[];
    title: string;
};

export default function Index() {
    const router = useRouter();

    // Placeholder for estimates data
    const estimates: Estimate[] = [
        {
            id: 1,
            clientName: 'Client A',
            cost: 100,
            status: 'Completed',
            createdAt: '2023-01-01',
            items: [
                { name: 'Item 1', quantity: 2, price: 50 },
                { name: 'Item 2', quantity: 1, price: 50 },
            ],
            title: 'Estimate 1',
        },
        {
            id: 2,
            clientName: 'Client B',
            cost: 200,
            status: 'In Progress',
            createdAt: '2023-01-02',
            items: [
                { name: 'Item 3', quantity: 1, price: 200 },
            ],
            title: 'Estimate 2',
        },
        {
            id: 3,
            clientName: 'Client C',
            cost: 150,
            status: 'Pending',
            createdAt: '2023-01-03',
            items: [
                { name: 'Item 4', quantity: 3, price: 50 },
            ],
            title: 'Estimate 3',
        },
    ]; // Replace with actual data fetching logic

    return (
        <View className="bg-background m-4 flex-1">
            <SectionHeader
                title="Recent Estimates"
                actionLabel="New"
                labelClassName="bg-primary"
                iconClassName='text-primary'
                onAction={() => {
                    router.push('./settings'); // Navigate to settings or new estimate screen
                }}
            />

            <FlatList
                data={estimates}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <EstimateCard {...item} />}
                ListEmptyComponent={
                    <View className="mt-16 flex-1 items-center justify-center">
                        <Text className="mb-4 text-base text-gray-500">No estimates yet.</Text>
                    </View>
                }
                contentContainerStyle={estimates.length === 0 ? { flex: 1 } : undefined}
            />
        </View>
    );
}
