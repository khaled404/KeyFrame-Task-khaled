import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {
  AddNoteHandler,
  DeleteNotesHandler,
  EditNotesHandler,
  GetNotesHandler,
} from '../../api/notes';
import AddNoteForm from '../../components/addNoteForm';
import {Container} from '../../components/containers';
import NoteBox from '../../components/noteBox';
import {Colors, PixelPerfect} from '../../constants/styleConstants';

const Home = () => {
  const queryClient = useQueryClient();

  const addNoteMutation = useMutation(body => AddNoteHandler(body), {
    onSuccess: data => queryClient.setQueryData(['getNotes', {id: 0}], data),
  });

  const removeNoteMutation = useMutation(id => DeleteNotesHandler(id), {
    onSuccess: data => queryClient.setQueryData(['getNotes', {id: 0}], data),
  });

  const editNoteMutation = useMutation(
    data => EditNotesHandler(data.body, data.id),
    {
      onSuccess: data => queryClient.setQueryData(['getNotes', {id: 0}], data),
    },
  );
  const {data, isLoading} = useQuery(['getNotes', {id: 0}], GetNotesHandler);
  return (
    <Container>
      <AddNoteForm onSubmit={body => addNoteMutation.mutate(body)} />
      {isLoading ||
      addNoteMutation.isLoading ||
      removeNoteMutation.isLoading ? (
        <ActivityIndicator
          style={{
            width: PixelPerfect(50),
            height: PixelPerfect(50),
            marginVertical: 30,
            alignSelf: 'center',
          }}
          size="large"
          color={Colors.minColor}
        />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <NoteBox
              {...item}
              onRemove={() => {
                removeNoteMutation.mutate(item.id);
              }}
              onEdit={body => {
                editNoteMutation.mutate({body, id: item.id});
              }}
            />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
