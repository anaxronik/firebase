import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import { firebaseAuth } from "../../firebase";

const RegisterPage = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

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
            console.log(state);
            createUserWithEmailAndPassword(
              firebaseAuth,
              state.email,
              state.password
            )
              .then((userCredential) => {
                alert("Пользователь успешно создан");
                console.log({ userCredential });
              })
              .catch((error) => {
                alert("Не удалось создать пользователя");
              });
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
