// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Spinner from '../Spinner';
// import BackButton from '../BackButton';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useSnackbar } from 'notistack';

// const EditBrand = () => {
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     // const [publishYear, setPublishYear] = useState('');
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const {id} = useParams();
//     const { enqueueSnackbar } = useSnackbar();
    
//     useEffect(() => {
//         setLoading(true);
//         axios.get(`http://localhost:5000/brands/${id}`)
//         .then((response) => {
//             setName(response.data.brand.name);
//             setDescription(response.data.brand.description)
//             // setTitle(response.data.title)
//             setLoading(false);
//           }).catch((error) => {
//             setLoading(false);
//             alert('An error happened. Please Chack console');
//             console.log(error);
//           });
//       }, [])

//     const handleEditBrand = () => {
//       const data = {
//         name,
//         description,
//         // publishYear,
//       };
//       setLoading(true);
//       axios
//         .put(`http://localhost:5000/brands/${id}`, data)
//         .then(() => {
//           setLoading(false);
//           enqueueSnackbar('Brand Updated successfully', { variant: 'success' });
//           navigate('/');
//         })
//         .catch((error) => {
//           setLoading(false);
//           enqueueSnackbar('Error', { variant: 'error' });
//           console.log(error);
//         });
//     };
  
//     return (
//       <div className='p-4'>
//         <BackButton />
//         <h1 className='text-3xl my-4'>Edit Brand</h1>
//         {loading ? <Spinner /> : ''}
//         <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
//           <div className='my-4'>
//             <label className='text-xl mr-4 text-gray-500'>Name</label>
//             <input
//               type='text'
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className='border-2 border-gray-500 px-4 py-2 w-full'
//             />
//           </div>
//           <div className='my-4'>
//             <label className='text-xl mr-4 text-gray-500'>Description</label>
//             <input
//               type='text'
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className='border-2 border-gray-500 px-4 py-2  w-full '
//             />
//           </div>
//           {/* <div className='my-4'>
//             <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
//             <input
//               type='number'
//               value={publishYear}
//               onChange={(e) => setPublishYear(e.target.value)}
//               className='border-2 border-gray-500 px-4 py-2  w-full '
//             />
//           </div> */}
//           <button className='p-2 bg-sky-300 m-8' onClick={handleEditBrand}>
//             Save
//           </button>
//         </div>
//       </div>
//     );
//   }

// export default EditBrand

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../Spinner';
import BackButton from '../BackButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBrand = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5000/brands/${id}`)
            .then((response) => {
                setName(response.data.brand.name);
                setDescription(response.data.brand.description);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                alert('An error occurred. Please check the console.');
                console.log(error);
            });
    }, [id]);

    const handleEditBrand = () => {
        const data = {
            name,
            description,
        };
        setLoading(true);
        axios
            .put(`http://localhost:5000/brands/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Brand updated successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error updating brand', { variant: 'error' });
                console.log(error);
            });
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Edit Brand</h1>
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
                    <label className='text-xl mr-4 text-gray-500'>Description</label>
                    <input
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleEditBrand}>
                    Save
                </button>
            </div>
        </div>
    );
}

export default EditBrand;
