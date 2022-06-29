import { Avatar, Button, Card, Appbar, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Drawer,
  ImageBackground,
  Image,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Category from "./Services/services/CategoryServices";
import React from "react";
import SubCategory from "./Services/services/subCategorybyCategory";

export default function ServiceCategory({ route }) {
  console.log(route.params.val, 2);
  console.log(333);
  const navigation = useNavigation();
  const move = (val) => {
    navigation.navigate("ServiceListings",{val:val});
  };
  const [subCat, setSubCat] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  React.useEffect(() => {
    getcate();

    // byCategory
  }, [route.params.val._id]);
  const getcate = async () => {
    try {
      setloading(true);
      let result = await SubCategory.getSubCategoryByCategory(
        route.params.val._id
      );

      setSubCat(result.subcategory);
      setloading(false);
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
          backgroundColor: "#fff4f4",
        }}
      >
        <ImageBackground
          source={
            "https://static.wixstatic.com/media/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg/v1/fill/w_980,h_206,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.https://static.wixstatic.com/media/cf2555312b624ba3899a966093f39c62.jpg/v1/fill/w_1349,h_608,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf2555312b624ba3899a966093f39c62.jpg"
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
              Selected Category Services
            </Text>
          </View>
        </ImageBackground>
        {subCat.length > 0 ? (
          subCat.map((val) => (
            <Card
              style={{
                padding: "40px",
                borderRadius: "2px",
                width: "90%",
                borderColor: "#6804ec",
                borderWidth: 8,
                marginBottom: "20px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={`http://localhost:3000/${val.image}`}
                  style={{ width: "100%", height: "200px" }}
                ></Image>
                <Text
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    marginTop: "20px",
                  }}
                >
               {val.name}
                </Text>
                <Text
                  style={{
                    fontSize: "20px",
                    marginBottom: "20px",
                    fontStyle: "italic",
                  }}
                >
                {val.detail }
                </Text>
                <Button
                  mode="outlined"
                  onPress={() => move(val)}
                  style={{ borderRadius: "20px", width: "75%", borderWidth: 3 }}
                >
                  View
                </Button>
              </View>
            </Card>
          ))
        ) : (
          <Text>Loading</Text>
        )}
      </View>
    </SafeAreaView>
  );
}
