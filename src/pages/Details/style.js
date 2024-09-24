import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#faf9f0"
 },

 label: {
    width: "90%",
    marginTop: 20,
    marginLeft: 20,
    fontSize:16,
    color: "#a1ab81"
 },

 input: {
    width: "90%",
    marginTop: 10,
    padding: 10,
    height:50,
    marginLeft: "auto"
    marginRight: "auto"
    borderBottomWidth: 1,
    borderBottomColor: "a1ab81"
 },

 buttonNewNote : {
    position: "absolute",
    height:60,
    width:60,
    bottom:30,
    left:20,
    backgroundColor: #a1ab81,
    borderRadius:50,
    justifyContent: "center",
    alignItems: "center"
 },

 iconButton: {
    color: #a1ab81
    fontSize: 16,
    fontWeight: "bold",
 },
});

export default styles