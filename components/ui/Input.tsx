import { TextInput, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

type InputProps = {
  placeholderTextColor?: string;
  placeholder: string;
  style?: object;
  icon?: React.ComponentProps<typeof Ionicons>['name']
  secureTextEntry?: boolean;  
};

export function Input({ placeholderTextColor, placeholder, style, icon, secureTextEntry=false }: InputProps) {
  return (
    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 10, marginLeft: 70, width: '100%'}}>
        <Ionicons name={icon } size={20} color="black" />
        <TextInput 
            placeholderTextColor={placeholderTextColor} 
            style={style}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
        />
    </View>
  )
}