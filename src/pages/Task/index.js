import React, {useEffect, useState} from "react";

import { 
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    FlatList,
     } from "react-native";

import database from '../../config/firebaseconfig'
import styles from './style'




export default function Task (){

    const [task, setTask] = useState([]);

    useEffect (() => {
        database.collection("Habitos").onSnapshot((query) =>{
            const list = []

            query.forEach((doc) => {
                list.push({...doc.data(), id: doc.id})
            })
            setTask(List)
        }
        )
    }, [])
    return(
        <View>
            <Text>Page de Task</Text>
        </View>
    );
}