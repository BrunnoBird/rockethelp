import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { VStack } from 'native-base';
import firestore from '@react-native-firebase/firestore';

import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';

export function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [patrimony, setPatrimony] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  function handleNewOrderRegister() {
    if(!patrimony || !description) {
      return Alert.alert('Registrar', 'Preencha todos os campos.');
    }

    setIsLoading(true);

    firestore()
    .collection('orders')
    .add({
      patrimony,
      description,
      status: 'open',
      created_at: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        Alert.alert('Solicitação', "Solicitação registrada com sucesso.");
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        return Alert.alert('Solicitação', 'Não foi possível registrar o pedido.')
      });
  }

  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova Solicitação"/>

      <Input 
        placeholder='Número do patrimônio'
        mt={4}
        onChangeText={setPatrimony}
      />

      <Input 
        placeholder='Descrição do problema'
        onChangeText={setDescription}
        flex={1}
        mt={5}
        multiline
        textAlignVertical="top"
      />

      <Button 
        title="Cadastrar"
        mt={5}
        isLoading={isLoading}
        onPress={handleNewOrderRegister}
      />
    </VStack>
  );
}