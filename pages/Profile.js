import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

export default function HomePage () {

    return(
      <View style={styles.container}> 
        <View style={styles.topDiv}>
            <Image
                style={styles.logo}
                source={{
                    // uri: 'https://www.google.com/url?sa=i&url=https%https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile-logo&psig=AOvVaw0EWL_Kzvz5AP6fV_-D7X2u&ust=1689752886531000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKCvnpbil4ADFQAAAAAdAAAAABAE3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-ngegq&psig=AOvVaw2WaIIAp7cAMhOfHRQCEB8D&ust=1689752571437000&source=images&cd=vfe&opi=89978449&ved=0CA0QjRxqFwoTCNCVmYDhl4ADFQAAAAAdAAAAABAJ'                
                    // uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile-logo&psig=AOvVaw0EWL_Kzvz5AP6fV_-D7X2u&ust=1689752886531000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKCvnpbil4ADFQAAAAAdAAAAABAE'
                    uri: 'https://reactnative.dev/img/tiny_logo.png'
                }}
                alt='Profile Image'
                blurRadius={1}
            />        
            <Text style={{fontSize: 24}}>Nikoli Tesla</Text>
            <View style={{display: 'flex', flexDirection: 'row', padding: 3}}>
                <Text>following: 3</Text>
                <Text>followers: 6</Text>
            </View>
        </View>   

        <View style={styles.profileContentContainer}>
             <View style={styles.profileContent}>
                <View style={styles.profileStats}>
                    <Text>Join Date: Jan-1-2020</Text>
                </View>
                <View style={styles.profileButtons}>
                    <Button
                        onPress={() => Alert.alert('Open Friends')}
                        title="Friends"
                        color="#841584"
                        accessibilityLabel="View your Friends"
                    />
                    <Button
                        onPress={() => Alert.alert('Open Achievements')}
                        title="Achievements"
                        color="gold"
                        accessibilityLabel="View your Achievements"                
                    />
                    <Button
                        onPress={() => Alert.alert('Open Settings')}
                        title="Settings"
                        color="grey"
                        accessibilityLabel="Edit your Settings"                
                    />
                </View>
            </View>
        </View>
      </View>
    )
  
  }

  const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,        
    },
    topDiv: {
        flex: 1,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        // width: 180,
        alignSelf:'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileContentContainer: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',        
    },
    profileContent : {
        display: 'flex',
        justifyContent: 'flex-start',
        textAlign: 'center',
        // flexDirection: 'row',        
        height: '100%',
        width: '80%',
        padding: 15,
    },
    profileStats: {
        flex: 1,

        borderWidth: 0.5, 
        borderRadius: 10, 
        padding: 25,
        marginBottom: 10,
    },
    profileButtons: {
        flex: 4, 
        justifyContent: 'space-evenly',        

        borderWidth: 0.5,
        borderRadius: 10,
        padding: 25
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
  });