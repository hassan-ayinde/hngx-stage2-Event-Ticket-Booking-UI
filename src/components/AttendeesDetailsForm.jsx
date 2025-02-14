// AttendeesDetailsForm.jsx
import React, { useContext, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import ActionButton from './ActionButton';
import TicketBookingStage from './TicketBookingStage';
import AvatarUpload from './AvatarUpload';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ImageContext } from './ImageContext';

// Helper function to retrieve saved form values from local storage
const getSavedValues = () => {
    try {
      const saved = localStorage.getItem('attendeesData');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error reading local storage:', e);
    }
    return {
      profilePhoto: '',
      name: '',
      email: '',
      about: '',
    };
  };

const AttendeesDetailsForm = ({ onClick, stageOne }) => {
  const { imageUrl } = useContext(ImageContext);

  const validationSchema = Yup.object({
    profilePhoto: Yup.string().required('Profile photo is required'),
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    about: Yup.string().required('TextArea is required'),
  });

  const formik = useFormik({
    initialValues: getSavedValues(),
    validationSchema,
    onSubmit: (values) => {
        localStorage.setItem('attendeesData', JSON.stringify(values));
        onClick(values);
        console.log(values);

    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  useEffect(() => {
    if (imageUrl) {
      formik.setFieldValue('profilePhoto', imageUrl);
      formik.setFieldError('profilePhoto', '');
    }
  }, [imageUrl]);

   // Persist form values to local storage whenever they change.
   useEffect(() => {
    localStorage.setItem('attendeesData', JSON.stringify(formik.values));
  }, [formik.values]);


  return (
    <div className="w-[90%] m-auto max-w-md sm:max-w-2xl bg-mint-800 border border-solid border-mint-600 rounded-3xl py-8 px-4 sm:py-12 sm:px-12">
      <div>
        <TicketBookingStage stageTitle="Attendee Details" stageNumber={2} />
      </div>
      <form onSubmit={formik.handleSubmit} className="text-white border border-mint-600 rounded-3xl p-4 sm:p-6 bg-mint-800" noValidate>
        {/* Upload Section */}
        <div className="border border-mint-250 border-solid p-4 sm:p-6 mb-4 bg-mint-150 rounded-3xl">
          <label htmlFor="profile-photo" className="block mb-2 text-sm font-medium">
            Upload Profile Photo
          </label>
          <div className="relative" tabIndex="0" onFocus={() => formik.setFieldError('profilePhoto', '')}>
            <div className="w-full h-50 bg-mint-700"></div>
            <AvatarUpload />
          </div>
          {formik.submitCount > 0 && formik.errors.profilePhoto && (
            <div id="profilePhoto-error" role="alert" className="text-red-500 text-sm mt-4">
              {formik.errors.profilePhoto}
            </div>
          )}
        </div>

        {/* Name Field */}
        <div className="mb-4 border-t-4 border-solid border-mint-250">
          <label htmlFor="name" className="block mb-2 text-sm font-medium pt-7">
            Enter your name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            maxLength={15}
            placeholder="John Doe"
            onChange={formik.handleChange}
            onFocus={() => formik.setFieldError('name', '')}
            value={formik.values.name}
            aria-invalid={formik.submitCount > 0 && Boolean(formik.errors.name)}
            aria-describedby="name-error"
            autoComplete='off'
            className="bg-transparent border border-mint-250 text-white text-sm rounded-lg 
                       focus:border-1 focus:border-mint-600 focus:outline-0 block w-full p-2.5"
          />
          {formik.submitCount > 0 && formik.errors.name && (
            <div id="name-error" role="alert" className="text-red-500 text-sm">
              {formik.errors.name}
            </div>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Enter your Email *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
              </svg>
            </div>
            <input
              type="email"
              id="email"
              maxLength={15}
              name="email"
              placeholder="name@example.com"
              onChange={formik.handleChange}
              onFocus={() => formik.setFieldError('email', '')}
              value={formik.values.email}
              autoComplete='off'
              aria-invalid={formik.submitCount > 0 && Boolean(formik.errors.email)}
              aria-describedby="email-error"
              className="bg-transparent border border-mint-250 text-white text-sm rounded-lg 
                        focus:border-1 focus:border-mint-600 focus:outline-0 block w-full pl-10 p-2.5"
            />
          </div>
          {formik.submitCount > 0 && formik.errors.email && (
            <div id="email-error" role="alert" className="text-red-500 text-sm">
              {formik.errors.email}
            </div>
          )}
        </div>

        {/* About Field */}
        <div className="mb-4">
          <label htmlFor="about" className="block mb-2 text-sm font-medium">
            About the project
          </label>
          <textarea
            id="about"
            name="about"
            rows="4"
            placeholder="Write your thoughts here..."
            onChange={formik.handleChange}
            onFocus={() => formik.setFieldError('about', '')}
            value={formik.values.about}
            maxLength={20}
            autoComplete='off'
            className="block p-2.5 w-full text-smbg-transparent border border-mint-250 text-white rounded-lg 
                        focus:border-1 focus:border-mint-600 focus:outline-0"
          ></textarea>
          {formik.submitCount > 0 && formik.errors.about && (
            <div id="about-error" role="alert" className="text-red-500 text-sm">
              {formik.errors.about}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row sm:justify-between mt-10'>
          <ActionButton
            title="Back"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-mint-500 
                       focus:outline-none bg-transparent rounded-lg border border-mint-500 w-full"
            onClick={stageOne}
          />
          <ActionButton
            title="Get My Free Ticket"
            type="submit"
            className="text-white bg-mint-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default AttendeesDetailsForm;
