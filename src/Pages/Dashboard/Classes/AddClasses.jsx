import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const AddClasses = () => {
  const [teacherName, setTeacherName] = useState([]);
  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await fetch(
          'http://edu-plus-server.onrender.com/teachers/teachers/'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTeacherName(data.class_teacher);
        console.log(data.class_teacher);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTeacher();
  }, []);
  console.log(teacherName);
  const [formData, setFormData] = useState({
    name: '',
    class_teacher: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(
        'https://edu-plus-server.onrender.com/classes/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        console.log('Error Response:', errorData);
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
      if (data) {
        Swal.fire({
          position: 'top-start',
          icon: 'success',
          title: 'Class added successfully.',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      console.log('Error', error.message);
    }
  };
  return (
    <div className="flex items-center justify-center p-12">
      {/* <!-- Author: FormBold Team --> */}
      <div className="mx-auto w-full max-w-[650px] bg-white p-8 rounded-3xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Classes Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Class Name"
              className="w-full rounded-md border bg-inherit border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="class_teacher"
              className="block text-gray-700 font-medium mb-2"
            >
              Teacher
            </label>
            <select
              id="class_teacher"
              name="class_teacher"
              value={formData.class_teacher}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400 bg-inherit"
              required
            >
              <option value="">Select Teacher</option>
              {teacherName.map((name) => (
                <option key={name.id} value={name.name}>
                  {name.name}
                </option>
              ))}
              {/* <option value="">Test</option>
              <option value="">Test1</option> */}
            </select>
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

export default AddClasses;
