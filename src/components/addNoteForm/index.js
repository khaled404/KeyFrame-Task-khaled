import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useGetUserData} from '../../constants/helpers';
import Input from '../input';
import styles from './styles';
import PropTypes from 'prop-types';
import Button from '../touchables/Button';

const AddNoteForm = ({onSubmit}) => {
  const userData = useGetUserData();
  const [value, setvalue] = useState('');
  const onSubmitHandler = () => {
    if (value.length) {
      onSubmit({name: value});
      setvalue('');
    }
  };
  return (
    <View style={styles.container}>
      {userData?.displayName && (
        <Text style={styles.title}>
          What's on your mind, {userData?.displayName}?
        </Text>
      )}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Input
          contentContainerStyle={[styles.textInput, {flex: 1}]}
          options={{
            value: value,
            onChangeText: text => {
              setvalue(text);
            },
            onSubmitEditing: onSubmitHandler,
          }}
        />
        <Button
          title="Add"
          onPress={onSubmitHandler}
          style={{flex: 0.4, borderTopLeftRadius: 2, borderBottomLeftRadius: 2}}
        />
      </View>
    </View>
  );
};
AddNoteForm.propTypes = {
  props: PropTypes.objectOf({
    onSubmit: PropTypes.fun,
  }),
};

export default AddNoteForm;
