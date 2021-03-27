import {StyleSheet} from 'react-native'
 const styles = StyleSheet.create({
     container :{

     },
     image :{
         width:'100%',
         aspectRatio: 16/9,
         resizeMode:'cover'
     },
     title:{
         color:'#fff',
         fontSize:24,
         fontWeight:'bold'
     },
     match:{
         color:'#00aa00',
         fontWeight:'bold',
         marginRight:10
     },
     year :{
        color:'lightgreen',
        marginRight:10
     },
     ageContainer:{
        backgroundColor:'#e6e229',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
        paddingHorizontal:3,
        marginRight:10
     },
     age:{
     color:'black',
     fontWeight:'bold'
     },
     playButton:{
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
      padding:5,
      borderRadius:3,
      marginVertical:8
     },
     playButtonText:{
       color:'black',
       fontSize:14,
       fontWeight:'bold'
     },
     downloadButton:{
        backgroundColor:'#2b2b2b',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderRadius:3,
     },
     downloadButtonText:{
        color:'white',
        fontSize:14,
        fontWeight:'bold'
     },
     plot:{
         fontSize:14,
         marginTop:12,
         marginBottom:10,
         color:'white'
     },
     cast_creator:{
         fontSize:10,
         color:'darkgrey'
     },
    //  picker
    //  mainContainer: {
    //     backgroundColor: 'black',
    //     flex: 1,
    //   },
    
     // picker box style
      pickerBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        marginTop: 5,
       
      },
      pickerBoxInner: {
        backgroundColor:'black',
        borderWidth: 0.6,
        borderColor: 'black',
       borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        height: 37,
      },
      pickerBoxIcon: {
        position: 'absolute',
        right: 0,
        fontSize: 23,
        color: 'white',
      },
      pickerStyle: {
        width: '120%',
        color:'white',
        paddingBottom: 0,
        paddingLeft: 0,
     //  transform: [{ scaleX: 0.85 }, { scaleY: 0.85 }],
        left: -40,
        position: 'absolute',
        backgroundColor:'black',
      },
      pickerItem:{
          color:'white',
          fontSize:12,
         
      }
    })

    export default styles