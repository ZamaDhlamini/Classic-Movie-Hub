import { useEffect, useState } from "react";
import { useUsers } from '../../providers/users';

const LoginSignPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const {createUser, UserCreated} = useUsers();


    // useEffect(() => {
    //     createUser();
    // }, []);
    
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Handle sign-up logic here
    };
  
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            UserName:
            <input
              type="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </label>
          <label>
            Name:
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Surname:
            <input
              type="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  };

