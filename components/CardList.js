import React, { useState, useEffect } from "react";
import { Content } from "native-base";
import JokeCard from "./JokeCard";
import { FlatList, SafeAreaView } from "react-native";
import axios from "axios";

const CardList = () => {
  const [listofjokes, setListofJokes] = useState([]);

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/dadjokes/.json`).then((response) => {
      let data = response.data.data.children;
      let newData = data.map((d) => {
        return {
          id: d.data.name,
          joke: d.data.title,
          punchline: d.data.selftext,
        };
      });

      setListofJokes((jokes) => jokes.concat(newData));
    });

    return () => {
      console.log("Stopped!");
    };
  }, []);
  return (
    <Content>
      <SafeAreaView>
        <FlatList
          data={listofjokes}
          keyExtractor={(item) => item.id + Math.random() * listofjokes.length}
          renderItem={({ item }) => (
            <JokeCard joke={item.joke} punchline={item.punchline} />
          )}
        />
      </SafeAreaView>
    </Content>
  );
};

export default CardList;
// const listofjokes = [
//   {
//     id: 1,
//     joke: "Why are 0 and 1 the only numbers with genders?",
//     punchline: "All the others are non-binary",
//   },
//   {
//     id: 2,
//     joke: "Why are 0 and 1 the only numbers with genders?",
//     punchline: "All the others are non-binary",
//   },
//   {
//     id: 3,
//     joke: "Why are 0 and 1 the only numbers with genders?",
//     punchline: "All the others are non-binary",
//   },
//   {
//     id: 4,
//     joke: "Why are 0 and 1 the only numbers with genders?",
//     punchline: "All the others are non-binary",
//   },
//   {
//     id: 5,
//     joke: "Why are 0 and 1 the only numbers with genders?",
//     punchline: "All the others are non-binary",
//   },
//   {
//     id: 6,
//     joke: "Why are 0 and 1 the only numbers with genders?",
//     punchline: "All the others are non-binary",
//   },
//   {
//     id: 7,
//     joke: "Why are 0 and 1 the only numbers with genders?",
//     punchline: "All the others are non-binary",
//   },
//   {
//     id: 8,
//     joke: "Why are 0 and 1 the only numbers with genders?",
//     punchline: "All the others are non-binary",
//   },
//   {
//     id: 9,
//     joke: "Why are 0 and 1 the only numbers with genders?",
//     punchline: "All the others are non-binary",
//   },
//   {
//     id: 10,
//     joke: "Why are 0 and 1 the only numbers with genders?",
//     punchline: "All the others are non-binary",
//   },
//   {
//     id: 11,
//     joke: "Why are 0 and 1 the only numbers with genders?",
//     punchline: "All the others are non-binary",
//   },
// ];
