import firebase from '@h/firebase';
import { getRequestTextResponse, internalError, postRequestTextResponse } from '@h/request';

export default async function request(req, res) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case 'GET':
      getReadingAndDelete(req, res, id);
      break;

    case 'POST':
      createReading(req, res, id);
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

// ----------------------------------------
// GET Helpers
// ----------------------------------------

async function getReadingAndDelete(req, res, id) {
  const sendEmpty = () => getRequestTextResponse(req, res, "-1,0,0,0");
  const itemsRef = firebase.database().ref(`live-ios-recordings/${id}`);
  console.log(await itemsRef.get().val)

  itemsRef.on('value', (snapshot) => {
    itemsRef.off();
    const itemsObj = snapshot.val();
    if (!itemsObj) return sendEmpty();

    const items = Object.keys(itemsObj).map(k => itemsObj[k]);

    const item = getItemWithMinimumDate(items);
    if (!item) {
      return sendEmpty();
    }

    const { timestamp, x, y, z } = item;
    deleteItems(itemsRef, items, item);
    getRequestTextResponse(req, res, `${timestamp},${x},${y},${z}`);
  });
}

function deleteItems(ref, items, item) {
  const newItems = items.filter(x => x != item);
  try {
    ref.set(newItems);
  } catch (error) {
    console.log("Error updating live values:", error);
  }
}

function getItemWithMinimumDate(items) {
  console.log('hey', items, items.length);
  var lowest = Number.POSITIVE_INFINITY;
  var curr = null;
  items.forEach(item => {
    console.log('stage', curr, lowest, item);
    if (item.timestamp < lowest) {
      lowest = item.timestamp;
      curr = item;
    }
  });
  return curr;
};

// ----------------------------------------
// POST Helpers
// ----------------------------------------

function createReading(req, res, id) {
  const reading = JSON.parse(Object.keys(req.body)[0]);
  
  const itemsRef = firebase.database().ref(`live-ios-recordings/${id}`);
  try {
    const newRef = itemsRef.push();
    newRef.set(reading);
    console.log(newRef);
    postRequestTextResponse(req, res, "hey");
  } catch (error) {
    console.log('Error posting live reading: ' + error);
    internalError(req, res, 'Error posting reading: ' + error);
  }
};