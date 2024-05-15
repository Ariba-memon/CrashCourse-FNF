
const CommentsList = ({ comments }) => (
    <>
    <h3 className="text-center font-Poppins text-5xl">Comments:</h3>
    {comments.map(comment => (
        <div  className=" text-right" key={comment.postedBy + ': ' + comment.text}>
            <h4 className="text-center"> UserName:{comment.postedBy}</h4>
            <p className="text-center text-gray-700">UserComment: {comment.text}</p>
        </div>
    ))}
    </>
);

export default CommentsList;