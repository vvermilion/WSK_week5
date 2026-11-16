import {useLocation, useNavigate} from 'react-router';
import { useUser } from '../hooks/apiHooks';

const Single = () => {
  const {state} = useLocation();
  const item = state;
  const navigate = useNavigate();
  const {getUserInformation} = useUser;
  

  return (
    <section className="single-view">
      {item.media_type.startsWith('image') ? (
        <img
          id="image"
          src={item?.filename}
          alt={item?.title}
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
      <h4> Owner: {item.username}</h4>
      <p>{owner.email}, {owner.level_name}</p>
      <button
        className="single-back-button"
        type="button"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </section>
  );
};

export default Single;
