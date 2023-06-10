import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const RegistrationScreen = ({ toggle }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/images/backgroundPhoto.jpeg")}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.registrationContainer}>
            <View style={styles.avatarContainer}>
              <Image style={styles.avatar} />
              <TouchableOpacity style={styles.addAvatarButton}>
                <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={{ marginBottom: 16 }}>
              <View>
                <TextInput
                  placeholder="Логін"
                  style={{ ...styles.input, marginBottom: 16 }}
                />
              </View>
              <View>
                <TextInput
                  placeholder="Адреса електронної пошти"
                  style={{ ...styles.input, marginBottom: 16 }}
                  keyboardType="email-address"
                />
              </View>
              <View style={{ marginBottom: 43, position: "relative" }}>
                <TextInput
                  placeholder="Пароль"
                  style={styles.input}
                  secureTextEntry={true}
                />
                <TouchableOpacity style={styles.showPasswordButton}>
                  <Text style={styles.showPasswordButtonText}>Показати</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.registerButtonContainer}>
                <Text style={styles.registerButtonText}>Зареєстуватися</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.logInButtonContainer}
              onPress={toggle}
            >
              <Text style={styles.logInButtonText}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  registrationContainer: {
    position: "relative",

    paddingTop: 92,
    paddingHorizontal: 16,

    height: 549,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarContainer: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -48 }],
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addAvatarButton: {
    position: "absolute",
    right: -12,
    bottom: 14,
  },
  title: {
    marginBottom: 32,

    // fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,

    color: "#212121",
  },

  input: {
    paddingLeft: 16,

    height: 50,

    // fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  showPasswordButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  showPasswordButtonText: {
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },
  registerButtonContainer: {
    display: "flex",
    justifyContent: "center",

    height: 51,
    paddingLeft: 32,
    paddingRight: 32,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  registerButtonText: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,

    color: "#fff",
  },
  logInButtonText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    color: "#1B4371",
  },
});
