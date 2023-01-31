import React from 'react'
import axios from 'axios';
const DeleteButton = ({productId, successCallback})  => {
    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(() => {
            successCallback();
        })
        .catch((error) => console.log("Error", error));
    }

    return (
        <button className='btn btn-danger' type='button' onClick={deleteProduct}>
            Delete
        </button>
    )
}
export default DeleteButton