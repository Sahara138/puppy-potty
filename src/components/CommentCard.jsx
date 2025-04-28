import React from 'react';
const CommentCard = ({ comment }) => {
    return (
        <div className="border border-gray-200 bg-blue-300 shadow-lg rounded-lg p-4 mx-auto">
            <p><span className="font-bold">ID:</span> {comment.id}</p>
            <p><span className="font-bold">Name:</span> {comment.name}</p>    
            <p><span className="font-bold">Email:</span> {comment.email}</p>
            <p><span className="font-bold">Description:</span> {comment.body}</p>
        </div>
    );
};

export default CommentCard;