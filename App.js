import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ColorBox from "./components/ColorBox";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Aqui estão umas caixas de cores diferentes!</Text>
			<ColorBox name={"Cyan"} color={"#2aa198"}/>
			<ColorBox name={"Blue"} color={"#268bd2"}/>
			<ColorBox name={"Magenta"} color={"#d33682"}/>
			<ColorBox name={"Orange"} color={"#cb4b16"}/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		gap: 8,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	title: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 18
	},
});
