import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import BackButton from '../BackButton';
import { useSnackbar } from 'notistack';

const DeleteBrand = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    const handleDeleteBrand = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5000/brands/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Brand Deleted successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error deleting brand', { variant: 'error' });
                console.log(error);
            });
    };

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Delete Brand</h1>

            <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
                <h3 className="text-2xl mb-4">Are You Sure You want to delete this brand?</h3>
                
                {/* Show spinner when loading */}
                {loading ? (
                    <Spinner animation="border" role="status" className="my-4">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <button
                        className="p-4 bg-red-600 text-white m-8 w-full"
                        onClick={handleDeleteBrand}
                    >
                        Yes, Delete it
                    </button>
                )}
            </div>
        </div>
    );
};

export default DeleteBrand;
