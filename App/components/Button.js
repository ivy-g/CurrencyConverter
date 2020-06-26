import React from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    

} from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
button: {

flexDirection: "row",
alignItems: "center",
justifyContent: "center",
marginVertical: 20,
},

buttonIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
},
buttonText: {
    fontSize: 15,
color: colors.white,
}

});
export const Button = ({onPress, text}) => {
  


  return (

      <TouchableOpacity style={styles.button} onPress={onPress}>
          <Image
          source={require('../assets/images/reverse.png')}
          style={styles.buttonIcon}
          resizeMode="contain"
          
          />
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
     
 
  );
};
