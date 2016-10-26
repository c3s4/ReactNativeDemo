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
  ListView,
  Text,
  ScrollView,
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
    const dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    this.state = {};
    this.gretingsList = [];
    this.state.dataSource = dataSource.cloneWithRows([]);
  }

  addGreeting(greetingText) {
    this.gretingsList.push(Math.random());
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.gretingsList)
    });
  }

  addRemoteGreeting() {
    fetch('http://localhost:8888', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      var tmp = this.gretingsList.slice();
      this.gretingsList = [].concat(jsonResponse.a, tmp);
      this.gretingsList;
      console.log(this.gretingsList);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.gretingsList)
      });
    });

  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.addingView}>
          <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} />
          <TouchableHighlight style={styles.button} onPress={this.addRemoteGreeting.bind(this)}>
            <Text style={styles.buttonText}> + </Text>
          </TouchableHighlight>
        </View>
        <ListView
          style={styles.elementsContainer}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <FileBox title={rowData}/>}
        />
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
    flex: 1
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
