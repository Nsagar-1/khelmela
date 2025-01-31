import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getData } from '../../config/dataFlow';
import FullMapMatches from './freeFire_fullmap';

import ClashSquad from './ClashSquad';

const App = () => { 
    const [match, setMatch] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData("matchcard");
            setMatch(result);
            console.log(result);
            console.log(setMatch);
        };
        fetchData();
    }, []);

    return  <>  <FullMapMatches /> </>;
};



export default ClashSquad ;
