import React from 'react';
import { View, Text} from 'react-native';

export default function EstimateSummary({
  materials = 0,
  labor = 0,
}: {
  materials: number;
  labor: number;
}) {
  return (
    <View className="rounded-xl bg-border px-4 py-3 mb-4">
      <View className="flex-row justify-between mb-1">
        <Text className="text-primary">Materials:</Text>
        <Text className="text-primary font-semibold">₵{materials.toFixed(2)}</Text>
      </View>
      <View className="flex-row justify-between mb-1">
        <Text className="text-primary">Workmanship:</Text>
        <Text className="text-primary font-semibold">₵{labor.toFixed(2)}</Text>
      </View>
      <View className="flex-row justify-between border-t border-border pt-2 mt-1">
        <Text className="font-bold text-primary">Total:</Text>
        <Text className="font-bold text-secondary text-lg">₵{(materials + labor).toFixed(2)}</Text>
      </View>
    </View>
  );
}

