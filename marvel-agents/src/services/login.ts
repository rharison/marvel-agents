import { loginData } from "../mocks";
import { PayloadLogin } from "../types/login";

export const login = ({ email, password }: PayloadLogin) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log({
        email,
        password,
        loginData
      })
      if (email === loginData.email && password === loginData.password) {
        resolve({ message: 'Login success' });
      } else {
        reject({ message: 'Login error' });
      }
    }, 1500)
  });
};