import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


import DashBoard from '../DashBoard';
import LoginSignup from './login';
import FullMapMatches from '@/components/freeFire_fullmap';

import {getData , createData, updateData , deleteData } from '../../config/dataFlow';


const App = () => { 

   const res = createData("User" , {name:"Picashow"});
   console.log(res);

    console.log("Updated sucessfully")

    return (<> 
    IndexPage 

    <Text > Indexpage </Text>
    
    
    </>)
}

export default App ;
