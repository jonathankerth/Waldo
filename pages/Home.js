import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function HomePage () {

    return(
      <View style={styles.container}>
        <Text>Map Page</Text>
        <Text style={{color:'blue'}}>Lots of map stuff
            <Text style={{color:'green'}}> around here</Text>
        </Text>   
      </View>
    )
  
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });