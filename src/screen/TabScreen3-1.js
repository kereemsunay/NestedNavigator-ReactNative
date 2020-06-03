import React, { Component } from 'react'
import { Text, View ,StyleSheet,Button} from 'react-native'

export default class TabScreen3One extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> TabScreen3One </Text>
                <Button title='TabScreen3-2' onPress={()=>this.props.navigation.navigate('TabScreen3Two')} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    }
})

