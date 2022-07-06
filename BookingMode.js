import { Card, Switch,Button } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaViewBase,
  SafeAreaView,
  
} from "react-native";
import * as React from "react";
import bussnessServices from "./Services/services/bussnessuser";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Bookingmode() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [isSwitchOns, setIsSwitchOns] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleSwitchs = () => setIsSwitchOns(!isSwitchOns);
  const [lMode, setLMode] = React.useState(false);
  const [mMode, setmMode] = React.useState(true);
  const [website, setWebsite] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [mode, setmode] = React.useState({});
  const [active, setActive] = React.useState(false);

  setNumber
  setWebsite
  React.useEffect(() => {
    fetch();
  }, []);
  React.useEffect(() => {
    console.log(state.val.userid,22);
    bussnessServices.viewMode(state.val?.userid._id).then((value) => {
    
      setmode(value.mode);
    })
  }, []);
  const next=()=>{
    window.location.href =mode.WhatsApp? "http://api.whatsapp.com/send?phone="+mode.WhatsApp:'https://'+mode.Website;
  }
  const fetch = async () => {
    const users= await AsyncStorage.getItem("user");
    const user=JSON.parse(users);
    bussnessServices.viewMode(user.id).then((value) => {
    
      setActive(value.mode?.UserId ? true : false);
      setIsSwitchOns(value.mode?.LinkBased);
      setWebsite(value.mode?.Website);
      setNumber(value.mode?.WhatsApp);
      setIsSwitchOn(value.mode?.ManualBased);
      console.log(2);
    });
  };
  const modeUpdate =async() => {
    const users = await AsyncStorage.getItem("user");
    const user=JSON.parse(users);
    if (!active) {
      bussnessServices
        .createMode({
          LinkBased: isSwitchOns ? "active" : "",
          ManualBased: isSwitchOn ? "active" : "",
          Website: website,

          WhatsApp: number,
          UserId: user.id,
    
        })
        .then((val) => {
          alert("Mode is Updated");
        });
    } else {
      bussnessServices
        .updateModes({
          LinkBased: isSwitchOns ? "active" : "",
          ManualBased: isSwitchOn ? "active" : "",
          Website: website,

          WhatsApp: number,

          UserId: user.id,
        })
        .then((val) => {
         alert("Mode is Updated");
        });
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
        <Card
          style={{
            padding: "40px",
            borderRadius: "20px",
            width: "90%",
            marginBottom: "30px",
            marginTop: "30px",
          }}
        >
          <Card
            style={{
              padding: "40px",
              borderRadius: "20px",
              width: "100%",
              backgroundColor: "#f8ecec",
              marginBottom: "30px",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                Link Based Booking
              </Text>
              <Switch value={isSwitchOns} onValueChange={onToggleSwitchs} />
            </View>
            <Text style={{ marginTop: "20px", marginBottom: "20px" }}>
              This mode allows you to take booking through your website or
              whatsapp
            </Text>
            <TextInput
              placeholder="Add Website Link"
              style={styles.Textfields}
              value={website}
              editable = {!number}
              onChangeText={(text)=>{setWebsite(text)}}
            ></TextInput>
            <TextInput
              placeholder="Add WhatsApp Contact"
              style={styles.Textfields}
              editable = {!website}
              value={number}
              onChangeText={(text)=>{setNumber(text)}}
            ></TextInput>
          </Card>
          <Card
            style={{
              padding: "40px",
              borderRadius: "20px",
              width: "100%",
              backgroundColor: "#f8ecec",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                Manual Slot Input
              </Text>
              <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            </View>
            <Text style={{ marginTop: "20px" }}>
              This Mode allows you to take bookings by taking requested date and
              time slots from clients. You may accept or reject the booking
              request as per availability. In case of Approval the booking
              confirmation will be pending until payment step is completed by
              client. To Reject a request you must state the reason and an
              alternate time slot (if available).
            </Text>
          </Card>
        </Card>
        
        <Button
        color="grey"
          disabled={(lMode && !website && !number) || (!lMode && !mMode)}
          style={{ marginTop: "20px" }}
          onPress={() => modeUpdate()}
        >
          Update
        </Button>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  Textfields: {
    borderRadius: "20px",
    borderColor: "grey",
    padding: "10px",
    marginBottom: "20px",
  },
  AboutTextfield: {
    height: "200px",
    borderRadius: "20px",
    borderColor: "grey",
    padding: "10px",
    marginBottom: "20px",
  },
});
