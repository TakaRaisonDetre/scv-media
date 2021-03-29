
import React , {useEffect, useState} from 'react'
import { StyleSheet, Text, View,Pressable,Image} from 'react-native'
import styles from './styles'
import {Movie} from '../../models'
import {useNavigation} from '@react-navigation/native';
import {Storage} from 'aws-amplify'


const MovieItem = ({movie}: {movie:Movie}) => {

    const navigation = useNavigation()
    const [imageUrl, setImageUrl] = useState('')

  const onMoviePress = (movie:Movie)=>{
    navigation.navigate('MovieDetailScreen' ,{id:movie.id})
  }

  useEffect(()=>{
    if (movie.poster.startsWith('http')) {
        setImageUrl(movie.poster);
        return;
    }
     Storage.get(movie.poster).then(setImageUrl)
  },[])

    return (
        <Pressable onPress={()=>onMoviePress(movie)}>
            <Image style={styles.image}  source={{uri: imageUrl}}/>
        </Pressable>
    )
}

export default MovieItem


