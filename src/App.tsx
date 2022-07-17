import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";
import React, { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyAMQKnhcrap8Oj7YdisLDkMjSp8wgALGf4",
  authDomain: "test-anx.firebaseapp.com",
  projectId: "test-anx",
  storageBucket: "test-anx.appspot.com",
  messagingSenderId: "658786089950",
  appId: "1:658786089950:web:794697f92fadf5f66abb4f",
  databaseURL:
    "https://test-anx-default-rtdb.europe-west1.firebasedatabase.app",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const dbRef = ref(database);

function App() {
  const [data, setData] = useState<string[]>([]);

  const starCountRef = ref(database, "users");
  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const snapShot = snapshot.val();
      console.log("snapShot");
      console.log(snapShot);
      if (snapShot) {
        const keys = Object.keys(snapShot);
        if (snapShot && keys.length !== data.length) {
          setData(keys);
        }
      } else {
        setData([]);
      }
    });
  }, []);

  function writeUserData() {
    set(ref(database, "users/" + uuidv4()), {
      username: "name",
      email: "email",
      profile_picture: "imageUrl",
    });
  }

  const removeAll = () => {
    set(ref(database, "users"), {});
  };

  return (
    <div className="App">
      <button onClick={writeUserData}>add</button>
      <button onClick={removeAll}>REMOVE ALL</button>

      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}

export default App;
