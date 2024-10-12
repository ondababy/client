import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewSupplier = () => {

    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    // const [images, setImages] = useState([]);
    // const [imagesPreview, setImagesPreview] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [supplier, setSupplier] = useState({});

    let navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.set('name', name);
        formData.set('emailAddress', emailAddress);
        formData.set('contactNumber', contactNumber);
        // images.forEach(image => {
        //     formData.append('images', image);
        // });

        NewSupplier(formData);
    };

    // const onChange = (e) => {
    //     const files = Array.from(e.target.files);
    //     setImagesPreview([]);
    //     setImages([]);

    //     files.forEach(file => {
    //         const reader = new FileReader();
    //         reader.onload = () => {
    //             if (reader.readyState === 2) {
    //                 setImagesPreview(oldArray => [...oldArray, reader.result]);
    //                 setImages(oldArray => [...oldArray, file]);
    //             }
    //         };
    //         reader.readAsDataURL(file);
    //     });
    // };

    const NewSupplier = async (formData) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            };

            const { data } = await axios.post('http://localhost:5000/suppliers', formData, config);
            setLoading(false);
            setSuccess(data.success);
            setSupplier(data.supplier);
        } catch (error) {
            setLoading(false);
            setError(error.response.data.message);
        }
    };

    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: 'bottom-right'
            });
        }

        if (success) {
            toast.success('Supplier created successfully', {
                position: 'bottom-right'
            });
            navigate('/suppliers');
        }
    }, [error, success]);

    return (
        <>
 <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h2 className="text-center mb-4 text-primary">Create a New Supplier</h2>
                                <form onSubmit={submitHandler} encType="multipart/form-data">

                                    <div className="form-group mb-4">
                                        <label htmlFor="name_field" className="text-dark">Supplier Name</label>
                                        <input
                                            type="text"
                                            id="name_field"
                                            className="form-control border border-info shadow-sm"
                                            placeholder="Enter supplier name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-4">
                                        <label htmlFor="emailAddress_field" className="text-dark">Supplier Email Address</label>
                                        <textarea
                                            className="form-control border border-info shadow-sm"
                                            id="emailAddress_field"
                                            rows="5"
                                            placeholder="Enter supplier email address"
                                            value={emailAddress}
                                            onChange={(e) => setEmailAddress(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-4">
                                        <label htmlFor="contactNumber_field" className="text-dark">Supplier Contact Number</label>
                                        <textarea
                                            className="form-control border border-info shadow-sm"
                                            id="contactNumber_field"
                                            rows="5"
                                            placeholder="Enter supplier contact number"
                                            value={contactNumber}
                                            onChange={(e) => setContactNumber(e.target.value)}
                                            required
                                        />
                                    </div>


                                    {/* <div className="form-group mb-4">
                                        <label htmlFor="customFile" className="text-dark">Upload Brand Images</label>
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                name="images"
                                                className="custom-file-input border shadow-sm"
                                                id="customFile"
                                                onChange={onChange}
                                                multiple
                                                required
                                            />
                                            <label className="custom-file-label" htmlFor="customFile">
                                                Choose Images
                                            </label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-wrap mb-4">
                                        {imagesPreview.map(img => (
                                            <img
                                                src={img}
                                                key={img}
                                                alt="Image Preview"
                                                className="img-thumbnail mr-2 mt-2"
                                                width="100"
                                                height="100"
                                            />
                                        ))}
                                    </div> */}

                                    {loading ? (
                                        <div className="text-center">
                                            <Spinner animation="border" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </Spinner>
                                        </div>
                                    ) : (
                                        <button type="submit" className="btn btn-info btn-block py-2 shadow">
                                            CREATE SUPPLIER
                                        </button>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewSupplier;


