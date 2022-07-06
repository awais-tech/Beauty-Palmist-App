import { Button, Card } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import bussnessServices from "./Services/services/bussnessuser";
import UerServices from "./Services/services/UserServices";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

export default function BusinessLogin() {
  const navigation = useNavigation();

  const move = () => {
    navigation.navigate("Business Dashboard");
  };
  const moves = () => {
    navigation.navigate("BusinessSignup");
  };
  const handleFormSubmit = async (values, { setSubmitting }) => {
    try {
      const data = await UerServices.login(values.email, values.password);
    if(data.active != false){
        if (data.status == 0) {
          bussnessServices.getBussness(data.id).then(async (value) => {
            alert(data.message);
            await AsyncStorage.setItem("Token", data.token);
            const user = JSON.stringify(data);
            const userinfo = JSON.stringify(value.bussness);
            await AsyncStorage.setItem("user", user);
            await AsyncStorage.setItem("userinfo", userinfo);
            navigation.navigate("Business Dashboard");
            
          });
        } 
        else if (data.status == 0) {
         
          alert(
            "Your Application is Not Apporved Yet or You are not Registered as A bussnessUser"
          );
        } else {
       
          alert("Your Application is disapproved Please Contact Admin ");
        }
      }
  
        else {
        
          alert("Your Application is disapproved Please Contact Admin ");
        }
      
    } catch (e) {
      alert(e.error);
    }
  };
  return (
    <ImageBackground
      source={
        "https://static.wixstatic.com/media/11062b_f68602886d71455a85a9705d586b75a0~mv2.jpg/v1/fill/w_1349,h_622,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_f68602886d71455a85a9705d586b75a0~mv2.jpg"
      }
      style={{ width: "100%", height: "100%" }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Card style={{ padding: "40px", borderRadius: "20px", width: "90%" }}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "24px",
            }}
          >
            Business Login
          </Text>
          <Formik
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Invalid email address format")
                .required("Email is required"),
              password: Yup.string().required("Password is required"),
            })}
            onSubmit={handleFormSubmit}
            initialValues={{
              email: "test456@gmail.com",
              password: "test123@A",
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  placeholder="Username"
                  style={styles.Textfields}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                ></TextInput>
                <TextInput
                  placeholder="Password"
                  style={styles.Textfields}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                ></TextInput>
                <Button
                  style={{ marginBottom: "20px", backgroundColor: "#FF69B4" }}
                  mode="contained"
                  onPress={() => handleSubmit()}
                >
                  Login
                </Button>
                <Text style={{ textAlign: "center", marginBottom: "10px" }}>
                  Don't have an account?
                </Text>
                <Button color="grey" onPress={() => moves()}>
                  Sign Up
                </Button>
              </View>
            )}
          </Formik>
        </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Textfields: {
    borderRadius: "20px",
    borderColor: "grey",
    padding: "10px",
    marginBottom: "20px",
  },
});
