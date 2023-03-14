import React from "react";
import {View, Text} from "react-native";

export default function ColorBox({name, color}) {
	const boxColor = {
		backgroundColor: color,
	}
	return (
		<View style={[styles.box, boxColor]}>
			<Text style={styles.text}>{name}: {color}</Text>
		</View>
	)
}

const styles = {
	box: {
		width: '100%',
		padding: 8,
		borderRadius: 4,
		alignItems: 'center'
	},
	text: {
		fontSize: 16,
		color: 'white',
	}
}