import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AddCourse = () => {

    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);
    const navigate = useNavigate()
    // console.log({teachers,students});

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch(
                    'https://edu-plus-server.onrender.com/student/students/'
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data);
                setStudents(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchStudents();
    }, []);


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


    const handleCourses =(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const code = form.code.value;
        const description = form.description.value;
        const teacher = form.teacher.value;
        const students = form.students.value.split(',').map(student => student.trim()); // Convert to array
        // console.log({name,code,description,teacher,students},'from courses');
        const courseInfo = {
            name,
            code,
            description,
            teacher,
            students
        }
        fetch(`https://edu-plus-server.onrender.com/courses/`,{
            method:"POST",
            headers:{'content-type':"application/json"},
            body:JSON.stringify(courseInfo)
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            form.reset()
            Swal.fire({
                position: 'top-start',
                icon: 'success',
                title: 'Course added successfully.',
                showConfirmButton: false,
                timer: 2000
            });
            navigate('/dashboard/courses');
        })
    }




    return (
        <div className="w-full">
            <div className="bg-white rounded-lg m-5 mt-2 shadow-lg p-10">
                <h1 className="text-2xl text-center font-bold  pb-5">Add Course</h1>
                <form onSubmit={handleCourses} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Course Name</label>
                            <input
                                type="text"
                                name="name"
                                className="input input-bordered bg-gray-200 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Course Code</label>
                            <input
                                type="text"
                                name="code"
                                className="input input-bordered bg-gray-200 w-full"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            className="textarea textarea-bordered bg-gray-200 w-full"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Teacher</label>
                            <select
                                name="teacher"
                                className="select select-bordered bg-gray-200 w-full"
                                required
                            >
                                <option value="">Select a Teacher</option>
                                {teachers.map((teacher) => (
                                    <option key={teacher.id} value={teacher.teacher_ID}>
                                    {teacher.user}
                                    </option>
                                ))}
                            </select>
                        </div>


                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Students</label>
                            <select
                                name="students"
                                className="select select-bordered bg-gray-200 w-full"
                                multiple
                                required
                            >
                                {students.map((student) => (
                                    <option key={student.id} value={student.student_id}>
                                        {student.first_name } {student.last_name}
                                    </option>
                                ))}
                            </select>
                        </div>


                    </div>

                    <div className="flex gap-1">
                        <button
                            type="submit"
                            className="btn btn-active btn-neutral w-full m-auto mt-3 mb-3 font-bold my-3 py-3 px-10 rounded focus:outline-none focus:shadow-outline"
                        >

                            Add Course
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCourse;
