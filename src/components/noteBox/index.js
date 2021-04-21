import React, {useState, useRef} from 'react';
import {View, TextInput, Keyboard} from 'react-native';
import {Colors, PixelPerfect} from '../../constants/styleConstants';
import IconTouchable from '../touchables/IconTouchable';
import styles from './styles';
import PropTypes from 'prop-types';

const NoteBox = ({name, onRemove, onEdit}) => {
  const [state, setstate] = useState({
    edit: false,
    value: name,
  });
  const ref = useRef();
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.title, state.edit && {backgroundColor: Colors.boxColor}]}
        value={state.value}
        multiline
        ref={ref}
        editable={state.edit}
        onChangeText={text => {
          setstate(old => ({...old, value: text}));
        }}
      />
      <View style={styles.controls}>
        {state.edit ? (
          <IconTouchable
            name="check"
            color={Colors.white}
            size={PixelPerfect(30)}
            style={{backgroundColor: Colors.success}}
            onPress={() => {
              Keyboard.dismiss();
              setstate(old => ({...old, edit: false}));
              onEdit({name: state.value});
            }}
          />
        ) : (
          <>
            <IconTouchable
              name="edit"
              color={Colors.white}
              size={PixelPerfect(30)}
              style={{backgroundColor: Colors.edit}}
              onPress={() => {
                // ref.current.focus();
                setstate(old => ({...old, edit: true}));
              }}
            />
            <IconTouchable
              name="trash"
              color={Colors.white}
              size={PixelPerfect(30)}
              onPress={onRemove}
              style={{
                backgroundColor: Colors.warning,
                marginLeft: PixelPerfect(15),
              }}
            />
          </>
        )}
      </View>
    </View>
  );
};
NoteBox.propTypes = {
  props: PropTypes.objectOf({
    name: PropTypes.string,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,
  }),
};

export default NoteBox;
