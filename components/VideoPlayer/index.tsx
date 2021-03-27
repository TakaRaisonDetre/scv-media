import React, {useRef, useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './styles'
import {Video } from 'expo-av' 
import { setStatusBarStyle } from 'expo-status-bar'

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
    const video = useRef<Playback>(null);
    const [status, setStatus] = useState({})

    useEffect(()=>{
   
   if(!video){
       return;

   }    
    (async () =>{
     await video?.current?.unloadAsync();
     await video?.current?.loadAsync(
         {uri:episode.video},
         {},
        false
     )
    })();
    },[episode])
   
    return (

       
           <Video
           ref={video}
           style={styles.video}
           source ={{
               uri:episode.video,
           }}
           posterSource={{
               uri:episode.poster,
           }}
           posterStyle={{
               resizeMode:'cover'
           }}
           usePoster={true}
           useNativeControls
           resizeMode="contain"
           onPlaybackStatusUpdate={status=> setStatus(()=>status)} 
           />

        
    )
}

export default VideoPlayer

