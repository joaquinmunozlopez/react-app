import { StyleSheet, SafeAreaView, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './pages/StartGameScreen';
import { useState } from 'react';
import { useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds ] = useState(0)

  const [loaded] = useFonts({ EduBold: require('./assets/fonts/Edu-Bold.ttf') , EduRegular: require('./assets/fonts/Edu-Regular.ttf'), EduMedium: require('./assets/fonts/Edu-Medium.ttf'), EduSemiBold: require('./assets/fonts/Edu-SemiBold.ttf')})

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  const handlerRestart = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  let content = <StartGameScreen onStartGame={handlerStartGame} />

  if(!loaded) return <AppLoading />

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Adivina el numero'} />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});