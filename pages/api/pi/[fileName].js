import { readSensorOutputFile } from "@h/fileOutput.js";
import firebase from '@h/firebase';

export default async function request(req, res) {
  const {
    method,
    query: { fileName },
  } = req;

  switch (method) {
    case 'GET':
      readSensorOutputFile(req, res, `ios_tests/${fileName}`);
      break;

    case 'POST':
      try {
        const response = await firebase.database().ref(`tests/${fileName}`).set(req.body);
        res.status(200).send(req.body);
      } catch (error) {
        res.status(500).send('Error saving\n' + JSON.stringify(err));
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}