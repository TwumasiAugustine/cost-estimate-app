import React from 'react';
import { View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function EstimateSummary({
  materials = 0,
  labor = 0,
}: {
  materials: number;
  labor: number;
}) {
  return (
    <View className="rounded-xl bg-[#f8ecd7] px-4 py-3 mb-4">
      <View className="flex-row justify-between mb-1">
        <Text className="text-[#8a6a2f]">Materials:</Text>
        <Text className="text-[#8a6a2f] font-semibold">${materials.toFixed(2)}</Text>
      </View>
      <View className="flex-row justify-between mb-1">
        <Text className="text-[#8a6a2f]">Labor:</Text>
        <Text className="text-[#8a6a2f] font-semibold">${labor.toFixed(2)}</Text>
      </View>
      <View className="flex-row justify-between border-t border-[#e7d7bc] pt-2 mt-1">
        <Text className="font-bold text-[#8a6a2f]">Total:</Text>
        <Text className="font-bold text-[#bfa054] text-lg">${(materials + labor).toFixed(2)}</Text>
      </View>
    </View>
  );
}

