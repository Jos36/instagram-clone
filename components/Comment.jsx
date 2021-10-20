import Moment from "react-moment";

function Comment({ id, image, comment, username, time }) {
  return (
    <div key={id} className="flex items-center space-x-2 mb-3">
      <img src={image} className="h-7 rounded-full" alt="" />
      <p className="text-sm flex-1">
        <span className="font-bold">{username}:</span> {comment}
      </p>
      <Moment fromNow className="text-xs pr-5">
        {time.toDate()}
      </Moment>
    </div>
  );
}

export default Comment;
