import React, {UseState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import database from ""../../config/firebaseconfig"
import styles from "./style"

export default function NewNote ({navigation}){
    const [description, setDescription] = useState (null)

    function addNote() {
        database.collection("Notas").add({
        description: description,
        status: false,
        })
        NavigationHelpersContext.navigate("Note")
    }

    return(
        <view style={styles.container}>
            <Text style={styles.label}>Description</Text>  
            <TextInput
                style={styles.input}
                placeholder="Insira sua nota aqui"
                onChangeText={setDescription}
                value={description}
            />

            <TouchableOpacity 
            style={styles.buttonNewTask}
            onPress={()=>{
                addNote()
            }}
            >
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </view>
    )
 }