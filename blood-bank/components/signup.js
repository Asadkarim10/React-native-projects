import React from 'react';

import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <ImageBackground 
          source={require('./images/blood.jpg')} 
          style={styles.container}>

          <View style={styles.imgWrapper}>
              <Image 
                source={require('./images/blood.jpg')} 
                style={styles.img} />
                <Text style={styles.txt}>heartlink</Text>
          </View>

          
              <View style={styles.btnWrapper}>
                <TouchableHighlight style={styles.btn}
                >
                  <Text style={styles.col}>SIGN UP</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.btn}>
                  <Text style={styles.col}>LOGIN</Text>
                </TouchableHighlight>
              </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  imgWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: '20%',
    height: '20%'
  },
  txt: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '100'
  },
  btnWrapper: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 250,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 5,
    backgroundColor: 'rgba(255,0,0,0.5)'
  },
  col: {
    color: '#fff'
  }
});