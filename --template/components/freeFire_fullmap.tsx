import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView  , StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FullMapMatches = () => {
  const [selectedGroup, setSelectedGroup] = useState('Solo Match');
  const [selectedTime1, setSelectedTime1] = useState('6:00 pm');
  const [selectedTime2, setSelectedTime2] = useState('9:00 am');
  const [prizePool, setPrizePool] = useState(45);
  const [entryFee1, setEntryFee1] = useState('free');
  const [entryFee2, setEntryFee2] = useState(20);
  const [totalPlayers, setTotalPlayers] = useState(48);
  const [limitedAmmo, setLimitedAmmo] = useState('Yes');
  const [playerMode, setPlayerMode] = useState('Solo');
  const [map_type , setMap_type] = useState('Random');
  return (
    <ScrollView style={{ padding: 10, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', backgroundColor: 'yellow' }}>
        FULL MAP MATCHES
      </Text>
      <Text style={{ color: 'red', textAlign: 'center' }}>Note: All matches are played daily at the same time</Text>

      <View>
        <Text>Select Group:</Text>
        <Picker selectedValue={selectedGroup} onValueChange={(itemValue : string) => setSelectedGroup(itemValue)}>
          <Picker.Item label="Solo Match" value="Solo Match" />
        </Picker>
      </View>
      
      {[{ time: selectedTime1, entryFee: entryFee1, odds: null }, { time: selectedTime2, entryFee: entryFee2, odds: { top3: 2.5, top15: 1.5 } }].map((match, index) => (
        <View key={index} style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}>
          <View style= {styles.bundler} >
          <Image style={{ height:30 , width : 30 , borderRadius:40     }}  source={require('../assets/images/free.jpg')} />
          <Text style={{ fontWeight: 'bold' , marginLeft: -85 }}>Freefire full match</Text>
          <Text>Limited Ammo: {limitedAmmo}</Text>
          </View>


          <View style={[styles.bundler , {flexDirection:'column', alignItems:'flex-end'  }]}>
          <Text>Player Mode: {playerMode}</Text>
          <Text>Total Players: {totalPlayers}</Text>

          </View>
          
          <View style={styles.bundler}>
          <Text style={{ fontWeight:'bold' }}>MAP:</Text>
          <Text style={{}}>{map_type}</Text>
          </View>
    
      
          <View style={{ flexDirection: 'row' , marginTop : 20}}>
            <Image source={require('../assets/images/map1.png')} style={{ width: 70, height: 70 , marginRight: 30 , marginLeft : 40 , }} />
            <Image source={require('../assets/images/map2.png')} style={{ width: 70, height: 70 , marginRight: 30 }} />
            <Image source={require('../assets/images/map3.png')} style={{ width: 70, height: 70  , marginRight: 30 }} />
          </View>
          <View style={styles.bundler}>


          <Text>Winner: <Text style={{ backgroundColor: 'lightblue' }}>Top 3</Text></Text>
          {match.odds && (
            <>
              <Text>Odds: <Text style={{ backgroundColor: 'lightblue' }}>{match.odds.top3}x</Text> <Text style={{ backgroundColor: 'lightblue' }}>{match.odds.top15}x</Text></Text>
            </>
          )}

          </View>
          <Text>Prize Pool: ₹{prizePool}</Text>
          
          <Picker selectedValue={match.time} onValueChange={(itemValue: string) => index === 0 ? setSelectedTime1(itemValue) : setSelectedTime2(itemValue)}>
            <Picker.Item label="6:00 pm" value="6:00 pm" />
            <Picker.Item label="9:00 am" value="9:00 am" />
          </Picker>
          <Text>Entry Fee: <Text style={{ backgroundColor: 'green', color: 'white' }}>{match.entryFee}</Text></Text>
          <Text style={{ color: 'red' }}>Note: Click Here to see rules of the full map</Text>
        </View>
      ))}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  bundler: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  }



});

export default FullMapMatches;