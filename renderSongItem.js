import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    navigation,
  } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { millisToMinutesAndSeconds } from './utils';
import { Ionicons } from '@expo/vector-icons';
import {Webview} from "react-native-webview";
import SongPage from "./SongPage.js";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
<AntDesign name="play" size={24} color="black" />


  export default function IndividualSongItem({songname, songindex, tracknumber, imageurl, duration, albumtitle, artistname, trackinfo, externalurl, previewurl, alltracks}) {
    const songDuration = millisToMinutesAndSeconds(duration);
    const navigation = useNavigation();
    //console.log(externalurl)
    //console.log(alltracks)
    //console.log(alltracks)
    return (
      <View>
      <Pressable 
      onPress={() => {navigation.navigate('SongPage', {
        externalurl: externalurl
      }
      )}}>
        <View style = {styles.songitem}>
          <Pressable
          onPress={() => {navigation.navigate('ThirdPagee', {
            previewurl: previewurl
          });

          }}
          >
          <View style = {{alignItems: 'flex-start'}}>
          <AntDesign name = "play" size = {24} color = "green"></AntDesign>
          </View>
          </Pressable>
          <View style = {styles.coverView}>
            <Image
              style = {styles.albumcover}
              source = {{uri: imageurl}}
            />
          </View>
          <View style = {styles.songTitle}>
            <Text style = {{color: "white"}} numberOfLines={1}>{songname}</Text>
            <Text style = {{color: "white"}} numberOfLines = {1}>{artistname}</Text>
          </View>
          <View style = {styles.Third}>
            <Text style = {{color: "white"}}>{albumtitle}</Text>
          </View>
          <View style = {styles.Fourth}>
            <Text style = {{color: "white"}}>{songDuration}</Text>
          </View>
        </View>
        </Pressable>
        </View>
    );
  }

  const styles = StyleSheet.create({
    songitem: {
      marginStart:55,
      flexDirection: 'row',
      //justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      backgroundColor: 'black',
      padding: 6,
    },
    songTitle: {
      alignItems: 'center',
      //backgroundColor: 'green',
      width: '30%',
      marginStart: 20,
    },

    Third: {
      flexDirection: 'row',
      //backgroundColor: 'red',
      width:"30%",
      //marginStart: 40,
    },

    Fourth: {
      //color: 'blue',
      width: "10%",

    },

    albumcover: {
      width: 35,
      height: 30,

    },

    coverView: {
      //backgroundColor: 'white',
      height: '100%',
      width: '10%',
      marginStart: 15,

    },

  });