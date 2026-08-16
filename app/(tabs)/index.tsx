import { styles } from "@/app/styles/main";
import { Input } from "@/components/ui/Input";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.View}>
            <Text
              style={{ fontSize: 30, fontWeight: "bold", marginBottom: 40 }}
            >
              Login
            </Text>
            <Input
              placeholder="Username"
              icon="person-sharp"
              style={{ marginLeft: 10, width: "80%" }}
            />
            <Input
              placeholderTextColor="red"
              placeholder="Password"
              icon="lock-closed-sharp"
              style={{ color: "red", marginLeft: 10, width: "80%" }}
              secureTextEntry={true}
            />
            <Text style={{ color: "blue", fontSize: 16 }}>Show password</Text>
            <TouchableOpacity style={styles.button}>
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
