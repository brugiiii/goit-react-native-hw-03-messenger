import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export const LoginScreen = ({ toggle }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/images/backgroundPhoto.jpeg")}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.authorizeContainer}>
            <Text style={styles.title}>Увійти</Text>

            <View>
              <View style={{ marginBottom: 16 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor={"#BDBDBD"}
                  keyboardType="email-address"
                />
              </View>
              <View style={{ marginBottom: 43, position: "relative" }}>
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={true}
                />
                <TouchableOpacity style={styles.showPasswordButton}>
                  <Text style={styles.showPasswordButtonText}>Показати</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.logInButton}>
                <Text style={styles.logInButtonText}>Увійти</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.registrationButton}
              onPress={toggle}
            >
              <Text style={styles.registrationButtonText}>
                Немає акаунту?
                <Text style={{ textDecorationLine: "underline" }}>
                  Зареєструватися
                </Text>
              </Text>
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
    backgroundColor: "#fff",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  authorizeContainer: {
    paddingTop: 32,
    paddingHorizontal: 16,

    height: 489,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginBottom: 33,

    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",

    color: "#212121",
  },

  input: {
    height: 50,
    paddingLeft: 16,

    color: "#212121",
    fontSize: 16,
    lineHeight: 19,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
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
  logInButton: {
    justifyContent: "center",
    alignItems: "center",

    height: 51,
    marginBottom: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  logInButtonText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  registrationButton: {},
  registrationButtonText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    color: "#1B4371",
  },
});
