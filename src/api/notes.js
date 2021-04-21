import {baseurl, headers} from '../constants/config';

export const GetNotesHandler = async () => {
  const response = await fetch(`${baseurl}task`, {
    method: 'GET',
    headers,
  });
  return await response.json();
};

export const AddNoteHandler = async body => {
  const response = await fetch(`${baseurl}task`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
  return await response.json();
};

export const EditNotesHandler = async (body, id) => {
  const response = await fetch(`${baseurl}task/${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  });
  return await response.json();
};

export const DeleteNotesHandler = async id => {
  const response = await fetch(`${baseurl}task/${id}`, {
    method: 'DELETE',
    headers,
  });
  return await response.json();
};
