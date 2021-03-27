import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import styles from './styles'
import {AntDesign} from '@expo/vector-icons'

interface EpisodeItemProps {
    episode :{
        id:string,
        title:string,
        poster:string,
        duration:string,
        plot:string,
        video:string
    }
   onPress : (episode:episode) => {}
}

const EpisodeItem = (props: EpisodeItemProps) => {
  
  const {episode, onPress} = props;

    return (
        <Pressable style={{padding:5, marginVertical:10}} onPress={()=>onPress(episode)}>
            <View style={styles.row}>
              <Image style={styles.image} source ={{uri: episode.poster}} />
            
              <View style={styles.titleContiner}>
                  <Text style={styles.title}>{episode.title}</Text>
                  <Text style={styles.duration}>{episode.duration}</Text>
              </View>
              <AntDesign name="download" size={24} color='white'/>
            </View>

            <Text style={styles.plot}>{episode.plot}</Text>
        </Pressable>
    )
}

export default EpisodeItem

