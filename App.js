import React from "react";
import { StyleSheet, Text, View , FlatList} from "react-native";
import { Content, List, Container } from "native-base";
import CardList from "./components/CardList";
import Header1 from "./components/Header1";

export default function App() {
  console.disableYellowBox = true;
  return (
    <Container>
    <Header1/>
      <Content>
        <CardList/>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
