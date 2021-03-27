import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  plot:{
    color:'darkgrey'
  },
  image :{
    height:75,
    aspectRatio:16/9,
    resizeMode:'cover',
    borderRadius:3,
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:5,
  },
  duration :{
    color:'darkgrey',
    fontSize:10,
  },
  title:{
    color:'white'
  },
  titleContiner :{
    flex:1,
    padding:5,
    justifyContent:'center',
  }
})

export default styles