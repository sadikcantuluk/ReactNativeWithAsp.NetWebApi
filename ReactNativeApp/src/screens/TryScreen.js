import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGetAllCategoryQuery } from "../../apis/categoryApi";

export default function TryScreen() {
  const { data, isLoading } = useGetAllCategoryQuery(null);

  if (isLoading) {
    return <Text>Loading...</Text>;

    
  } else if (!isLoading) {
    console.log("Data");
    console.log(data);
  }

  return (
    <View>
      <Text>Başarılı</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
