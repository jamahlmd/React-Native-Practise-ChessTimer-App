import React, {Component} from 'react';
import {View,TextInput,Text,TouchableOpacity} from 'react-native';
import InputForm from './InputForm';


class NameInput extends Component{
    state = {
        playerOne: 'Jamahl',
        playerTwo: 'Shaquille'
    };

    render(){

        const nextRoute = {
            component: InputForm,
            title: 'Tijd Kiezen',
            passProps: {
                    playerOne: this.state.playerOne,
                    playerTwo: this.state.playerTwo,
                },
        };

        return (
            <View style={styles.viewStyles}>
                <View style={styles.containerStyle}>
                    <Text style={styles.labelStyle}>Player One</Text>
                    <TextInput
                        keyboardType={'default'}
                        style={styles.inputStyle}
                        label="Player one"
                        value={this.state.playerOne}
                        onChangeText={text => this.setState({playerOne:text})}
                        placeholder="Player One"
                    />
                    <Text style={styles.labelStyle}>Player Two</Text>
                    <TextInput
                        keyboardType={'default'}
                        style={styles.inputStyle}
                        label="Player Two"
                        value={this.state.playerTwo}
                        onChangeText={text => this.setState({playerTwo:text})}
                        placeholder="Player Two"
                    />
                    <TouchableOpacity
                        onPress={ () => this.props.navigator.push(nextRoute)}
                    >
                        <Text style={{textAlign: 'center', fontSize: 20, color: '#fff'}}>Go</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = {
    viewStyles: {
        marginTop: 64,
        backgroundColor: '#333',
        flex: 1,
        flexDirection: 'column'
    },
    inputStyle: {
        color: '#fff',
        paddingRight: 5,
        paddingLeft: 20,
        fontSize: 28,
        textAlign: 'center',
        lineHeight: 23,
        flex:1
    },
    containerStyle: {
        flex:1,
        marginBottom: 300,
    },
    labelStyle: {
        color: '#000',
        fontSize: 38,
        paddingLeft: 20,
        flex: 1,
        textAlign: 'center'
    },
};

export default NameInput;