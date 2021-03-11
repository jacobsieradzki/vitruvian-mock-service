import { getRequestTextResponse, internalError, notFoundResponse } from "@h/request";
import { remoteOutput } from '@h/appOutput';
import firebase from '@h/firebase';

export default function getRequestHandler(req, res) {
  const id = req?.query?.id;
  if (!id) {
    internalError(req, res, `Resource ${req?.query?.id || 'null'} not found`);
    return;
  }

  const itemsRef = firebase.database().ref(`tests/${id}`);
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    if (items) {
      receivedResponse(req, res, items);
    } else {
      notFoundResponse(req, res, `Resource not found for id ${id}`);
    }
  });
};

function receivedResponse(req, res, str) {
  const separated = str.split(';').map(x => x.split(' '));
  remoteOutput(req, res, separated);
};
