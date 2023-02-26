import {Pressable, Text, StyleSheet, Image, Dimensions, View} from "react-native";
import {Images, Themes} from "../assets/Themes";

const windowWidth = Dimensions.get("window").width;


const AuthButton = ({authenticationFunction}) =>{
    return (
        <Pressable style={styles.authButton} onPress={authenticationFunction}>
            <View style = {styles.wrapper}>
                <Image source={Images.spotify} style = {styles.icon}></Image>
                <Text style={styles.authText}>CONNECT WITH SPOTIFY</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create ({
    authButton: {
        backgroundColor: Themes.colors.spotify,
        borderRadius: 99999,
        padding: 10,
      },
    authText: {
        color: Themes.colors.white,
        fontWeight: "bold",
      },
    icon: {
        resizeMode: "contain",
        width: windowWidth * 0.05,
        height: windowWidth * 0.05,
        marginRight: 7,
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between", 
        alignItems: "center",
    },
});

export default AuthButton;