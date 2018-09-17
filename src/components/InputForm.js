import React, {Component} from 'react';
import {View, Text, Picker, TouchableOpacity } from 'react-native';
import Timer from './Timer';

export default class InputForm extends Component{
    state = {
        timer: 1
    };

    render(){

        const nextRoute = {
            component: Timer,
            title: 'Timer',
            passProps: {
                timer: this.state.timer,
                playerOne: this.props.playerOne,
                playerTwo: this.props.playerTwo
            },
        };

        return(
            <View style={styles.viewStyles}>
                <TouchableOpacity
                    style={styles.TouchableOpacity}
                    onPress={() => this.props.navigator.push(nextRoute)}
                >
                    <Text style={styles.textStyles}>
                            Bevestig
                    </Text>
                </TouchableOpacity>
                <View style={{flex:1}}>
                    <Picker
                        itemStyle={{ color: '#ffffff' }}
                        selectedValue={this.state.timer}
                        onValueChange={(itemValue, itemIndex) => this.setState({timer: itemValue})}>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                        <Picker.Item label="10" value="10" />
                    </Picker>
                </View>
            </View>
        )
    }
}


const styles = {
    viewStyles:{
        backgroundColor: '#333',
        flex: 1,
        marginTop: 63
    },
    buttonStyles:{
        flex: 1
    },
    pickerContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },TouchableOpacity:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },textStyles:{
        color: '#fff',
        fontSize: 25
    }

};