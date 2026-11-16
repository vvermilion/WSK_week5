import {useLocation, useNavigate} from 'react-router';
import {useUser} from '../hooks/apiHooks';
import {useState} from 'react';

const Single = () => {
  const {state: item} = useLocation();
  const navigate = useNavigate();
  const {getUserInformation} = useUser();
  const [owner, setOwner] = useState(null);

  if (!item) {
    return (
      <section className="single-view">
        <h2>Single media file</h2>
        <p>No media file selected.</p>
        <button
          className="single-back-button"
          type="button"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </section>
    );
  }

  const getUser = async () => {
    const user = await getUserInformation(item.user_id);
    setOwner(user);
  };

  return (
    <section className="single-view">
      <h2>Single media file</h2>
      <h3>{item.title}</h3>
      {item.media_type.startsWith('image') ? (
        <img
          id="image"
          src={item?.filename}
          alt={item?.description}
          style={{maxWidth: '100%'}}
        />
      ) : (
        <video id="video" controls width="100%">
          <source src={item?.filename} type={item.media_type} />
          Your browser does not support the video tag.
        </video>
      )}

      <p className="single-description">
        {item.description ? item.description : 'No description'}
      </p>
      <h4 onClick={getUser}>Owner: {item.username}</h4>
      {owner && (
        <p>
          Email: {owner.email}, User level: {owner.level_name}
        </p>
      )}
      <button
        className="single-back-button"
        type="button"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </section>
  );
};

export default Single;
