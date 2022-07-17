import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";

import { firebaseAuth } from "../../firebase";

const LoginPage = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log({ uid });
      }
    });
  }, []);

  return (
    <div>
      <div>
        <input
          type="email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
      </div>
      <div>
        <input
          type="password"
          value={state.password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
      </div>
      <div>
        <button
          onClick={() => {
            signInWithEmailAndPassword(
              firebaseAuth,
              state.email,
              state.password
            )
              .then((userCredential) => {
                const user = userCredential.user;

                console.log({ user });
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              });
          }}
        >
          login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
