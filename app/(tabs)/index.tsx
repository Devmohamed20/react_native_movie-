import React from "react";
import { Text, View } from "react-native";

const index = () => {
  return (
    <View className="h-10 w-20 border border-black ml-5 overflow-hidden">
      <Text>
        This is a lot of text that will definitely not fit inside the small
        container. As you can see, it just keeps going and going, overflowing
        outside the box&apos;s boundaries.
      </Text>
    </View>
  );
};

export default index;
