import React, {useRef, useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './styles'
import {Video } from 'expo-av' 
import{Playback} from 'expo-av/build/AV'
import {Storage} from 'aws-amplify'

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
    const [videoUrl, setVideoUrl]=useState('')

    const video = useRef<Playback>(null);
    const [status, setStatus] = useState({})



    useEffect(()=>{
        if(episode.video.startsWith('http')){
            setVideoUrl(episode.video);
            return;
        }
        Storage.get(episode.video).then(setVideoUrl);
    },[episode])

    useEffect(()=>{
        if(!video){
            return;
        }    
            (async () =>{
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                {uri:videoUrl},
                {},
                false
            )
    })();
    },[videoUrl])

   console.log(videoUrl)

   if(!videoUrl){
       return null;
   }

    return (
       
        <Video
           ref={video}
           style={styles.video}
           source ={{
               uri:videoUrl,
           }}
             posterSource={{
                 uri:episode.poster,
             }}
           posterStyle={{
               resizeMode:'cover'
           }}
           usePoster={false}
           useNativeControls
           resizeMode="contain"
           onPlaybackStatusUpdate={status => setStatus(() => status)}    
           />

        
    )
}

export default VideoPlayer

