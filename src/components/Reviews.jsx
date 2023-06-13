import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  return (
    <div>
      <ul>
        Reviews: {movieId}
        <li>
          <h4>name</h4>
          <p>text</p>
        </li>
      </ul>
    </div>
  );
};

export default Reviews;
