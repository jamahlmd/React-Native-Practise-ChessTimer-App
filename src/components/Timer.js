import React, {Component} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';
import { AsyncStorage } from "react-native"
import LoseScreen from "./LoseScreen";



export default class Timer extends Component {
    state = {
        start: 0,
        timerOne: 0,
        timerTwo: 0,
        turn: undefined,
    };

    componentDidMount = () => {
      this.setState({
          start: this.props.timer,
          timerOne: this.props.timer * 60000,
          timerTwo: this.props.timer * 60000
      });
    };

    timerSwitch = (player) => {


        if(this.state.turn !== player){
            if(player === 'playerOne'){

                let remainingSeconds = AsyncStorage.getItem('playerTwo');

                remainingSeconds.then((_55) => {

                    this.setState({timerTwo:_55});
                });

            } else if (player === 'playerTwo'){

                let remainingSeconds = AsyncStorage.getItem('playerOne');

                remainingSeconds.then((_55) => this.setState({timerOne:_55}));


            }
        }
            this.setState({turn:player});

    };

    sendEndTime = (remainingSeconds,player) => {

        try {
             AsyncStorage.setItem(player, remainingSeconds.toString());
        } catch (error) {
            console.log(error);
        }

    };

    render(){


        const nextRoute = {
            component: LoseScreen,
            title: 'You Lost',
            passProps: {
                loser: this.state.turn,
                playerTwo: this.props.playerOne,
                playerOne: this.props.playerTwo
            },
        };

        return (
            <View style={styles.viewStyles}>
                <TouchableOpacity
                    onPress={ () => this.timerSwitch('playerTwo')}
                    disabled={this.state.turn == 'playerTwo' ? true : false}
                    style={[styles.buttonStyles, this.state.turn == 'playerOne' && styles.running]}
                    title={this.state.timerOne}
                >
                    <Text style={[styles.textStyles, this.state.turn == 'playerOne' && styles.running]}>
                        <TimerCountdown
                            initialSecondsRemaining={this.state.timerOne}
                            interval={this.state.turn == 'playerOne' ? 1000 : 999*999}
                            onTick={secondsRemaining => {this.sendEndTime(secondsRemaining,'playerOne')}}
                            onTimeElapsed={ () => {
                                this.setState({turn:undefined});
                                this.props.navigator.push(nextRoute);
                            }}
                            allowFontScaling={true}
                            style={{ fontSize: 60, fontWeight:'bold' }}
                        />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ () => this.timerSwitch('playerOne')}
                    disabled={this.state.turn == 'playerOne' ? true : false}
                    style={[styles.buttonStyles2, this.state.turn == 'playerTwo' && styles.running]}
                    title={this.state.timerTwo}
                >
                    <Text style={[styles.textStyles, this.state.turn == 'playerTwo' && styles.running]}>
                        <TimerCountdown
                            initialSecondsRemaining={this.state.timerTwo}
                            interval={this.state.turn == 'playerTwo' ? 1000 : 999*999}
                            onTick={secondsRemaining => {this.sendEndTime(secondsRemaining,'playerTwo')}}
                            onTimeElapsed={ () => {
                                this.setState({turn:undefined});
                                this.props.navigator.push(nextRoute);
                            }}
                            allowFontScaling={true}
                            style={{ fontSize: 60, fontWeight:'bold' }}
                        />
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}



const styles = {
    viewStyles:{
        marginTop:64,
        backgroundColor: '#333',
        flex: 1,
        flexDirection:'column'
    },
    buttonStyles:{
        flex: 1,
        transform: [{ rotate: '180deg'}],
        backgroundColor: '#333',
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonStyles2:{
        justifyContent:'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#333',
    },
    textStyles:{
        color: '#fff',
        fontSize: 40
    },
    running:{
        backgroundColor:'#f23456',
        color: '#333'
    }
};