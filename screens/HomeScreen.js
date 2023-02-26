import { useSpotifyAuth } from "../utils";
import SongList from "../components/SongList";
import AuthButton from "../components/AuthButton";
import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { Images, Themes } from "../assets/Themes";

const windowWidth = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  console.log("token", token);
  console.log("tracks", tracks);

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = <SongList tracks = {tracks}/>;
  }
  else {
    contentDisplayed = <AuthButton authenticationFunction = {getSpotifyAuth}/>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});