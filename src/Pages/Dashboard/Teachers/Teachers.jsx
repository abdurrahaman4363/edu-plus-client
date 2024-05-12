import { useState, useEffect } from 'react';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/teachers/teachers/');
                // console.log(response)
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

    // return (
    //     <div>
    //         <h1>Teacher Information</h1>
    //         <div className="overflow-x-auto">
    //             <table className="table">
    //                 <thead>
    //                     <tr>
    //                         <th></th> {/* Checkbox column */}
    //                         <th>Name</th>
    //                         <th>Email</th>
    //                         <th>Phone Number</th>
    //                         <th>Department</th>
    //                         <th>Gender</th>
    //                         <th>Address</th>
    //                         <th>Date of Join</th>
    //                         <th>Image</th> {/* New column for image */}
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {teachers.map((teacher) => (
    //                         <tr key={teacher.teacher_ID}>
    //                             <td>
    //                                 <label>
    //                                     <input type="checkbox" className="checkbox" />
    //                                 </label>
    //                             </td>
    //                             <td>{teacher.name}</td>
    //                             <td>{teacher.email}</td>
    //                             <td>{teacher.phone_number}</td>
    //                             <td>{teacher.department}</td>
    //                             <td>{teacher.gender}</td>
    //                             <td>{teacher.address}</td>
    //                             <td>{teacher.date_of_join}</td>
    //                             <td>
    //                                 <div className="avatar">
    //                                     <div className="mask mask-squircle w-12 h-12">
    //                                         <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png' alt="Teacher Avatar" />
    //                                     </div>
    //                                 </div>
    //                             </td>
    //                         </tr>
    //                     ))}
    //                 </tbody>
    //             </table>
    //         </div>
    //     </div>
    // );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {teachers.map((teacher) => (
                <div key={teacher.teacher_ID} className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png" alt="teacher avatar" />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">{teacher.name}</h2>
                            <span className="text-sm dark:text-gray-600">{teacher.department}</span>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                </svg>
                                <span className="dark:text-gray-600">{teacher.email}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
                                    <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                                </svg>
                                <span className="dark:text-gray-600">{teacher.phone_number}</span>
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

};

export default Teachers;
