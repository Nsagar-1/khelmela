import React, { useState } from "react";
import { Image , Text , View , StyleSheet , TouchableOpacity } from "react-native";

const Pannel_freefire =() => {

    return(
        <>
        
        <View style={styles.mode}>
            <Image source={require('../assets/images/fullmap.png')} style={styles.modeImage} />
            <Text style={styles.modeText}>Full Map Matches</Text>
          </View>
          <View style={styles.mode}>
          <Image source={require('../assets/images/clash-squad.png')} style={styles.modeImage} />
          <Text style={styles.modeText}>Clash Squad</Text>
          </View>
       
        
        </>
    );
};


const Pannel_pubg =() => {

    return(
    <>    
    <View style={styles.mode}>
        <Image source={require('../assets/images/pubg-fullmap.png')} style={styles.modeImage} />
        <Text style={styles.modeText}>Full Map Matches</Text>
      </View>
      <View style={styles.mode}>
      <Image source={require('../assets/images/clash-squad.png')} style={styles.modeImage} />
      <Text style={styles.modeText}>Clash Squad</Text>
      </View>
     
    </>

    );


};


const Pannel_COD =() => {

    return(
        <>    
        <View style={styles.mode}>
            <Image source={require('../assets/images/COD-fullmap.png')} style={styles.modeImage} />
            <Text style={styles.modeText}>Full Map Matches</Text>
          </View>
          <View style={styles.mode}>
          <Image source={require('../assets/images/fullmap.png')} style={styles.modeImage} />
          <Text style={styles.modeText}>Clash Squad</Text>
          </View>
         
        </>
    
        );

}

  export const renderPannel =(pannel:number) => {
        switch (pannel) {
            case 1:
                return <Pannel_freefire />;
            case 2:
                return <Pannel_pubg/>;
            case 3:
                    return <Pannel_COD />;
            default:
                return <Pannel_freefire />;
                    
    }



}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9ACBD0',
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
      color: '#8A5D3B',
      fontWeight: 'bold',
      backgroundColor: "yellow",
      borderRadius: 100,
      padding: 7,
      height: 40,
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
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
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
      backgroundColor: 'white',
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
  });