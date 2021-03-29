import React ,{useState, useEffect}from 'react';
import { StyleSheet, Image, FlatList, Pressable} from 'react-native';

import MovieItem from '../../components/MovieItem'

import { Text, } from '../../components/Themed';
import styles from './styles'
import { Category, Movie } from '../../models';
import { DataStore } from '@aws-amplify/datastore';

import {Storage} from 'aws-amplify'

interface HomeCategoryProps {
category:Category
}



const HomeCategory=(props:HomeCategoryProps)=> {

  const { category } = props

   const [movies, setMovies] = useState<Movie[]>([])

 

useEffect(()=>{
   const fetchMovies = async()=>{
      const result = (await DataStore.query(Movie))
      .filter((movie)=>movie.categoryID ===category.id)
      console.log(result)
      setMovies(result)
   };
   fetchMovies();
},[])



  Storage.list('/').then(result=>console.log(result))


  return (
    <>
    <Text style={styles.title}>{category.title}</Text>
     <FlatList 
     data ={movies}
     renderItem ={({item})=>(
      //  <Pressable onPress={()=>onMoviePress(item)}>
      // <Image style={styles.image} source={{uri:item.poster}}/>
      //  </Pressable>
      <MovieItem movie={item}/>
       
     )}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     />
     
    </>
  );
}

export default HomeCategory;