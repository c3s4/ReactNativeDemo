/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
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
        <View style={styles.elementsContainer}>
          <View style={styles.elementsLeftColumn}>
            <FileBox title="ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone ciaone " />
            <FileBox />
            <FileBox />
          </View>
          <View style={styles.elementsRightColumn}>
            <FileBox />
            <FileBox />
          </View>
        </View>
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

class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
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
