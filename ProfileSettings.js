import { Avatar, Button, Card, Checkbox, Switch } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Drawer,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import bussnessServices from "./Services/services/bussnessuser";

export default function ProfileSettings() {
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [name, setName] = React.useState();
  const [about, setAbout] = React.useState();
  const [bussnessstatus, setbussnessStatus] = React.useState(
  );
  const [address, setAddress] = React.useState();
  const [profile,setProfile]=React.useState({})
  const [user,setUser]=React.useState({})
  const category = [
    "Beauty Service",
    "Skin Treatment",
    "Hair Treatment",
    "Salon Product",
    "Other",
  ];
  const paymentpercent = [
    "Full Payment",
    "50% Advance Payment",
    "25% Advance Payment",
    "Add custom payment%",
  ];
  const move = () => {
    navigation.navigate("BusinessLogin");
  };
React.useEffect(()=>{
    userData();
},[])
const aC = () => {
    bussnessServices
      .updateUsers(profile._id, {
        address,
        bussnessname: name,

        accountNo:"no",

        bussnessstatus: bussnessstatus,

        about: about,
      })

      .then(async() => {
        const userInfos=await AsyncStorage.setItem("userinfo",JSON.stringify({
           ...profile,
            address,
            bussnessname: name,
            accountNo,
            bussnessstatus,
            about,
          }));
   
     
        alert("Profile  updated");
      });
  };
const userData=async ()=>{
    const userInfos=await AsyncStorage.getItem("userinfo");
    const user=await AsyncStorage.getItem("user");
    setProfile(JSON.parse(userInfos));
    const userInfo=JSON.parse(userInfos);
    setName(userInfo.bussnessname)
    setAbout(userInfo.about)
    setbussnessStatus(userInfo.bussnessstatus);
    setAddress(userInfo.address);
    setUser(JSON.parse(user));

}
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
            marginTop: "70px",
            marginBottom: "70px",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "24px",
            }}
          >
            Profile Settings
          </Text>
          <TextInput
            placeholder="companyname"
            value={name}
            onChangeText={(text)=>setName(text)}
            style={styles.Textfields}
          ></TextInput>
          <TextInput
          
          value={address}
          onChangeText={(text)=>setAddress(text)}
            placeholder="Location/Address"
            style={styles.Textfields}
          ></TextInput>
          <TextInput placeholder="email"   editable = {false}  value={user.email} style={styles.Textfields}></TextInput>
          <TextInput
              
                readOnly
                value={profile?.categoryId?.name}
                editable={false}
            placeholder="Category Name"
            style={styles.Textfields}
          ></TextInput>
          <TextInput     onChangeText={(text)=>setbussnessStatus(text)}  value={bussnessstatus} placeholder="status" style={styles.Textfields}></TextInput>
          <TextInput    value={user.name} placeholder="name"    editable = {false} style={styles.Textfields}></TextInput>
          <TextInput
                value={about}
            placeholder="about"
            onChangeText={(text)=>setAbout(text)}
            style={styles.AboutTextfield}
          ></TextInput>
          <View></View>

          <Button
            style={{ marginBottom: "20px", backgroundColor: "#FF69B4" }}
            mode="contained"
            onPress={() => aC()}
          >
            Submit
          </Button>
        </Card>
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
