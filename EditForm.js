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
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import * as React from "react";
import SubCategory from "./Services/services/subCategorybyCategory";
import beautyService from "./Services/services/Servicesbeauty";

export default function EditServiceform({route}) {
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([]);
  const [detail, setDetail] = React.useState();
  const [image, setImage] = React.useState(null);
  const [cat, setCat] = React.useState([]);
  
  
  const [valuess, setValuess] = React.useState([]);
  const [item, setItem]= React.useState([]);
  const val=route.params.val;
  const [initial, setInitial] = React.useState({
    ServiceName: "",
  

    ServiceDescription: "",
    Price: "",

  
  });
  React.useEffect(() => {
    if (true) {
  fetching()
    }
  }, []);
  const fetching=()=>{
        setInitial({
          ...initial,
          ServiceName: val.name,
  

    ServiceDescription:val.detail ,
    Price:val.Price,
        });
        setValue(val.ServiceType)
    
  }
  const [items, setItems] = React.useState([
    { label: "Luxury", value: "Luxury" },

    { label: "Affordable", value: "Affordable" },
    { label: "LowCost", value: "LowCost" },
  ]);

  const move = () => {
    navigation.navigate("BusinessLogin");
  };
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setDetail(result.uri.substring(result.uri.lastIndexOf(".") + 1));
    }
  };

  const handleFormSubmit = (values) => {
    try {
      beautyService.EditServices(val._id, {
        Price: values.Price,
        detail: values.ServiceDescription,
        ServiceType: value,
        name: values.ServiceName,
      });
     
      // navigate("/");
    } catch (e) {
      error(e.error);
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
          Edit SERVICE
          </Text>
          <Formik
            enableReinitialize={true}
            initialValues={initial}
            validationSchema={Yup.object().shape({
              ServiceName: Yup.string().required("ServiceName is Required"),

          
              ServiceDescription: Yup.string().required(
                "Service Description is required"
              ),
              Price: Yup.number()
                .min(1, "Price must be greater then 0")

                .required("Please enter a valid number"),
            })}
            onSubmit={handleFormSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  placeholder="Service Name"
                  style={styles.Textfields}
                  onChangeText={handleChange("ServiceName")}
                  onBlur={handleBlur("ServiceName")}
                  value={values.ServiceName}
                ></TextInput>
               
                <View style={{ marginBottom: "150px" }}>
                  <Text style={{ fontWeight: "bold", color: "#9c8cbc" }}>
                    Select your Service Type in terms of Price Range
                  </Text>
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    theme="DARK"
                    mode="BADGE"
                    badgeDotColors={[
                      "#e76f51",
                      "#00b4d8",
                      "#e9c46a",
                      "#e76f51",
                      "#8ac926",
                      "#00b4d8",
                      "#e9c46a",
                    ]}
                  />
                </View>
                
                <TextInput
                  placeholder="Price (PKR)"
                  style={styles.Textfields}
                  onChangeText={handleChange("Price")}
                  onBlur={handleBlur("Price")}
                  value={values.Price}
                ></TextInput>

               


                <TextInput
                  placeholder="Enter your service description"
                  style={styles.AboutTextfield}
                  onChangeText={handleChange("ServiceDescription")}
                  onBlur={handleBlur("ServiceDescription")}
                  value={values.ServiceDescription}
                ></TextInput>
                <Button
                  style={{ marginBottom: "20px", backgroundColor: "#FF69B4" }}
                  mode="contained"
                  onPress={() => handleSubmit()}
                >
                  Submit
                </Button>
              </View>
            )}
          </Formik>
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
