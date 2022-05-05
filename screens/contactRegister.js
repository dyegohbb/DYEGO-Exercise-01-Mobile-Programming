import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Input, Button, Overlay, Avatar } from "react-native-elements";


function ContactRegister({ route, navigation }) {
  const { editing } = route.params;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "collumn",
        backgroundColor: "#dce9e7",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 100,
      }}
    >
      <View style={{ alignItems: "center", paddingTop: 50 }}>
        {editing != false ? 
        (
          <Avatar 
            size={150} 
            rounded 
            source={{ uri: editing.imgUrl }} />
        ) : 
        (
          <Icon
            style={{}}
            raised
            size={60}
            name="alien-outline"
            type="material-community"
            color="grey"
          />
        )}
      </View>
      <View style={{ height: 150, width: 300, paddingTop: 10 }}>
        {editing != false ? (<Input placeholder="Name" value={editing.name}/>) : (<Input placeholder="Name"/>)}
        {editing != false ? (<Input placeholder="E-mail" value={editing.email}/>) : (<Input placeholder="E-mail"/>)}
        {editing != false ? (<Input placeholder="Celular" value={editing.phone}/>) : (<Input placeholder="Phone"/>)}
        {editing != false ? (<Input placeholder="Image (URL)" value={editing.imgUrl}/>) : (<Input placeholder="Image (URL)"/>)}
        <View style={{ flexDirection: "row" }}>
          <Button
            title="Register User"
            buttonStyle={{
              borderColor: "#f4f4f4",
              backgroundColor: "#f4f4f4",
              borderRadius: 3,
            }}
            containerStyle={{
              width: 100,
              marginHorizontal: 10,
              marginVertical: 10,
              marginLeft: 40,
            }}
            titleStyle={{ color: "grey" }}
            onPress={() => navigation.navigate("UserList")}
          />
          <Button
            title="Cancel"
            buttonStyle={{
              backgroundColor: "#f4f4f4",
              borderRadius: 3,
            }}
            containerStyle={{
              width: 100,
              marginHorizontal: 10,
              marginVertical: 10,
            }}
            titleStyle={{ color: "grey" }}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
      <View style={{ backgroundColor: "aqua", alignItems: "center" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  label: {
    marginRight: 10,
  },
});

export default ContactRegister;
