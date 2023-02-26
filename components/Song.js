import {Text, StyleSheet, Image, View, Dimensions, Pressable} from "react-native";
import {Themes} from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get("window").width;


export default function Song({image, title, album, artist, duration, previewUrl, externalUrl}) {
    const navigation = useNavigation();
    return (
        <Pressable onPress = {() => navigation.navigate('DetailScreen', {url: externalUrl})}>
            <View style = {styles.windowView}>
                    <View style = {styles.indexView}>
                        <Pressable onPress = {() => navigation.navigate('PreviewScreen', {url: previewUrl})} >
                            <AntDesign name="play" size = {windowWidth * 0.05} style = {styles.playButton} />
                        </Pressable>
                    </View>
                    <View style = {styles.imageView}>
                    <Image style= {styles.image} source={{uri: image}}></Image>
                    </View>
                    <View style = {styles.titleView}>
                        <Text numberOfLines={1} style={styles.text}>{title}</Text>
                        <Text style = {{color: Themes.colors.gray}}>{artist}</Text>
                    </View>
                    <View style = {styles.albumView}>
                        <Text numberOfLines={1} style = {styles.text}>{album}</Text>
                    </View>
                    <View style = {styles.timeView}>
                        <Text style = {styles.text}>{millisToMinutesAndSeconds(duration)}</Text>
                    </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    windowView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Themes.colors.background,
        padding: 10,
    },
    titleView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: '2%',
        width: '32%',
        padding: 5,
    },
    albumView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '28%',
        marginLeft: '5%',
        padding: 5,
    },
    indexView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%',
        marginRight: '1%',
        // height: '100%',
        // marginLeft: '1%',
    },
    timeView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: '3%',
        width: '10%',
    },
    imageView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
    },
    text: {
        color: Themes.colors.white,
    },
    image: {
        resizeMode: "contain",
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
    },
    playButton: {
        color: Themes.colors.spotify,
    },
});

