import React , {useState,useEffect}from 'react'
import {  Text, View, Image,Pressable , FlatList, ActivityIndicator} from 'react-native'
import styles from './styles'
import {AntDesign, Entypo, MaterialIcons, Feather, Ionicons} from '@expo/vector-icons'
// temtative data
import movie from '../../assets/data/movie'
// aws data store 
import {DataStore} from 'aws-amplify';
import {Episode, Movie,Season} from '../../models'
// route 
import {useRoute} from '@react-navigation/native'

import { setStatusBarStyle } from 'expo-status-bar'
import EpisodeItem from '../../components/EpisodeItem'
import { Picker } from '@react-native-picker/picker'
import VideoPlayer from '../../components/VideoPlayer'



const firstSeason = movie.seasons.items[0]
const firstEpisode = firstSeason.episodes.items[0]


const MovieDetailsScreen = () => {
  const [movie, setMovie]=useState<Movie | undefined>(undefined)
  const [seasons, setSeasons]=useState<Season[]>([]);
  const [episode, setEpisodes]=useState<Episode[]>([]);


  const [currentSeason, setCurrentSeason] = useState<Season | undefined>(undefined) 
  const [currentEpisode, setCurrentEpisode] = useState<Episode | undefined>(undefined)
  const seasonNames = seasons ? seasons.map(season=> season.name): []
  

  const route = useRoute();

  useEffect(()=>{
     const fetchMovie = async()=>{
     //  const routeid = route?.params?.id
         setMovie(await DataStore.query(Movie, route?.params?.id))
     };
     fetchMovie()
  },[])


useEffect(()=>{
  if(!movie){
    return;
  }
  const fetchSeasons = async()=>{
    const movieSeasons =   (await DataStore.query(Season)).filter(s=>s.movie?.id===movie.id)

      setSeasons(movieSeasons)
      setCurrentSeason(movieSeasons[0])
  }
  fetchSeasons()
},[movie])

useEffect(()=>{
  if(!currentSeason){
    return;
  }
  const fetchEpisodes = async()=>{
     const seasonEpisodes =  (await DataStore.query(Episode)).filter(e=>e?.season?.id ===currentSeason?.id )
     setEpisodes(seasonEpisodes)
     setCurrentEpisode(seasonEpisodes[0])
  }
  fetchEpisodes()
},[currentSeason])


  if(!movie) {
    return <ActivityIndicator/>
  }

  console.log(seasons)
  console.log(seasonNames)

  console.log(firstEpisode)
    return (
        <View>
          {/* <Image style={styles.image} source={{uri:firstEpisode.poster}}/> */}
   {currentEpisode && <VideoPlayer episode={currentEpisode}/>}   
        

       <FlatList 
       data={episode}
       style={{marginBottom:300}}
       showsVerticalScrollIndicator={false}
       renderItem={({item})=>(
         <EpisodeItem 
         episode={item} 
         onPress={setCurrentEpisode} />)}
       ListHeaderComponent={(

        <View style={{padding:12}}>
        <Text style={styles.title}>{movie.title}</Text>

         <View style={{flexDirection:'row'}}>
         <Text style={styles.match}>98% match</Text>
         <Text style={styles.year}>{movie.year}</Text>
         <View style={styles.ageContainer}>
         <Text style={styles.age}>12+</Text>
         </View>
         <Text style={styles.year}>{movie.numberofSeasons} Seasons</Text>
         <MaterialIcons name='hd' size={24} color='white'/>
      </View>

           {/* Play Botton */}
           <Pressable onPress={()=>console.log('press')} style={styles.playButton}>
             <Text style={styles.playButtonText}>
             <Entypo name="controller-play" size={16} color='black'/>
             Play
           </Text>
         </Pressable>
             {/* Download Botton */}
             <Pressable onPress={()=>console.log('download')} style={styles.downloadButton}>
           <Text style={styles.downloadButtonText}>
             <AntDesign name="download" size={16} color='white'/>
               {'  '}Download
           </Text>
         </Pressable>

          <Text style={styles.plot}>{movie.plot}</Text>
         <Text style={styles.cast_creator}> Casts : {movie.cast}</Text>
         <Text style={styles.cast_creator}> Creator : {movie.creator}</Text>
   
        {/*  Row with big icon */}
       <View style={{flexDirection:'row', padding:10}}>
              
         <View style={{alignItems:'center', marginHorizontal:20}}>
             <AntDesign name="plus" size={24} color='white'/>
             <Text style={{color:'darkgrey', fontSize:10, marginTop:5}}>My List</Text>
         </View>

         <View style={{alignItems:'center', marginHorizontal:20}}>
             <Feather name="thumbs-up" size={24} color='white'/>
             <Text style={{color:'darkgrey', fontSize:10, marginTop:5}}>Rate</Text>
         </View>

         <View style={{alignItems:'center', marginHorizontal:20}}>
             <Ionicons name="share-social" size={24} color='white'/>
             <Text style={{color:'darkgrey', fontSize:10, marginTop:5}}>Share</Text>
         </View>

    


        </View>

{currentSeason && 
      <View style={styles.pickerBoxContainer}>
      <View style={styles.pickerBoxInner}>
        <Picker
          selectedValue={currentSeason.name}
          style={styles.pickerStyle}
          itemStyle={styles.pickerItem}
          onValueChange={(itemValue, itemIndex)=>{
            setCurrentSeason(seasons[itemIndex])
          }}>

          {seasonNames.map(seasonName => (
                            <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                        ))}
        </Picker>
        <MaterialIcons style={styles.pickerBoxIcon} name="arrow-drop-down" />
      </View>
     </View>
}
       
       
       
      </View>
        
      

    


         
       )}  
       />


        </View>

    )
}

export default MovieDetailsScreen


