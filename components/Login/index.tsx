import { useEffect, useState } from "react";
import { useUsers } from '../../providers/users';
import { useRouter } from 'next/router';



const LoginSignPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const router = useRouter();
    
    const {createUser} = useUsers();


    // useEffect(() => {
    //     createUser(); 
    //   }, []);
    
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      router.push('/MovieHome');
    };
    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
    };
  
    return (
      <><div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
          </label>
          <button type="submit">Login</button>
        </form>
      </div><div>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </label>
            <label>
              UserName:
              <input
                type="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required />
            </label>
            <label>
              Name:
              <input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required />
            </label>
            <label>
              Surname:
              <input
                type="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            </label>
            <button type="submit">Sign Up</button>
          </form>
        </div></>
      
    );
  };

