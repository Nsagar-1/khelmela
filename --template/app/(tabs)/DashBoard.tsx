import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';

import { renderPannel } from '@/components/pannels';

const DashBoard = ({Username , PhotoURL}) => {

  const [Pannel , setPanel]= useState(1);
  const [username , setUsername] = useState(Username);
  const [photoURL , setPhotoURL] = useState(PhotoURL);
  
  // This is to test git reponse

  console.log(username , photoURL);
  const openOptions = () => {
    console.log("Menu openend");}

  function  gamemode (game_name : string) {
     console.log("game Started" , game_name );

  };
   


  return (

    <View style={styles.container}>
      {/* Top Bar with Coins and Menu */}
      <View style={styles.topBar}>
        <Text style={styles.coinText}> C </Text>
        <TouchableOpacity onPress={openOptions}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>   


      {/* Top Games Header */}
      <View style={[styles.header, styles.shadow , {marginTop:-10}]}>
        <Text style={styles.headerText}>TOP GAMES</Text>
      </View>


      <View style ={styles.row_bundler}>
        <Image source={{uri: 'https://lh3.googleusercontent.com/a/ACg8ocJZDpshB1tudnsQuWi6-s7FWoS8lR_9rmk41gQ4Qmj7BIMycrZS=s96-c'}} />
        <Text style={styles.username}>  {username} </Text>
        
        </View>

      {/* Top Games Icons */}
      <View style={styles.iconsContainer}>
        <View style={styles.iconWrapper}>
        <TouchableOpacity onPress={() => {
            gamemode("freefire");
            setPanel(1);}

          }>
      
      <Image source={require('../../assets/images/free.jpg')} style={styles.icon} />

      </TouchableOpacity>



        </View>
        <View style={styles.iconWrapper}>
        <TouchableOpacity onPress={() => {
          gamemode("Pubg");
          setPanel(2);   
          
          }}>

        <Image source={require('../../assets/images/pubg.jpg')} style={styles.icon} />
        </TouchableOpacity>

        </View>

        <View style={styles.iconWrapper}>
          
        <TouchableOpacity onPress={() =>{ 
          gamemode("COD") ;
          setPanel(3);


         }  }>

        <Image source={require('../../assets/images/COD1.png')} style={styles.icon} />
        
        </TouchableOpacity>

        </View>
      </View>

      {/* Select Mode Section */}
      <View style={styles.selectModeContainer}>
        <View style={[styles.header, styles.shadow]}>
          <Text style={styles.headerText}>SELECT MODE</Text>
        </View>
        
        {/* Pannle Render */}


        <View style={styles.modesContainer}>
        { renderPannel(Pannel) }
        </View>

      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>ALL Games</Text>
        <Text style={styles.navItem}>Profile</Text>
        <Text style={styles.navItem}>Champions</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8BA2BF',
    alignItems: 'center',
    paddingVertical: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 10,
    
  },
  coinText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: "yellow",
    borderRadius: 100,
    padding: 8,
    height: 35,
  },
  menuIcon: {
    fontSize: 24,
    color: '#8A5D3B',
    fontWeight: 'bold',
  },
  menu: {
    position: 'relative',
    top: 60,
    left: 0,
    width: 180,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 1,
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  header: {
    backgroundColor: '#8A5D3B',
    width: 250,
    height: 35,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginTop :20,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginVertical: 20,
    marginTop: -5,
  },
  underline:{

    

  },

  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 80,
    borderRadius: 40,
    backgroundColor: 'black',
    height: 100,
  },
  selectModeContainer: {
    width: '90%',
    marginVertical: 10,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#DAE7E9',
    alignItems: 'center',
  },
  modesContainer: {
    width: '100%',
    alignItems: 'center',
  },
  mode: {
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: '#E8E8E8',
    width: '90%',
  },
  modeImage: {
    width: '100%',
    height: 150,
  },
  modeText: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: 20,
  },
  navItem: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8A5D3B',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  username:{
    fontSize: 16,
    marginLeft: 0,
  },



  row_bundler:{
    flexDirection: 'row',
    marginTop : 20 ,
  }

});

export default DashBoard;
