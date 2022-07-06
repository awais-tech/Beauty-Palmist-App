import { Avatar, Button, Card, Appbar, Searchbar } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Drawer,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import beautyService from "./Services/services/Servicesbeauty";
import quizAnswer from "./Services/services/quizAnswer";
import bookingServices from "./Services/services/booking";

export default function Trending({ route }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const [subCat, setService] = React.useState([]);
  const [ori, setOri] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const itemsPerPage = 6;

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.

  const [currentItems, setCurrentItems] = React.useState([]);
  const [pageCount, setPageCount] = React.useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = React.useState(0);

  const navigation = useNavigation();
  const move = (val) => {
    navigation.navigate("ServiceDetailPage", { val: val });
  };
  React.useEffect(() => {
    getcate();
  }, []);

  React.useEffect(() => {
    // Fetch subCat from another resources.
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(subCat.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(subCat.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, subCat]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % subCat.length;

    setItemOffset(newOffset);
  };
  const getcate = async () => {
    try {
      setloading(true);
      let result = await beautyService.getAllService();
      let results = await bookingServices.getReviews();
      let ids = results.Reviews.filter(
        (value) => parseInt(value.rating) > 2
      ).map((val) => val.ServiceId._id);

      if (ids.length > 0) {
        setService(result.userServices.filter((val) => val._id.includes(ids)));
        setOri(result.userServices.filter((val) => val._id.includes(ids)));
      }
      setloading(false);
    } catch (e) {
      error(e.error);
    }
  };

  const find = (e) => {
    setService(
      ori.filter((fil) =>
        fil.name.toUpperCase().includes(e.target.value.toUpperCase())
      )
    );
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
              Selected Category Services
            </Text>
          </View>
        </ImageBackground>

        <Searchbar
          placeholder="Search Service"
          onChangeText={find}
          value={searchQuery}
          style={{ marginBottom: "20px", width: "80%" }}
        />
        {subCat.length > 0 ? (
          subCat.map((val) => (
            <Card
              style={{
                padding: "40px",
                borderRadius: "2px",
                width: "90%",
                borderColor: "#6804ec",
                borderWidth: 2,
                marginBottom: "20px",
              }}
            >
              <TouchableOpacity onPress={() => move(val)}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      fontStyle: "italic",
                      marginBottom: "20px",
                    }}
                  >
                    {val.name}
                  </Text>
                  <Text style={{ fontSize: "20px", marginBottom: "20px" }}>
                    {" "}
                    {val.BussnesId?.bussnessname || val.userid.name} Services
                  </Text>
                  <Text style={{ fontSize: "20px", marginBottom: "20px" }}>
                    {" "}
                    {val.detail}
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>
          ))
        ) : (
          <Text>No Service</Text>
        )}
      </View>
    </SafeAreaView>
  );
}
