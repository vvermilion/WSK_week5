import {useEffect, useState} from 'react';
import {fetchData} from '../utils/fetchData';

const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUserInfo = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.group('Token not found');
        return;
      }
      try {
        const result = await fetchData(
          `${import.meta.env.VITE_AUTH_API}/users/token`,
          {headers: {Authorization: `Bearer ${token}`}},
        );
        const user = result.user;
        console.log('profile user:', user);
        setUser(user);
      } catch (error) {
        console.error(error.message);
      }
    };
    getUserInfo();
  }, []);
  return (
    <>
      <h2>User {user.username}</h2>
      <ul>
        <li>Registered: {user.created_at}</li>
        <li>Email: {user.email}</li>
        <li>User level: {user.level_name}</li>
      </ul>
    </>
  );
};

export default Profile;
