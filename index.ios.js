/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Text,
  View
} from 'react-native';

class ReactNativeDemo extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>
            The Main Screen
          </Text>
        </View>
        <GreetingsContainer />
      </View>
    );
  }
}

class Greetings extends Component {
  render() {
    return (
      <Text style={this.props.style}>
        Hi, {this.props.name}
      </Text>
    );
  }
}

class GreetingsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.gretingsList = [];
  }

  addGreeting(greetingText) {
    console.log('a');
    this.state.gretingsList.push('adsads');
    this.setState({gretingsList: this.state.gretingsList});
  }

  render() {
    const leftCol = [];
    const rightCol = [];
    this.state.gretingsList.forEach((currentGreeting, index) => {
      console.log('culo');
      if ((index % 2) === 0) {
        leftCol.push((<FileBox title={currentGreeting}/>));
      } else {
        rightCol.push((<FileBox title={currentGreeting}/>));
      }
    });
    return (
      <View>
        <View style={styles.addingView}>
          <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} />
          <TouchableHighlight style={styles.button} onPress={this.addGreeting.bind(this)}>
            <Text style={styles.buttonText}> + </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.elementsContainer}>
          <View style={styles.elementsLeftColumn}>
            {leftCol}
          </View>
          <View style={styles.elementsRightColumn}>
            {rightCol}
          </View>
        </View>
      </View>
    );
  }
}

class FileBox extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.fileBox}>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  titleContainer: {
    backgroundColor: '#555555',
    padding: 20
  },
  button: {
    padding:5,
    width: 100,
    maxHeight: 50,
    backgroundColor: '#555555',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 24,
    color: '#F5FCFF'
  },
  elementsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  elementsLeftColumn: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  },
  elementsRightColumn: {
    flex: 1,
    flexDirection: 'column',
    marginRight: 5,
    marginTop: 5
  },
  addingView: {
    flexDirection: 'row',
    height: 60
  },
  fileBox: {
    minHeight: 80,
    backgroundColor: '#888888',
    marginBottom: 5
  },
  hidden: {
    opacity: 0
  },
  mainTitle: {
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 15
  },
  greeting: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
