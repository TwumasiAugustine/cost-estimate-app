import { View } from "react-native";
import { Button } from "../../components/Button";

export default function EstimateActions() {
  return (
    <View className="flex-row gap-3 mt-2">
      <Button
        title="Generate PDF"
        icon="document-outline"
        variant="secondary"
        className="flex-1 bg-[#bfa054]"
        textClassName="text-white"
        onPress={() => {alert('Generate PDF clicked!')}}
      />
      <Button
        title="Share"
        icon="share-social-outline"
        variant="outline"
        className="flex-1 border-[#bfa054] bg-white"
        textClassName="text-[#bfa054]"
        iconColor="#bfa054"
        onPress={() => {alert('Share pressed!')}}
      />
    </View>
  );
}
