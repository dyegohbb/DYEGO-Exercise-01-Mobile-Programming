import * as React from "react";
import { ListItem, Avatar, Icon} from "react-native-elements";
import { TouchableHighlight, Text, View, Dimensions } from "react-native";

function getPhone(){
  const min = 1000
  const max = 9999
  var first = min + Math.random() * (max - min);
  var last = min + Math.random() * (max - min);
  phone = "(81) 9" + first.toFixed() + "-" + last.toFixed()

  return phone
}
const width = Dimensions.get('window').width;

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
];

function UserList ({route, navigation}) {
  return (
    <View style={{width: 1000, alignSelf:"center"}}>
      <View style={{flexDirection: "row-reverse"}}>
        <Icon
          size={30}
          name='plus'
          type='font-awesome'
          color='black'
          onPress={() => navigation.navigate('ContactRegister', {editing: false})} />
      </View>
    {contatos.map((l,i) => (
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
            uri: l.imgUrl,
          }}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text>{l.name}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            <Text>{l.phone}</Text>
          </ListItem.Subtitle>
          <ListItem.Subtitle>
            <Text>{l.email.toLowerCase()}</Text>
          </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
    ))}
    </View>
  )
};


export default UserList;