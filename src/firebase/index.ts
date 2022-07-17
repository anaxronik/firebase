import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

import firebaseConfig from "./firebaseConfig";

export const firebaseApp = initializeApp(firebaseConfig);

export const database = getDatabase(firebaseApp);

export const firebaseAuth = getAuth(firebaseApp);
