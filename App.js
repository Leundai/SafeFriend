/**
* Helo
*/

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class Greeting extends Component {
  render() {
  	let pic = {
  		uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  	};
    return (
    	<View>
    		<Text> Hello {this.props.name}!</Text>
    		<Image source={pic} style={{width: 193, height: 110}} />
    	</View>
    );
  }
}

export default class LotsOfGreetings extends Component {
	render() {
		return (
			<View style={{alignItems: 'center', top: 50}}>
				<Greeting name='Rexar' />
				<Greeting name='Jaina' />
				<Greeting name='Valeera' />
			</View>
		);
	}
}