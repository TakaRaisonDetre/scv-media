import React, {useEffect, useState} from 'react';
import { StyleSheet, Image, FlatList} from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, } from '../../components/Themed';
import styles from './styles'
import categories from '../../assets/data/categories'
import HomeCategory from '../../components/HomeCategory';

// data
import {DataStore} from 'aws-amplify'
import {Category} from '../../models/index'

//const firstCategory = categories.items[0]


const HomeScreen=()=> {

  const [categories, setCategories] = useState<Category[]>([]);

useEffect(()=>{
  const fetchCategories = async ()=>{
   const response = await DataStore.query(Category)
   console.log(response);
   // setCategories(await DataStore.query(Category))
   setCategories(response)
};
fetchCategories()
},[])

  return (
    <View style={styles.container}>
      {/* list of categories */}
      {/* <HomeCategory category={firstCategory}/> */}
       <FlatList
       data={categories}
       renderItem ={({item})=>(
        <HomeCategory category={item}/> 
       )}
       />
    </View>
  );
}

export default HomeScreen;