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

export default function CProfile({route}) {
  const navigation = useNavigation();
  

const val=route.params.val;
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
            Profile
          </Text>
          <Text
       
            style={styles.Textfields}
          >Id:{val._id}</Text>
      
      <Text
       
            style={styles.Textfields}
          >Bussness Name:{val.BussnesId.bussnessname}</Text>
          <Text
       
       style={styles.Textfields}
     >Email:{val.userid.email}</Text>
     <Text
       
       style={styles.Textfields}
     >Phone:{val.userid.phoneNo}</Text>
     <Text
       
       style={styles.Textfields}
     >address:{val.BussnesId.address}</Text>
     <Text
       
       style={styles.Textfields}
     >bussnessstatus:{val.BussnesId.bussnessstatus}</Text>
     <Text
       
       style={styles.Textfields}
     >About:{val.BussnesId.about}</Text>
        
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
