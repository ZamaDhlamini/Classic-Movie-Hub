import jwtDecode, { JwtPayload } from 'jwt-decode';
import jwt from 'jsonwebtoken';

export const decodeToken = (token: string): JwtPayload & { id: string } => {
  return jwtDecode(token) as JwtPayload & { id: string };
};

export const saveToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};
export default decodeToken;