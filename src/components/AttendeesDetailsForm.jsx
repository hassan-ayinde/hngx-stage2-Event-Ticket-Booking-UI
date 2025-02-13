// AttendeesDetailsForm.jsx
import React, { useContext, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import ActionButton from './ActionButton';
import TicketBookingStage from './TicketBookingStage';
import AvatarUpload from './AvatarUpload';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ImageContext } from './ImageContext';

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
    initialValues: {
      profilePhoto: '',
      name: '',
      email: '',
      about: '',
    },
    validationSchema,
    onSubmit: (values) => {
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

  return (
    <div className="w-[90%] m-auto max-w-md sm:max-w-2xl">
      <div>
        <TicketBookingStage stageTitle="Attendee Details" stageNumber={2} />
      </div>
      <form onSubmit={formik.handleSubmit} className="text-white border border-amber-200 p-6" noValidate>
        {/* Upload Section */}
        <div className="border border-amber-200 border-solid p-4 mb-4">
          <label htmlFor="profile-photo" className="block mb-2 text-sm font-medium">
            Upload Profile Photo
          </label>
          <div className="relative" tabIndex="0" onFocus={() => formik.setFieldError('profilePhoto', '')}>
            <div className="w-full h-52 bg-green-300"></div>
            <AvatarUpload />
          </div>
          {formik.submitCount > 0 && formik.errors.profilePhoto && (
            <div id="profilePhoto-error" role="alert" className="text-red-500 text-sm">
              {formik.errors.profilePhoto}
            </div>
          )}
        </div>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              aria-invalid={formik.submitCount > 0 && Boolean(formik.errors.email)}
              aria-describedby="email-error"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
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
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
                       border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
          {formik.submitCount > 0 && formik.errors.about && (
            <div id="about-error" role="alert" className="text-red-500 text-sm">
              {formik.errors.about}
            </div>
          )}
        </div>

        {/* Buttons */}
        <Stack direction="row">
          <ActionButton
            title="Back"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 
                       focus:outline-none bg-white rounded-lg border border-gray-200 
                       hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            onClick={stageOne}
          />
          <ActionButton
            title="Get My Free Ticket"
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                       focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          />
        </Stack>
      </form>
    </div>
  );
};

export default AttendeesDetailsForm;
