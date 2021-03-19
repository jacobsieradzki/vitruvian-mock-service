import firebase from '@h/firebase';
import { getRequestJsonResponse, getRequestTextResponse, internalError, postRequestTextResponse } from '@h/request';

export default async function request(req, res) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case 'GET':
      if (req?.query?.format === "ALL") {
        getAllReadingsAndDelete(req, res, id);
      } else {
        getReadingAndDelete(req, res, id);
      }
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

async function getAllReadingsAndDelete(req, res, id) {
  const itemsRef = firebase.database().ref(`live-ios-recordings/${id}`);

  try {
    const itemsObj = (await itemsRef.once("value")).val();
    if (!itemsObj) return getRequestJsonResponse(req, res, []);

    const items = Object.keys(itemsObj).map(k => itemsObj[k]);

    getRequestJsonResponse(req, res, items);

    Object.keys(itemsObj).forEach(key => {
      firebase.database().ref(`live-ios-recordings/${id}/${key}`).remove();
    });
    itemsRef.remove();
  } catch (error) {
    getRequestTextResponse(req, res, "Could not fetch debug readings.\n" + error);
  }
}

async function getReadingAndDelete(req, res, id) {
  const sendEmpty = () => getRequestTextResponse(req, res, "-1,0,0,0");
  const itemsRef = firebase.database().ref(`live-ios-recordings/${id}`);

  try {
    const itemsObj = (await itemsRef.once("value")).val();
    if (!itemsObj) return sendEmpty();

    const items = Object.keys(itemsObj).map(k => itemsObj[k]);

    const item = getItemWithMinimumDate(items);
    if (!item) {
      return sendEmpty();
    }

    const { timestamp, x, y, z } = item;
    deleteItems(itemsRef, items, item);
    getRequestTextResponse(req, res, `${timestamp},${x},${y},${z}`);
  } catch (error) {
    console.log('Error getting values: ' + error);
    sendEmpty();
  }
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
  var lowest = Number.POSITIVE_INFINITY;
  var curr = null;
  items.forEach(item => {
    if (item.timestamp < lowest) {
      lowest = item.timestamp;
      curr = item;
    }
  });
  return curr;
};

function deleteTest(ref) {
  
}

// ----------------------------------------
// POST Helpers
// ----------------------------------------

function createReading(req, res, id) {
  const reading = JSON.parse(Object.keys(req.body)[0]);
  
  const itemsRef = firebase.database().ref(`live-ios-recordings/${id}`);
  try {
    const newRef = itemsRef.push();
    newRef.set(reading);
    postRequestTextResponse(req, res, `${reading.timestamp},${reading.x},${reading.y},${reading.z}`);
  } catch (error) {
    console.log('Error posting live reading: ' + error);
    internalError(req, res, 'Error posting reading: ' + error);
  }
};