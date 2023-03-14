import React from "react";
import {View, Text} from "react-native";

export default function ColorBox({name, color}) {
	const boxColor = {
		backgroundColor: color,
	}
	const textColor = {
		color: parseInt(color.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white'
	}
	return (
		<View style={[styles.box, boxColor]}>
			<Text style={[styles.text, textColor]}>{name}: {color}</Text>
		</View>
	)
}

const styles = {
	box: {
		width: '100%',
		padding: 12,
		marginBottom: 8,
		borderRadius: 4,
		alignItems: 'center'
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
	}
}