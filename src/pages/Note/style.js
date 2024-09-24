import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: #faf9f0,
        paddingTop: 20
},

Notes: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:5
},

deleteNote: {
    justifyContent: "center",
    paddingLeft: 150
},

descriptionNote: {
    width: "75%",
    alignContent: "flex-start",
    backgroundColor: "#faf9f0",
    padding: 12
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    color: "#d4a373",
},
buttonNewNote: {
    position: "absolute",
    height:60,
    width:60,
    bottom:30,
    left:20,
    backgroundColor: #a1ab81,
    borderRadius:50,
    justifyContent: "center",
    alignItems: "center"
}

 iconButton: {
    color: #a1ab81
    fontSize: 25,
    fontWeight: "bold",
 },
});

export default styles