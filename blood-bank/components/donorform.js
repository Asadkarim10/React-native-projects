import React from 'react';
//import './donorform.css';

import { StyleSheet,  Text, View, ImageBackground,TextInput, TouchableHighlight, Image,Picker, Button } from 'react-native';
//import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';


 class Donor  extends React.Component {
   
  render(){
     return (
      <View  >
         <Text style = {styles.Container} >Blood Donating Form </Text>
         <Text>Name </Text>
         <TextInput  />
         <Text>Father Name </Text>
         <TextInput  />
         <Text>Hospital Name  </Text>
         <TextInput  />
         <Text>Age  </Text>
         <TextInput type="Number"  required="required"/>
         <Text>Weight </Text>
         <TextInput type="Number"  required="required"/>         
         <Text>Blood-Group</Text> 
      <Picker>
        <Picker.Item label="AB" value="AB" />
        <Picker.Item label="A+" value="A+" />
        <Picker.Item label="A-" value="A-" />
        <Picker.Item label="A" value="A" />
        <Picker.Item label="B+" value="B+" />
        <Picker.Item label="B" value="B" />
        <Picker.Item label="B-" value="B-" />
        <Picker.Item label="O+" value="O+" />
        <Picker.Item label="O-" value="O-" />  
      </Picker> 
         <Text>Contact Number</Text>
         <TextInput   type="Number"   required="required"/>
          <Text>Residential Address    </Text>
          <TextInput   type="text"   multiline={true}   required="required"/>
         <Text>City</Text>
      <Picker>
        <Picker.Item label="Karachi" value="Karachi" />
        <Picker.Item label="Islamabad" value="Islamabad" />
        <Picker.Item label="Peshawar" value="Peshawar" />
        <Picker.Item label="Quetta" value="Quetta" />
        <Picker.Item label="Lahore" value="Lahore" />  
      </Picker>
      <Button 
            title="Submit"
         //   onPress={}
            /> 
    </View>)
   }
 }
 

export default Donor; 



const styles = StyleSheet.create({
   Container : {
color: "red",
alignItems: 'center'
   }
})  