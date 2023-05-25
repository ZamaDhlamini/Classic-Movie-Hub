import jwtDecode, { JwtPayload } from 'jwt-decode';
import jwt from 'jsonwebtoken';



export const decodeToken = (token: string): JwtPayload => {
    return jwtDecode(token) as JwtPayload;
  };

  export const saveToken = (token: string) => {
    localStorage.setItem('token', token);
  };
  
  

export default decodeToken;