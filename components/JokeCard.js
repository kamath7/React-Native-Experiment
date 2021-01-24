import React from "react";
import { Card, CardItem, Body, Text} from "native-base";
import {StyleSheet} from 'react-native';

const JokeCard = (props) => {
  return (
    <Card>
      <CardItem header>
        <Text style={styles.joke}>{props.joke}</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>{props.punchline}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};
const styles= StyleSheet.create({
  joke:{
    fontWeight:"bold",
    paddingTop: 12
  }
})
export default JokeCard;
