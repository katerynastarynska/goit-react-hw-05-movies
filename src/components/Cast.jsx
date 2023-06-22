// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);

  // useEffect

  return (
    <div>
      <ul>
        Cast: {movieId}
        <li>
          <img src="" alt="" />
          <h4>name</h4>
          <p>character</p>
        </li>
      </ul>
    </div>
  );
};

export default Cast;

