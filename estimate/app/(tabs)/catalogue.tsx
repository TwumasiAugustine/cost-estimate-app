import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CategoryTabs from '../../components/ui/CategoryTabs';
import ProductCard from '../../components/ui/ProductCard';

const categories = ['Wood Materials', 'Hardware', 'Finishing', 'Tools'];

const products = [
    {
        id: 1,
        name: 'Oak Hardwood',
        price: 45.99,
        unit: '/ board',
        image: require('../../assets/images/partial-react-logo.png'),
        category: 'Wood Materials',
    },
    {
        id: 2,
        name: 'Pine Lumber (2x4)',
        price: 12.49,
        unit: '/ board',
        image: require('../../assets/images/react-logo.png'),
        category: 'Wood Materials',
    },
    {
        id: 3,
        name: 'Maple Veneer',
        price: 0,
        unit: '',
        image: require('../../assets/images/react-logo.png'),
        category: 'Wood Materials',
    },
];




export default function Catalogue() {
    const [selectedCat, setSelectedCat] = React.useState(categories[0]);
    const [search, setSearch] = React.useState('');

    return (
        <View className="flex-1 bg-[#f8f6f2]">
            <View className="flex-row items-center px-4 pb-2 pt-4">
                <View className="mr-2 flex-1 flex-row items-center rounded-xl border border-gray-200 bg-white px-3 py-2">
                    <Ionicons name="search" size={18} color="#ff6347" />
                    <TextInput
                        placeholder="Search items..."
                        value={search}
                        onChangeText={setSearch}
                        className="ml-2 flex-1 text-gray-700"
                        placeholderTextColor="#ff6347"
                        accessibilityLabel="Search items"
                    />
                </View>
                <TouchableOpacity className="rounded-xl border border-[#ff6347] bg-white p-2">
                    <Ionicons name="filter" size={22} color="#ff6347" />
                </TouchableOpacity>
            </View>
            <CategoryTabs selected={selectedCat} onSelect={setSelectedCat} />
            <View className="mx-4 mb-2 h-1 w-24 rounded-full bg-[#ff6347]" />
            <FlatList
                data={products.filter((p) => p.category === selectedCat)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ProductCard {...item} />}
                numColumns={2}
                contentContainerStyle={{ paddingBottom: 24, paddingHorizontal: 4 }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <Text className="mt-8 text-center text-gray-400">No items found.</Text>
                }
            />
        </View>
    );
}
