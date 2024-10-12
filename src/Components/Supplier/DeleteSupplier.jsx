import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import BackButton from '../BackButton';
import { useSnackbar } from 'notistack';

const DeleteSupplier = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    const handleDeleteSupplier = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5000/suppliers/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Supplier Deleted successfully', { variant: 'success' });
                navigate('/suppliers');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error deleting supplier', { variant: 'error' });
                console.log(error);
            });
    };

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Delete Supplier</h1>

            <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
                <h3 className="text-2xl mb-4">Are You Sure You want to delete this supplier?</h3>
                
                {/* Show spinner when loading */}
                {loading ? (
                    <Spinner animation="border" role="status" className="my-4">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <button
                        className="p-4 bg-red-600 text-white m-8 w-full"
                        onClick={handleDeleteSupplier}
                    >
                        Yes, Delete it
                    </button>
                )}
            </div>
        </div>
    );
};

export default DeleteSupplier;
