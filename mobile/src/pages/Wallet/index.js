import React, { useState } from 'react';
import { Ionicons, Feather, Fontisto, FontAwesome5  } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { realizarPagamentos, extratoAmeDigital, menu } from  '../../assets/Constants/index'

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  PaymentList,
  PaymentItem,
  PaymentHeader,
  PaymentImage,
  PaymentTitle,
  PaymentDescription,
  EyeButton,
  ExtractList,
  ExtractHeader,
  ExtractTitle,
  ExtractDate,
  ExtractValue,
  ExtractItem

} from './styles';

export default function Wallet() {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }
  
  return (
    <Wrapper>
      <Header

        colors={
          useBalance
            ? ['#E8005A', '#160085']
            : ['#D3D3D3', '#868686']
        }
        start={[0,0.3]}
      >
        <HeaderContainer>
        

          <BalanceContainer>
          <Title>Saldo Ame Digital de 
</Title>
            <Value>
              R$ <Bold>{isVisible ? '1234,34' : '----'}</Bold>
            </Value>
            <EyeButton onPress={handleToggleVisibility}>
              <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
            </EyeButton>
          </BalanceContainer>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>
          Utilizar saldo nos pagamentos
        </UseBalanceTitle>

        <Switch
          value={useBalance} 
          trackColor={{true: '#160085', false: '#D3D3D3'}}
          thumbColor={useBalance ? "#FAFAFA" : "#CCC"}
          onValueChange={handleToggleUseBalance}

        />
      </UseBalance>

    <PaymentMethods>
      <PaymentMethodsTitle>
        Bem vindo ao Ame confia 
      </PaymentMethodsTitle>
      </PaymentMethods>

      <PaymentMethods>
        

        <PaymentList
          data={menu}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
          <PaymentItem key={item.id} 
          
          onPress={

            () => navigation.navigate('Extrato') 
                         }
          >
            <item.lib name={item.icon} style={{color:'#FFF'}} size={20} /> 
            <PaymentHeader >
              <PaymentTitle>{item.title}</PaymentTitle>
              <PaymentDescription>{item.description}</PaymentDescription>
            </PaymentHeader>
            <Ionicons name="ios-arrow-forward" size={15}/>   
          </PaymentItem>
          )}
        />
        

      </PaymentMethods>
    </Wrapper>
  );
}