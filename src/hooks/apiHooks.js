import {fetchData} from '../utils/fetchData.js';
import {useState, useEffect} from 'react';

const MEDIA_API = import.meta.env.VITE_MEDIA_API;
const AUTH_API = import.meta.env.VITE_AUTH_API;
/** Custom hook for all media endpoint API functionalities */
const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const mediaFiles = await fetchData(MEDIA_API + '/media');
        const mediaFilesWithUsernames = await Promise.all(
          mediaFiles.map(async (mediaFile) => {
            const user = await fetchData(
              `${AUTH_API}/users/${mediaFile.user_id}`,
            );
            return {...mediaFile, username: user.username};
          }),
        );
        setMediaArray(mediaFilesWithUsernames);
      } catch (error) {
        console.error('Failed to fetch media:', error);
      }
    };
    getMedia();
  }, []);
  return {mediaArray};
};

const useUser = () => {
  const getUserInformation = async (userId) => {
    const user = await fetchData(`${AUTH_API}/users/${userId}`);
    return user;
  };
  return {getUserInformation};
};

const useAuthentification = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      fetchOptions,
    );
    return loginResult;
  };
  return postLogin;
};

export {useMedia, useUser, useAuthentification};
