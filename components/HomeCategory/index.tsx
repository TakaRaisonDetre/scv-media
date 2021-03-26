import * as React from 'react';
import { StyleSheet, Image, FlatList} from 'react-native';


import { Text, } from '../../components/Themed';
import styles from './styles'


interface HomeCategoryProps {
category:{
    id:string,
    title:string,
    movies:{
        id:string,
        poster:string
    }[]
}
}


const HomeCategory=(props:HomeCategoryProps)=> {

  const { category } = props

  return (
    <>
    <Text style={styles.title}>{category.title}</Text>
     <FlatList 
     data ={category.movies}
     renderItem ={({item})=>(
         <Image style={styles.image} source={{uri:item.poster}}/>
     )}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     />
     
     
     <Image style={styles.image} source={{uri:'https://i.pinimg.com/originals/61/46/56/614656045f731fa4c56b89cde05d3c14.jpg'}} />
    </>
  );
}

export default HomeCategory;