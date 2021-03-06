import React from "react";
import { useNavigation } from "@react-navigation/core"; 
import { TouchableOpacity, View} from "react-native";
import tw from 'tailwind-react-native-classnames';
import { FontAwesome } from '@expo/vector-icons';

const AccountOptions = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`mt-8 top-8`}>
      <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
      <FontAwesome name="user-circle" size={40} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default AccountOptions