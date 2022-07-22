import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const LoginPage = () => {
    const login = async () => {
      try {
        const auth = getAuth();
        const resp = await signInWithEmailAndPassword(
          auth,
          "cesar@correo.com",
          "jesus123"
        );

        console.log(resp);
      } catch (error) {
        console.log(error.message);
      }
    }; 

  return (
    <>
      <header>
        <h1>Login</h1>
      </header>
      <main>
        <article>
          <button type="button" className="btn btn-success" onClick = { login } >
            Iniciar sesion
          </button>
        </article>
      </main>
    </>
  );
};
// 
export default LoginPage