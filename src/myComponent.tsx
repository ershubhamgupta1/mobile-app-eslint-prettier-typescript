import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    console.log("fdgdfgd");
  return (
    <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'grey',
    flex: 1,
    justifyContent: 'center',
  },
});
