import firebase from '@h/firebase';
import { getRequestTextResponse } from '@h/request';

export default async function request(req, res) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case 'GET':
      getReadingAndDelete(req, res, id);
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

function getReadingAndDelete(req, res, id) {
  const sendEmpty = () => getRequestTextResponse(req, res, "0,0,0,0");
  const itemsRef = firebase.database().ref(`live-ios-recordings/${id}`);
  itemsRef.on('value', (snapshot) => {
    itemsRef.off();
    const itemsObj = snapshot.val();
    if (!itemsObj) return sendEmpty();

    const items = Object.keys(itemsObj).map(k => itemsObj[k]);

    console.log('items', items);
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
  console.log('deleteItems', items, item);
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