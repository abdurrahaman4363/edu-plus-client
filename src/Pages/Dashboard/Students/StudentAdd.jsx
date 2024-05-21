import { useState } from 'react';
import Swal from 'sweetalert2';

const StudentAdd = () => {
  const [formData, setFormData] = useState({
    student_id: '',
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    address: '',
    phone: '',
    image: null,
    parent_name: '',
  });
  console.log(formData);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch(
        'https://edu-plus-server.onrender.com/student/students/',
        {
          method: 'POST',
          body: data,
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        console.log('Error Response:', errorData);
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      if (responseData) {
        Swal.fire({
          position: 'top-start',
          icon: 'success',
          title: 'Student added successfully.',
          showConfirmButton: false,
          timer: 2000,
        });
      }
      console.log('Success', responseData);
    } catch (error) {
      console.log('Error', error.message);
    }
  };
  return (
    <div className="flex items-center justify-center p-12">
      {/* <!-- Author: FormBold Team --> */}
      <div className="mx-auto w-full max-w-[650px] bg-white p-8 rounded-3xl">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="first_name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  id="first_name"
                  placeholder="First Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-inherit py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="last_name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  id="last_name"
                  placeholder="Last Name"
                  required
                  className="w-full rounded-md border border-[#e0e0e0] bg-inherit py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              className="w-full rounded-md border bg-inherit border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone Number
            </label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              id="phone"
              placeholder="Phone Number"
              min="0"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="parent_name"
              className="block text-gray-700 font-medium mb-2"
            >
              Parent Name
            </label>
            <input
              type="text"
              id="parent_name"
              name="parent_name"
              value={formData.parent_name}
              onChange={handleChange}
              placeholder="Parents Name"
              className="w-full rounded-md border bg-inherit border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="gender"
              className="block text-gray-700 font-medium mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400 bg-inherit"
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="student_id"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Student ID
            </label>
            <input
              type="number"
              name="student_id"
              value={formData.student_id}
              onChange={handleChange}
              id="student_id"
              placeholder="Student Id"
              min="0"
              required
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="image"
              className="block text-gray-700 font-medium mb-2"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              value={formData.Image}
              onChange={handleChange}
              placeholder="Image"
              className="w-full rounded-md bg-inherit border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full rounded-md border bg-inherit border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentAdd;
