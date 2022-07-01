import { Avatar, Button, Card, Title, RadioButton } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import quizAnswer from "./Services/services/quizAnswer";
import quizs from "./Services/services/quiz";
import beautyService from "./Services/services/Servicesbeauty";

export default function PalmistQuiz({ route }) {
  const [value, setValue] = React.useState("first");
  const val = route.params.val;
  console.log(val);
  const [ans, setAns] = React.useState([]);

  const [quiz, setQuiz] = React.useState([]);
  const [loading, setloading] = React.useState(false);

  React.useEffect(() => {
  

    getcate();
     

    // byCategory
  }, []);
  const getcate = async () => {
    try {
      setloading(true);
      let result = await quizs.getQuiz(val._id);
      console.log(result);
      setQuiz(result.quiz);
      setloading(false);
    } catch (e) {
      alert(e.error);
      setloading(false);
    }
  };
  const navigation = useNavigation();

  const move = () => {
    navigation.navigate("ServiceListings",{ans,check:true,val:route.params.val});
  };
  const save = (name, value) => {
    if (ans.findIndex((val) => val.name === name) === -1) {
      setAns([...ans, { [name]: value, name: name, answer: value }]);
    } else {
      setAns(
        ans.map((valu) =>
          valu.name == name ? { ...valu, [name]: value, answer: value } : valu
        )
      );
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          backgroundColor: "#ffe4e4",
        }}
      >
        <ImageBackground
          source={
            "https://static.wixstatic.com/media/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg/v1/fill/w_980,h_206,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg"
          }
          style={{
            width: "100%",
            height: "80px",
            margin: "30px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                backgroundColor: "white",
                padding: "10px",
              }}
            >
              Palmist Quiz
            </Text>
          </View>
        </ImageBackground>
        <Card
          style={{
            padding: "40px",
            borderRadius: "20px",
            width: "90%",
            marginBottom: "30px",
          }}
        >
          {quiz.map((value, index) => (
            <View>
              <Text
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >
                {value.Question}
              </Text>
              <RadioButton.Group
              value={ans.length<1?value.Answer1:ans.find((val)=>val.name==value.Question).answer }
              onValueChange={newValue => save(value.Question, newValue)}
                
              
                style={{ marginBottom: "20px" }}
              >
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <RadioButton
                    value={value.Answer1}
                
                  />
                  <Text style={{ fontSize: "20px" }}> {value.Answer1}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <RadioButton
                    value={value.Answer2}
                   
                  />
                  <Text style={{ fontSize: "20px" }}> {value.Answer2}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <RadioButton
                    value={value.Answer3}
                 
                  />
                  <Text style={{ fontSize: "20px" }}> {value.Answer3}</Text>
                </View>
              </RadioButton.Group>
            </View>
          ))}

          <Button
            mode="contained"
            style={{ marginTop: "20px", backgroundColor: "#FF69B4" }}
            onPress={() => move()}
          >
            View Recommendations
          </Button>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  socialbuttonfb: {
    borderRadius: "20px",
    backgroundColor: "#4267B2",
    marginBottom: "20px",
  },
  socialbuttontw: {
    borderRadius: "20px",
    backgroundColor: "#1DA1F2",
    marginBottom: "20px",
  },
  Textfields: {
    borderRadius: "20px",
    borderColor: "grey",
    padding: "10px",
    marginBottom: "20px",
  },
});
