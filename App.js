import { StatusBar } from "react-native";
import React from "react";
import { StyleSheet, SafeAreaView, Text, View, Platform } from "react-native";

export default function App() {
  return(
    <>
      <SafeAreaView style={{flex:1, backgroundColor:"yellow"}}>
        <View style={{padding: 16, backgroundColor: "green"}}>
          <Text>search</Text>
        </View>
        <View style={{flex: 1, padding: 16, backgroundColor: "orange"}}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto"/>

    </>
  
  )
}