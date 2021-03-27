import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './styles'

interface VideoPlayerProps {
    episode :{
      id:string,
      title:string,
      poster:string,
      duration:string,
      plot:string,
      video:string
    }
}

const VideoPlayer = (props: VideoPlayerProps) => {
    
    const {episode} = props;
    
    return (

        <View>
            <Text></Text>
        </View>
    )
}

export default VideoPlayer

