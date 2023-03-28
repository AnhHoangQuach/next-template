import { useSelector } from 'react-redux';
import { commentSelector } from 'reducers/commentSlice';

const Comments = () => {
  const comments = useSelector(commentSelector);

  return (
    <div className='flex flex-col items-start gap-3'>
      {comments.map((item, index) => (
        <div key={index}>
          <div>{item.comment}</div>
          <div>{item.username}</div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
