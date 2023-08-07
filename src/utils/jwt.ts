import { PayloadLogin } from '../types/login';
import * as CryptoJS from 'crypto-js';

export const generateToken = (payloadUser: Omit<PayloadLogin, 'password'>): string => {
    const secretKey = import.meta.env.VITE_JWT_SECRET as string;
    const expiresIn = Math.floor(Date.now() / 1000) + (60 * 60)

    const payload = {
        ...payloadUser,
        exp: expiresIn,
    };

    const header = {
      alg: 'HS256',
      typ: 'JWT',
    };

    const encodedHeader = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(header)));
    const encodedPayload = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(payload)));

    const dataToSign = `${encodedHeader}.${encodedPayload}`;
    const signature = CryptoJS.HmacSHA256(dataToSign, secretKey).toString(CryptoJS.enc.Base64);

    const jwt = `${dataToSign}.${signature}`;

    return jwt;
  };

