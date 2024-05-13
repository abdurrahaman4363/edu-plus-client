import { useState, useEffect } from 'react';
import { FaEnvelope, FaHome, FaCalendarCheck, FaCheckCircle } from "react-icons/fa";
import { FaPhone } from 'react-icons/fa6';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await fetch(`https://edu-plus-server.onrender.com/teachers/teachers/`);
                console.log(response)
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setTeachers(data);
            } catch (error) {
                console.error('Error fetching teachers:', error);
            }
        };

        fetchTeachers();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* <h1>This is teacher list </h1> */}
            {teachers.map((teacher) => (
                <div key={teacher.teacher_ID} className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105">
                    <div className="avatar">
                        <div className="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                            {teacher.image ? (
                                <img src={teacher.image} alt="teacher avatar" />
                            ) : (
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png" alt="default avatar" />
                            )}

                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div>
                            <h2 className="text-2xl font-semibold">{teacher.user.username}</h2>
                            <span className="flex items-center space-x-2">
                                <FaCheckCircle />
                                <span className="dark:text-gray-600">{teacher.department}</span>
                            </span>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <FaCalendarCheck />
                                <span className="dark:text-gray-600">{teacher.date_of_join}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <FaHome />
                                <span className="dark:text-gray-600">{teacher.address}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <FaEnvelope />
                                <span className="dark:text-gray-600">{teacher.email}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <FaPhone />
                                <span className="dark:text-gray-600">{teacher.phone_number}</span>
                            </span>
                        </div>
                        <button className=" px-2 py-1 rounded-md"
                            style={{
                                backgroundColor: '#164863',
                                color: '#DDF2FD',
                                padding: '0.5rem 0.5rem',
                                borderRadius: '0.375rem',
                                borderWidth: '2px',
                                borderColor: '#1E40AF',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}
                        >View Profile</button>
                    </div>
                </div>
            ))}
        </div>

    );

};

export default Teachers;
