import { StyleSheet, SafeAreaView, Text, Pressable, Image, View, Dimensions } from "react-native";
import {Images, Themes} from "../assets/Themes";

const windowWidth = Dimensions.get("window").width;


const Header = () => {
    return (
        <View style = {styles.header}>
            <Image source = {Images.spotify} style = {styles.icon}/>
            <Text style = {styles.text}>My Top Tracks</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '5%',
    },
    icon: {
      resizeMode: "contain",
      width: windowWidth * 0.1,
      height: windowWidth * 0.1,
      marginRight: 15,
    },
    text: {
        fontSize: 20,
        color: Themes.colors.white,
        fontWeight: 'bold',
    }
  });

  export default Header;