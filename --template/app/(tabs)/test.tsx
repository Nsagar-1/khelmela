import React, { useEffect, useState } from "react";
import { db } from "@/config/firebase_config";
import { getDocs , collection } from "firebase/firestore";
import { Text } from "react-native";

const App =() => {

    const [createdMatches , setCreatedMatches] = useState ([]);

    const getRef = collection(db , "createdMatches")

    useEffect( ()=> {
       
        const getCreatedMatches = async () => {
            
        const data = await getDocs(getRef);

        console.log(data);

        }
    
        getCreatedMatches();

    } , []);
    
    return ( <>

      <Text> Hello Text </Text>

    </>)

}

export default App;