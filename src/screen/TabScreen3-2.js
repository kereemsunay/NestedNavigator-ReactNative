import React, { Component } from 'react'
import { Text, StyleSheet, View,Button } from 'react-native'

export default class TabScreen3Two extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> TabScreen3Two </Text>
                <Button title='TabScreen3-1 Back' onPress={()=>this.props.navigation.navigate('TabScreen3One')} />

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
