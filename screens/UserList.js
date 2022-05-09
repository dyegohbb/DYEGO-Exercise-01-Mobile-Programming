import React, {useEffect, useState} from "react";
import { ListItem, Avatar, Icon} from "react-native-elements";
import { TouchableHighlight, Text, View, Dimensions } from "react-native";
import axios from "axios";

 function getRandomPicture(){
  const min = 1
  const max = 60
  var number = min + Math.random() * (max - min)

  const min2 = 1
  const max2 = 2
  var number2 = min2 + Math.random() * (max2 - min2)
  if (number2.toFixed() == 1){
    return 'https://randomuser.me/api/portraits/women/'+number.toFixed()+'.jpg'
  }else{
    return 'https://randomuser.me/api/portraits/men/'+number.toFixed()+'.jpg'
  }
}

/*
var phone = getPhone();
const contatos = [
  { name: "Dyego H.", email: "dyegohbb@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/men/30.jpg'},
  { name: "Beatriz A.", email: "beatriz@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/women/31.jpg'},
  { name: "Silas M.", email: "silasmel@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/men/32.jpg'},
  { name: "Wanessa H.", email: "Wanessah@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/women/33.jpg'},
  { name: "Paulo P.", email: "Paulo@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/men/34.jpg'},
  { name: "Idelvane H.", email: "Idelvane@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/men/35.jpg'},
  { name: "Leoncio H.", email: "Leoncio@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/men/36.jpg'},
  { name: "Kiara H.", email: "Kiara@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/women/37.jpg'},
  { name: "Paola E.", email: "Paola@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/women/38.jpg'},
  { name: "Heronides J.", email: "Heronides@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/men/39.jpg'},
  { name: "Deivyd H.", email: "Deivyd@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/men/40.jpg'},
  { name: "Davi L.", email: "Davi@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/men/41.jpg'},
  { name: "Michael P.", email: "Michael@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/men/42.jpg'},
  { name: "Emmanuele J.", email: "Emmanuele@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/women/43.jpg'},
  { name: "Gabriele S.", email: "Gabriele@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/women/44.jpg'},
  { name: "Pedro A.", email: "Pedro@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/men/45.jpg'},
  { name: "Daniela M.", email: "Daniela@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/women/46.jpg'},
  { name: "Graziele J.", email: "Graziele@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/women/47.jpg'},
  { name: "Kátia S.", email: "Katia@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/women/48.jpg'},
  { name: "Osvaldo G.", email: "Osvaldo@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/men/49.jpg'},
  { name: "Robson T.", email: "Robson@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/men/50.jpg'},
  { name: "Miranha S.", email: "Miranha@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/men/51.jpg'},
  { name: "Ester F.", email: "Ester@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/women/52.jpg'},
  { name: "Renata S.", email: "Renata@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/women/53.jpg'},
  { name: "Maria K.", email: "Maria@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/women/54.jpg'},
  { name: "Lucas H.", email: "Lucas@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/men/55.jpg'},
  { name: "Davison V.", email: "Davison@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/men/56.jpg'},
  { name: "Maiara F.", email: "Maiara@gmail.com", phone: getPhone(), imgUrl:'https://randomuser.me/api/portraits/women/57.jpg'},
]; */

var contatos = [];
async function fetchClientes() {
  contatos = await axios
    .get("http://professornilson.com/testeservico/clientes")

    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

fetchClientes();

function UserList ({route, navigation}) {
  var clientes = contatos.data;
  return (
    <View style={{width: 1000, alignSelf:"center"}}>
      <View style={{flexDirection: "row-reverse"}}>
        <Icon
          size={30}
          name='plus'
          type='font-awesome'
          color='black'
          onPress={() => navigation.navigate('ContactRegister', {editing: false})} />
          <Icon
          style={{marginRight: 10}}
          size={30}
          name='home'
          type='font-awesome'
          color='black'
          onPress={() => navigation.navigate('Home')} />
      </View>
    {clientes.map((l,i) => (
      <ListItem
      Component={TouchableHighlight}
      containerStyle={{}}
      onPress={() => navigation.navigate('ContactRegister', {editing: l})}
      pad={20}
      key={i}
    >
        <Avatar
          size={50}
          rounded
          source={{
            uri: getRandomPicture(),
          }}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text>{l.nome}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            <Text>{l.telefone}</Text>
          </ListItem.Subtitle>
          <ListItem.Subtitle>
            <Text>{l.email}</Text>
          </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
    ))}
    </View>
  )
};


export default UserList;