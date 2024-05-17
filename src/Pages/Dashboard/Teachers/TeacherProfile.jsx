import { useState, useEffect, } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TeacherProfile = () => {
    const { teacherId } = useParams();
    const [teacher, setTeacher] = useState(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        user: '',
        name: '',
        email: '',
        password: '',
        phone_number: '',
        department: '',
        gender: '',
        date_of_join: '',
        address: '',
        image: null,
    });

    useEffect(() => {
        const fetchTeacherDetails = async () => {
            try {
                const response = await fetch(`https://edu-plus-server.onrender.com/teachers/teachers/${teacherId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch teacher details');
                }
                const data = await response.json();
                setTeacher(data);
                // Set form data with fetched teacher details
                setFormData({
                    user: data.user.username,
                    name: data.user.first_name,
                    email: data.email,
                    phone_number: data.phone_number,
                    department: data.department,
                    gender: data.gender,
                    date_of_join: data.date_of_join,
                    address: data.address,
                });
            } catch (error) {
                console.error('Error fetching teacher details:', error);
            }
        };

        fetchTeacherDetails();
    }, [teacherId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        for (const key in formData) {
            form.append(key, formData[key]);
        }

        try {
            const response = await fetch(`https://edu-plus-server.onrender.com/teachers/teachers/${teacherId}/`, {
                method: 'PUT',
                body: form,
            });
            if (!response.ok) {
                throw new Error('Failed to update teacher');
            }

            const updatedTeacher = await response.json();
            setTeacher(updatedTeacher);
            navigate("/dashboard/teachers");
        } catch (error) {
            console.error('Error updating teacher:', error);
        }
    };


    useEffect(() => {
        const fetchTeacherDetails = async () => {
            try {
                const response = await fetch(`https://edu-plus-server.onrender.com/teachers/teachers/${teacherId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch teacher details');
                }
                const data = await response.json();
                setTeacher(data);
            } catch (error) {
                console.error('Error fetching teacher details:', error);
            }
        };

        fetchTeacherDetails();
    }, [teacherId]);

    // Define inline styles
    const containerStyle = {
        // backgroundColor: '#f9f9f9',
        padding: '20px',
        // borderRadius: '8px',
        // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    };

    const detailStyle = {
        fontSize: '18px',
        marginBottom: '10px',
    };

    return (
        <div className='w-full'>
            {/* ---teacher details------ */}
            <div style={containerStyle} className='mx-5 my-5'>
                <h1 style={headingStyle}>Teacher Profile</h1>
                {teacher && (
                    <>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto gap-5'>
                            <div className="avatar">
                                <div className="w-60 rounded">
                                    {teacher.image ? (
                                        <img src={teacher.image} alt="teacher avatar" />
                                    ) : (
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png" alt="default avatar" />
                                    )}

                                </div>
                            </div>
                            <div>
                                <p style={detailStyle}><b>Teacher ID : </b>{teacher.teacher_ID}</p>
                                <p style={detailStyle}><b>Email :</b> {teacher.email}</p>
                                <p style={detailStyle}><b>Phone Number :</b> {teacher.phone_number}</p>
                                <p style={detailStyle}><b>Gender :</b> {teacher.gender}</p>
                                <p style={detailStyle}><b>Date of Join :</b> {teacher.date_of_join}</p>
                                <p style={detailStyle}><b>Department :</b> {teacher.department}</p>
                                <p style={detailStyle}><b>Address :</b> {teacher.address}</p>
                                {/* Render other details */}
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* ---teacher update----- */}

            <div className="bg-white rounded-lg m-5 shadow-lg p-10">
                <h1 className="text-2xl font-semibold pb-5">Update Your Profile Information</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">User</label>
                            <input
                                type="text"
                                name="user"
                                value={formData.user}
                                onChange={handleChange}
                                className="input input-bordered bg-gray-200 w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="input input-bordered bg-gray-200 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input input-bordered bg-gray-200 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                className="input input-bordered bg-gray-200 w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="text"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                className="input input-bordered bg-gray-200 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Department</label>
                            <input
                                type="text"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                className="input input-bordered bg-gray-200 w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Gender</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="select select-bordered bg-gray-200 w-full"
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Date of Joining</label>
                            <input
                                type="date"
                                name="date_of_join"
                                value={formData.date_of_join}
                                onChange={handleChange}
                                className="input input-bordered bg-gray-200 w-full"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Profile Image</label>
                            <input
                                type="file"
                                name="image"
                                onChange={handleFileChange}
                                className="file-input file-input-bordered bg-gray-200 w-full"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Address</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="textarea textarea-bordered bg-gray-200 w-full"
                                required
                            />
                        </div>

                    </div>

                    <div className="w-full text-center">
                        <button
                            type="submit"
                            className="w-3/4 mx-auto font-bold py-3 px-10 rounded focus:outline-none focus:shadow-outline"
                            style={{
                                backgroundColor: '#164863',
                                color: '#DDF2FD',
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#427D9D';
                                e.target.style.color = '#DDF2FD';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = '#164863';
                                e.target.style.color = '#DDF2FD';
                            }}
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>

        </div >
    );
};

export default TeacherProfile;
