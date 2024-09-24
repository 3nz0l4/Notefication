import React { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from "react-native"
import database from "../../conf/firebaseconfig"
import { FontAwesome } from "@expo/vector-icons"
import styles from "./style"

 export default function Note ({ navigation }){
    const [, setNotas] = useState ([])

    function delete (id){
        databse.collection("Notas"). doc(id). delete()
    }

    useEffect (()=>{
        database.collection("Notas").onSnapshot ((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push{...doc.data(), id: doc.id } )
            })
            setNotas(list)
        })
    }, [])

    return(
        <view style={style.container}>
            <FlatList/>
            showVerticalScrollIndicator={false}
            data={Notas}
            renderItem={ ( item) =>{
                return (
                <View style={styles.Notes}>
                <TouchableOpacity 
                 style={styles.deleteNote}
                 onPress={() => {
                    deleteNote(item.id)
                 }}
                >
                <FontAwesome
                    name="trash"
                    size={23}
                    color= "#a1ab81"
                >
                </FontAwesome>        
                </TouchableOpacity>
                <Text
                    style={styles.DescriptionNote}
                    onPress={()=>{
                        navegation.navegate ("Details",{
                            id: item.id,
                            description: item.description
                        })
                    }}
                >
                {item.descripton}
                </Text>
                </View>
                )
            }}

            <TouchableOpacity style
            style={styles.buttonNewNote}
            onPress={() => navigation.navegate("New Note")}
            >
                <Text style={styles.iconButton}></Text>
            </TouchableOpacity>
        </view>
    )
 }