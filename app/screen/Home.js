/**
 * Created by slash on 26/4/17.
 */

import React from 'react';
import {
	Button,
	View,
} from 'react-native';

const HomeComponent = ({navigation}) => (
	<View
		style={{
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		}}
	>
		<Button
			title="Puppy"
			onPress={() => navigation.navigate('Puppy')}
		/>
		<Button
			title="Cat"
			onPress={() => navigation.navigate('Cat')}
		/>
		<Button
			title="Cat and Puppy"
			onPress={() => navigation.navigate('CatAndPuppy')}
		/>
	</View>
);

HomeComponent.navigationOptions = {title: 'Home'};

export default HomeComponent;
