
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  body : {
    backgroundColor: '#57534e',
  },
  someClass : {
    backgroundColor: 'dodgerblue',
    color: 'white',
    fontSize: 100,
    textAlign: 'center',
  },
});
