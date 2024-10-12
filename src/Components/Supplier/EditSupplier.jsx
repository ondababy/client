import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../Spinner';
import BackButton from '../BackButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditSupplier = () => {
    const [name, setName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5000/suppliers/${id}`)
            .then((response) => {
                setName(response.data.supplier.name);
                setContactNumber(response.data.supplier.contactNumber);
                setEmailAddress(response.data.supplier.emailAddress);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                alert('An error occurred. Please check the console.');
                console.log(error);
            });
    }, [id]);

    const handleEditSupplier = () => {
        const data = {
            name,
            contactNumber,
            emailAddress,
        };
        setLoading(true);
        axios
            .put(`http://localhost:5000/suppliers/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Supplier updated successfully', { variant: 'success' });
                navigate('/suppliers');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error updating supplier', { variant: 'error' });
                console.log(error);
            });
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Edit Supplier</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='form-group my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Name</label>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='form-group my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Contact Number</label>
                    <input
                        type='text'
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='form-group my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Email Address</label>
                    <input
                        type='email'
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleEditSupplier}>
                    Save
                </button>
            </div>
        </div>
    );
}

export default EditSupplier;
