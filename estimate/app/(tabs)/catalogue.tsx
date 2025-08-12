import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CategoryTabs from '../../components/ui/CategoryTabs';
import ProductCard from '../../components/ui/ProductCard';
import SectionHeader from '../../components/ui/SectionHeader';

const categories = ['Wood', 'Hardware', 'Finishing', 'Tools', 'Electrical', 'Plumbing'];

const products = [
    {
        id: 1,
        name: 'Oak Hardwood',
        price: 45.99,
        unit: '/ board',
        image: require('../../assets/images/partial-react-logo.png'),
        category: 'Wood',
    },
    {
        id: 2,
        name: 'Pine Lumber (2x4)',
        price: 12.49,
        unit: '/ board',
        image: require('../../assets/images/react-logo.png'),
        category: 'Wood',
    },
    {
        id: 3,
        name: 'Maple Veneer',
        price: 0,
        unit: '',
        image: require('../../assets/images/react-logo.png'),
        category: 'Wood',
    },
    {
        id: 4,
        name: 'Stainless Steel Screws',
        price: 5.99,
        unit: '/ pack',
        image: require('../../assets/images/react-logo.png'),
        category: 'Hardware',
    },
    {
        id: 5,
        name: 'Brass Hinges',
        price: 3.49,
        unit: '/ piece',
        image: require('../../assets/images/react-logo.png'),
        category: 'Hardware',
    },
    {
        id: 6,
        name: 'Paint Primer',
        price: 19.99,
        unit: '/ gallon',
        image: require('../../assets/images/react-logo.png'),
        category: 'Finishing',
    },
    {
        id: 7,
        name: 'Electric Drill',
        price: 89.99,
        unit: '',
        image: require('../../assets/images/react-logo.png'),
        category: 'Tools',
    },
    {
        id: 8,
        name: 'Cordless Screwdriver',
        price: 29.99,
        unit: '',
        image: require('../../assets/images/react-logo.png'),
        category: 'Tools',
    },
];

export default function Catalogue() {
    const [selectedCat, setSelectedCat] = React.useState(categories[0]);
    const [search, setSearch] = React.useState('');

    return (
        <View className="flex-1 bg-background px-2 pt-4">
            <SectionHeader
                title="Material Catalogue"
                actionLabel="New"
                labelClassName="bg-primary rounded-md px-3 py-2"
                iconClassName="text-gray-100"
                onAction={() => {
                    alert('New button clicked!');
                }}
            />
            <View className="flex-row items-center px-2">
                <View className="mr-2 flex-1 flex-row items-center rounded-xl border border-border bg-white px-3 py-2">
                    <Ionicons name="search" size={18} color="#bfa054" />
                    <TextInput
                        placeholder="Search items..."
                        value={search}
                        onChangeText={setSearch}
                        className="ml-2 flex-1 text-gray-700"
                        placeholderTextColor="#bfa054"
                        accessibilityLabel="Search items"
                    />
                </View>
                <TouchableOpacity className="rounded-xl border border-primary bg-white p-2">
                    <Ionicons name="filter" size={22} color="#bfa054" />
                </TouchableOpacity>
            </View>
            <CategoryTabs
                categories={categories}
                selected={selectedCat}
                onSelect={setSelectedCat}
            />
            <View className="mx-2 mb-2 h-1 w-24 bg-primary" />
            <FlatList
                data={products.filter((p) => p.category === selectedCat)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ProductCard {...item} />}
                numColumns={2}
                contentContainerStyle={{ paddingBottom: 24, paddingHorizontal: 2 }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <Text className="mt-8 text-center text-gray-400">No items found.</Text>
                }
            />
        </View>
    );
}
