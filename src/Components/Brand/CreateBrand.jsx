import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewBrand = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // const [images, setImages] = useState([]);
    // const [imagesPreview, setImagesPreview] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [brand, setBrand] = useState({});

    let navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.set('name', name);
        formData.set('description', description);
        // images.forEach(image => {
        //     formData.append('images', image);
        // });

        NewBrand(formData);
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

    const NewBrand = async (formData) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            };

            const { data } = await axios.post('http://localhost:5000/brands', formData, config);
            setLoading(false);
            setSuccess(data.success);
            setBrand(data.brand);
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
            toast.success('Brand created successfully', {
                position: 'bottom-right'
            });
            navigate('/');
        }
    }, [error, success]);

    return (
        <>
 <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h2 className="text-center mb-4 text-primary">Create a New Brand</h2>
                                <form onSubmit={submitHandler} encType="multipart/form-data">

                                    <div className="form-group mb-4">
                                        <label htmlFor="name_field" className="text-dark">Brand Name</label>
                                        <input
                                            type="text"
                                            id="name_field"
                                            className="form-control border border-info shadow-sm"
                                            placeholder="Enter brand name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-4">
                                        <label htmlFor="description_field" className="text-dark">Brand Description</label>
                                        <textarea
                                            className="form-control border border-info shadow-sm"
                                            id="description_field"
                                            rows="5"
                                            placeholder="Enter brand description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
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
                                            CREATE BRAND
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

export default NewBrand;


