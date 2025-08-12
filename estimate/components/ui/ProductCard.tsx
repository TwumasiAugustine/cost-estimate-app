import React from 'react';
import { View, Text,  TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ProductCardProps {
    id?: number | string;
    name: string;
    price: number;
    unit: string;
    image: any; // Replace with appropriate type for image source
}

export default function ProductCard({ id, name, price, unit, image }: ProductCardProps) {
    const [qty, setQty] = React.useState(0);
    return (
        <View className="m-2 min-w-[160px] max-w-[200px] flex-1 rounded-2xl border border-gray-100 bg-white p-3 shadow">
            <Image
                source={image}
                className="mb-2 h-24 w-full rounded-xl bg-gray-100"
                resizeMode="cover"
            />
            <Text className="mb-1 font-semibold text-gray-800" numberOfLines={1}>
                {name}
            </Text>
            <Text className="mb-2 text-gray-500">{price > 0 ? `₵${price} ${unit}` : unit}</Text>
            <View className="flex-row items-center justify-between">
                <TouchableOpacity onPress={() => setQty(Math.max(0, qty - 1))} className="p-1">
                    <Ionicons name="remove-circle-outline" size={22} color="#8a6a2f" />
                </TouchableOpacity>
                <Text className="font-semibold text-gray-700">{qty}</Text>
                <TouchableOpacity onPress={() => setQty(qty + 1)} className="p-1">
                    <Ionicons name="add-circle" size={22} color="#8a6a2f" />
                </TouchableOpacity>
                <TouchableOpacity className="ml-2 p-1">
                    <Ionicons name="heart-outline" size={20} color="#8a6a2f" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
