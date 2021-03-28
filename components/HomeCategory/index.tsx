import React ,{useState, useEffect}from 'react';
import { StyleSheet, Image, FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { Text, } from '../../components/Themed';
import styles from './styles'
import { Category, Movie } from '../../models';
import { DataStore } from '@aws-amplify/datastore';


interface HomeCategoryProps {
category:Category
}



const HomeCategory=(props:HomeCategoryProps)=> {

  const { category } = props

   const [movies, setMovies] = useState<Movie[]>([])

   const navigation = useNavigation()

useEffect(()=>{
   const fetchMovies = async()=>{
      const result = (await DataStore.query(Movie))
      .filter((movie)=>movie.categoryID ===category.id)
      console.log(result)
      setMovies(result)
   };
   fetchMovies();
},[])


  const onMoviePress = (movie:Movie)=>{
    console.log(movie.id)
    navigation.navigate('MovieDetailScreen' ,{id:movie.id})
  }


  return (
    <>
    <Text style={styles.title}>{category.title}</Text>
     <FlatList 
     data ={movies}
     renderItem ={({item})=>(
       <Pressable onPress={()=>onMoviePress(item)}>
      <Image style={styles.image} source={{uri:item.poster}}/>
       </Pressable>
       
     )}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     />
     
    </>
  );
}

export default HomeCategory;