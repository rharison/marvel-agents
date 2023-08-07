import { loginData } from "../mocks";
import { PayloadLogin } from "../types/login";
import { generateToken } from "../utils/jwt";

export const login = ({ email, password }: PayloadLogin) => {

  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      if (email === loginData.email && password === loginData.password) {
        const jwt = await generateToken({ email });
        localStorage.setItem('token', jwt);
        resolve({ message: 'Login success' });
      } else {
        reject({ message: 'Login error' });
      }
    }, 1500)
  });
};