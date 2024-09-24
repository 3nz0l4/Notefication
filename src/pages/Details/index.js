import , {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import  from "./style"
import database from "../../config/firebaseconfig"


 export default function Details ({navigation, route}){
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const idNote = route.params.id

    function editNote(description, id) {
        database.collection("Tasks").doc(id).update({
            description: descriptionEdit,
        })
        navigation.navigate("Note")
    }

    return(
        <view style={styles.container}>
            <Text style={styles.label}>Description</Text>  
            <TextInput
                style={styles.input}
                placeholder="Insira sua nota aqui"
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
            />

            <TouchableOpacity 
            style={styles.buttonNewTask}
            onPress={()=>{
                editNote(descriptionEdit, idNOte)
            }}
            >
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </view>
    )
 }