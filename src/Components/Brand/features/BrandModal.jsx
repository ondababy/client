import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BrandModal = ({ brand, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {brand.name}
        </h2>
        <h4 className='my-2 text-gray-500'>{brand._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{brand.description}</h2>
        </div>
        {/* <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.author}</h2>
        </div> */}
        <p className='mt-4'>Anything You want to show</p>
        <p className='my-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default BrandModal;


// import React, { useState } from 'react';
// import axios from 'axios';
// import Spinner from '../Spinner';
// import BackButton from '../BackButton';
// import { useNavigate } from 'react-router-dom';
// import { useSnackbar } from 'notistack';

// const CreateBrand = () => {
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const { enqueueSnackbar } = useSnackbar();

//     const handleSaveBrand = () => {
//       const data = {
//         name,
//         description,
//       };
//       setLoading(true);
//       axios
//         .post('http://localhost:5000/brands', data)
//         .then(() => {
//           setLoading(false);
//           enqueueSnackbar('Brand Created successfully', { variant: 'success' });
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
//         <h1 className='text-3xl my-4'>Create Brand</h1>
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
//           <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBrand}>
//             Save
//           </button>
//         </div>
//       </div>
//     );
//   }

// export default CreateBrand