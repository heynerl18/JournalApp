
/* Los thunks son acciones que pueden hacer dispatch, tienen tareas asincronas  */
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/provider";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, login, logout } from "./authSlice";

 
export const checkingAuthentication = () => {
  return async(dispatch) => {
    dispatch(checkingCredentials());
  }
}

export const startGoogleSignIn = () => {
  return async(dispatch) => {
    
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    if(!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));

  }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async(dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailPassword({ email, password, displayName });
    if(!ok) return dispatch(logout({errorMessage}));
    
    dispatch(login(result));
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async(dispatch) => {

    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password});

    if(!result.ok) return dispatch(logout(result));

    dispatch(login(result));

  }
}

export const startLogout = () => {
  return async(dispatch) => {
    await logoutFirebase();
    dispatch(clearNotesLogout());
    dispatch(logout({ errorMessage: null }));
  }
}