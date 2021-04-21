import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useMutation} from 'react-query';
import {RegisterHandler} from '../../api/auth';
import {Container, Content} from '../../components/containers';
import Input from '../../components/input';
import Button from '../../components/touchables/Button';
import {handelAuthErrors, SaveUserDataHandler} from '../../constants/helpers';
import styles from './styles';

const Register = () => {
  const [state, setstate] = useState({
    email: '',
    password: '',
    displayName: '',
  });
  const {goBack, reset} = useNavigation();

  const mutation = useMutation(body => RegisterHandler(body), {
    onSuccess: data => {
      if (data?.error) {
        handelAuthErrors(data?.error.errors[0]);
      } else {
        SaveUserDataHandler(data);
        reset({index: 0, routes: [{name: 'Home'}]});
      }
    },
  });

  const onSubmitHandler = () => {
    mutation.mutate(state);
  };

  return (
    <Container>
      <Content paddingVertical>
        <Input
          options={{
            placeholder: 'name',
            value: state.displayName,
            onChangeText: text => {
              setstate(old => ({...old, displayName: text}));
            },
          }}
        />
        <Input
          options={{
            placeholder: 'Email',
            value: state.email,
            onChangeText: text => {
              setstate(old => ({...old, email: text}));
            },
          }}
        />
        <Input
          options={{
            placeholder: 'password',
            secureTextEntry: true,
            onSubmitEditing: onSubmitHandler,
            value: state.password,
            onChangeText: text => {
              setstate(old => ({...old, password: text}));
            },
          }}
        />
        <Button
          title="Submit"
          onPress={onSubmitHandler}
          loader={mutation.isLoading}
        />
        <TouchableOpacity
          style={styles.switchContainer}
          onPress={() => {
            goBack();
          }}>
          <Text style={styles.switchText}>Login</Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

export default Register;
