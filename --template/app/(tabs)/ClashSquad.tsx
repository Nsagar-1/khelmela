import React, { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Modal,TouchableWithoutFeedback, FlatList} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import { MotiView } from 'moti';


function ClashSquad() {
    const[show,setShow]=useState(false)
    const[showDetail,setShowDetail]=useState(true)
    const[players,setPlayers]=useState('') // 1v1 ,2v2....
    const[activeIndex,setActiveIndex]=useState(4)
    const[limitedAmmo,setLimitedAmmo]=useState(true)//limted ammo
    const[headshot,setHeadshot]=useState(true)//headshot
    const[skill,setSkill]=useState(true) //skill
    const[rounds,setRounds]=useState(13)//round
    const[activeRound,setActiveRound]=useState(3)
    const[coin,setCoin]=useState('default')//coin
    const[activecoin,setActivecoin]=useState(1)
    const[name,setName]=useState('')//name
    const[amount,setAmount]=useState('') //amount
    console.log(players)
    const player = [{
      id:1,
      players:'1v1'
    },{
      id:2,
      players:'2v2'
    },
  {
    id:3,
    players:'3v3'
  },
{
  id:4,
  players:'4v4'}]

  const round =[{
    id:1,
    rounds:7
  },{
    id:2,
    rounds:9
  },{
    id:3,
    rounds:13
  }]
  const coins =[{
    id:1,
    coin:'Deafult'
  },{
    id:2,
    coin:'9999'
  }]


  //fetch api from this function
  const createMatches=()=>{
    try {
      
    } catch (error) {
      console.log(error)
    }
  }

  

  return (
    <View>
        <View style={{display:"flex",justifyContent:"center",height:40,backgroundColor:'#FEE719'}}>
            <Text style={{fontSize:20, fontWeight:900, fontFamily:'sans-serif',marginLeft:55}}>Clash Squad Matches</Text>
        </View>
        <AntDesign name="arrowleft" size={40} color="black" style={{marginTop:10,marginLeft:10}} />
        <View style={{display:'flex',alignItems:'center',marginTop:5}}>
        <Ionicons name="menu-outline" size={24} color="black" style={{position:'absolute',marginRight:255,marginTop:9}}/>
            <TextInput style={{width:310,height:40,backgroundColor:'#E6B3B3',paddingLeft:60,fontWeight:700,borderRadius:20}} placeholder='Search your match'></TextInput>
            <FontAwesome5 name="search" size={20} color="black" style={{position:'absolute',marginLeft:240,marginTop:10}} />
            <Text style={{marginLeft:8,marginTop:10,color:'red'}}>note:All the matches are made by host player not admin</Text>
            <TouchableOpacity style={{width:108,height:35,backgroundColor:'#73F789', display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',columnGap:5,borderRadius:20,marginLeft:170}} onPress={()=>setShow(true)}>
            <Ionicons name="add-circle-outline" size={34} color="black" />
            <Text style={{fontSize:20,fontWeight:700}}>Create</Text>
            </TouchableOpacity>
            <Text style={{display:'flex',justifyContent:'center',alignItems:'center',gap:5,marginRight:130,marginTop:20,backgroundColor:'#D9D9D9',paddingHorizontal:4}}>
            <Entypo name="game-controller" size={28} color="black" />
            <Text style={{fontSize:20,fontWeight:700}}>Live Matches</Text>
            </Text>
            <View>
                <View style={styles.container}></View>
            </View>
           
            <Modal transparent={true} visible={show} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setShow(false)}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableWithoutFeedback>
            <MotiView
          from={{ opacity: 0,}}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', damping: 10 ,}}
          style={{
            width:'100%',
            height:'60%',
            backgroundColor:'#E6B3B3',
            marginTop:256,
            overflow:'scroll',
            paddingBottom:10
          }}
        >
              <View
                style={{
                  width: 100,
                  backgroundColor: 'black',
                  height:2,
                  borderRadius: 10,
                  marginLeft:100,
                  marginTop:10
                }}
              >
              </View>
              <View style={{backgroundColor:'grey',width:300,height:50,marginLeft:13,marginTop:10,borderRadius:10,}}>
                <Text style={{fontSize:20,textAlign:'center'}}>Create your match </Text>
                </View>
                <Text>Room Mode:</Text>
                <View style={styles.select}><TouchableOpacity onPress={()=>setShowDetail(true)} style={showDetail? styles.clashsquad:null}><Text>Clash Squad</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>setShowDetail(false)}style={!showDetail ?  styles.clashsquad :null} ><Text>LoneWolf</Text></TouchableOpacity>
                </View>
                {
                  showDetail ?
                  <View style={{marginTop:10,}}>
                    <Text>Player:</Text>
                   <FlatList data={player}  contentContainerStyle={{display:'flex',gap:40,flexDirection:'row',marginLeft:20,marginTop:10}}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPressIn={() => setActiveIndex(item.id)} onPress={()=>setPlayers(item.players)}>
          <Text style={activeIndex == item.id && styles.clashsquad}>{item.players}</Text>
        </TouchableOpacity>
      )}/>
      <View style={{marginTop:10}}>
        <Text>Limited ammo:</Text>
        <View style={styles.boolean}>
        <TouchableOpacity onPress={()=>setLimitedAmmo(true)} style={limitedAmmo==true?styles.clashsquad:null}><Text>Yes</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>setLimitedAmmo(false)} style={limitedAmmo==false?styles.clashsquad:null}><Text>No</Text></TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:10}}>
        <Text>Headshot:</Text>
        <View style={styles.boolean}>
        <TouchableOpacity onPress={()=>setHeadshot(true)} style={headshot==true?styles.clashsquad:null}><Text>Yes</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>setHeadshot(false)} style={headshot==false?styles.clashsquad:null}><Text>No</Text></TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:10}}>
        <Text>characterskill:</Text>
        <View style={styles.boolean}>
        <TouchableOpacity onPress={()=>setSkill(true)} style={skill==true?styles.clashsquad:null}><Text>Yes</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>setSkill(false)} style={skill==false?styles.clashsquad:null}><Text>No</Text></TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:10}}>
      <Text>Player:</Text>
                   <FlatList data={round}  contentContainerStyle={{display:'flex',gap:40,flexDirection:'row',marginLeft:20,marginTop:10}}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPressIn={() => setActiveRound(item.id)} onPress={()=>setRounds(item.rounds)}>
          <Text style={ activeRound == item.id && styles.clashsquad}>{item.rounds}</Text>
        </TouchableOpacity>
      )}/>
      </View>
      <View style={{marginTop:10}}>
      <Text>Coin:</Text>
                   <FlatList data={coins}  contentContainerStyle={{display:'flex',gap:40,flexDirection:'row',marginLeft:20,marginTop:10}}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPressIn={() => setActivecoin(item.id)} onPress={()=>setCoin(item.coin)}>
          <Text style={ activecoin == item.id && styles.clashsquad}>{item.coin}</Text>
        </TouchableOpacity>
      )}/>
      </View>
      <View style={{marginTop:20}}>
        <Text>Name:</Text>
        <TextInput style={{width:100,height:40,backgroundColor:'white',paddingLeft:10,fontWeight:600 ,marginLeft:40}} placeholder='enter here' value={name} onChangeText={(text)=>setName(text)}></TextInput>
      </View>
      <View style={{marginTop:20}}>
        <Text>Bet Amt:</Text>
        <TextInput style={{width:100,height:40,backgroundColor:'white',paddingLeft:10,fontWeight:600 ,marginLeft:40}} placeholder='enter here' value={amount} onChangeText={(text)=>setAmount(text)}></TextInput>
      <Text style={{color:'red'}}>
        Minimum bet amount start from Re:10
      </Text>
      </View>
      <TouchableOpacity style={styles.publish} onPress={createMatches}> Publish</TouchableOpacity>
                  </View>
                  :<View>
                     <View style={{marginTop:10,}}>
                    <Text style={{color:'red'}}>Player:</Text>
                   <FlatList data={player}  contentContainerStyle={{display:'flex',gap:40,flexDirection:'row',marginLeft:20,marginTop:10}}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPressIn={() => setActiveIndex(item.id)} onPress={()=>setPlayers(item.players)}>
          <Text style={activeIndex == item.id && styles.clashsquad}>{item.players}</Text>
        </TouchableOpacity>
      )}/>
      <View style={{marginTop:10}}>
        <Text>Limited ammo:</Text>
        <View style={styles.boolean}>
        <TouchableOpacity onPress={()=>setLimitedAmmo(true)} style={limitedAmmo==true?styles.clashsquad:null}><Text>Yes</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>setLimitedAmmo(false)} style={limitedAmmo==false?styles.clashsquad:null}><Text>No</Text></TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:10}}>
        <Text>Headshot:</Text>
        <View style={styles.boolean}>
        <TouchableOpacity onPress={()=>setHeadshot(true)} style={headshot==true?styles.clashsquad:null}><Text>Yes</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>setHeadshot(false)} style={headshot==false?styles.clashsquad:null}><Text>No</Text></TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:10}}>
        <Text>characterskill:</Text>
        <View style={styles.boolean}>
        <TouchableOpacity onPress={()=>setSkill(true)} style={skill==true?styles.clashsquad:null}><Text>Yes</Text></TouchableOpacity>
        <TouchableOpacity  onPress={()=>setSkill(false)} style={skill==false?styles.clashsquad:null}><Text>No</Text></TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:10}}>
      <Text>Player:</Text>
                   <FlatList data={round}  contentContainerStyle={{display:'flex',gap:40,flexDirection:'row',marginLeft:20,marginTop:10}}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPressIn={() => setActiveRound(item.id)} onPress={()=>setRounds(item.rounds)}>
          <Text style={ activeRound == item.id && styles.clashsquad}>{item.rounds}</Text>
        </TouchableOpacity>
      )}/>
      </View>
      <View style={{marginTop:20}}>
        <Text>Name:</Text>
        <TextInput style={{width:100,height:40,backgroundColor:'white',paddingLeft:10,fontWeight:600 ,marginLeft:40}} placeholder='enter here' value={name} onChangeText={(text)=>setName(text)}></TextInput>
      </View>
      <View style={{marginTop:20}}>
        <Text>Bet Amt:</Text>
        <TextInput style={{width:100,height:40,backgroundColor:'white',paddingLeft:10,fontWeight:600 ,marginLeft:40}} placeholder='enter here' value={amount} onChangeText={(text)=>setAmount(text)}></TextInput>
      <Text style={{color:'red'}}>
        Minimum bet amount start from Re:10
      </Text>
      </View>
      <TouchableOpacity style={styles.publish} onPress={createMatches}> Publish</TouchableOpacity>
                  </View>
                  </View>
                }
              </MotiView>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
          
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
container:{
    width:300,
    height:100,
    borderColor:'black',
    borderWidth:1,
    marginTop:20
},
select:{
  display:'flex',
  flexDirection:'row',
  gap:80,
  marginTop:10,
  marginLeft:5,
},
clashsquad:{
  backgroundColor:'grey'
},
boolean:{
  display:'flex',flexDirection:'row',gap:40,paddingLeft:10,paddingTop:10
},
publish:{
  width:80,
  height:50,
  backgroundColor:'blue',
  color:'white',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  marginTop:20,
  marginLeft:40
}
})
export default ClashSquad
