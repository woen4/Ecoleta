import React, { useState, useEffect } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import RNPickerSelect from "react-native-picker-select";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

interface IBGEUFresponse {
  sigla: string;
}

interface IBGECityresponse {
  nome: string;
}

interface cityORuf {
  label: string;
  value: string;
}

const Home = () => {
  const navigation = useNavigation();
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedUF, setSelectedUF] = useState("");
  const [citys, setCitys] = useState<cityORuf[]>([]);
  const [ufs, setUfs] = useState<cityORuf[]>([]);

  useEffect(() => {
    axios
      .get<IBGEUFresponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => ({
          label: uf.sigla,
          value: uf.sigla,
        }));
        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    axios
      .get<IBGECityresponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios`
      )
      .then((response) => {
        const cityNames = response.data.map((city) => ({
          label: city.nome,
          value: city.nome,
        }));
        setCitys(cityNames);
      });
  }, [selectedUF]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ImageBackground
        source={require("../../assets/home-background.png")}
        resizeMode="contain"
        imageStyle={{ height: 368, width: 274 }}
        style={styles.container}
      >
        <View style={styles.main}>
          <Image source={require("../../assets/logo.png")}></Image>
          <View>
            <Text style={styles.title}>
              Seu marketplace de coleta de resíduos
            </Text>
            <Text style={styles.description}>
              Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente{" "}
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.input}>
            <RNPickerSelect
              placeholder={{ label: "Selecione um estado" }}
              onValueChange={(city) => {
                setSelectedUF(city);
              }}
              items={ufs}
            />
          </View>

          <View style={styles.input}>
            <RNPickerSelect
              placeholder={{ label: "Selecione uma cidade" }}
              onValueChange={(city) => {
                setSelectedCity(city);
              }}
              items={citys}
            />
          </View>
          <RectButton
            style={styles.button}
            onPress={() => {
              navigation.navigate("Points", { selectedUF, selectedCity });
            }}
          >
            <View style={styles.buttonIcon}>
              <Icon name="arrow-right" size={24} color="#fff"></Icon>
            </View>
            <Text style={styles.buttonText}>
              <Text>Entrar</Text>
            </Text>
          </RectButton>
          <Text style={styles.credites}>Kaio Woen && RocketSeat</Text>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingBottom: 10,
  },
  credites: {
    color: "#555",
    textAlign: "center",
    fontSize: 12,
    marginTop: 8,
    fontFamily: "Roboto_400Regular",
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#322153",
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 16,
    fontFamily: "Roboto_400Regular",
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 9,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#34CB79",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
});

export default Home;
