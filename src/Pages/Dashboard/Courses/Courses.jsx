import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Courses = () => {
    const [courses, setCourses] = useState([]);
    console.log(courses, 'from courses');
    /*  name = models.CharField(max_length=100)
     code = models.CharField(max_length=20, unique=True)
     description = models.TextField()
     teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, null=True, blank=True) */

    useEffect(() => {
        fetch(`https://edu-plus-server.onrender.com/courses/`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleDelete = (id) => {
        console.log(id);
        // Show confirmation dialog before making the DELETE request
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                // If the user confirms, proceed with the DELETE request
                fetch(`https://edu-plus-server.onrender.com/courses/${id}/`, {
                    method: 'DELETE',
                })
                    .then(res => {
                        if (!res.ok) {
                            throw new Error('Network response was not ok');
                        }
                        // Check if the response has a body to parse
                        return res.text().then(text => text ? JSON.parse(text) : {});
                    })
                    .then(data => {
                        console.log(data, 'from delete course');
                        if (data) {
                            // Update the state to remove the deleted course
                            setCourses(prevCourses => prevCourses.filter(course => course.id !== id));
                            Swal.fire({
                                title: "Deleted!",
                                text: "Course has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.error('There was a problem with the delete request:', error);
                    });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // If the user cancels, show a cancellation message
                Swal.fire({
                    title: "Cancelled",
                    text: "Course deletion was cancelled.",
                    icon: "error"
                });
            }
        });
    };


    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="uppercase text-center font-bold text-xl">
                                #
                            </th>
                            {/* <th>Image</th> */}
                            <th className="uppercase text-center font-bold text-xl">Name</th>
                            <th className="uppercase text-center font-bold text-xl">Code</th>
                            <th className="uppercase text-center font-bold text-xl">Teacher</th>
                            <th className="uppercase text-center font-bold text-xl">Description</th>
                            <th className="uppercase text-center font-bold text-xl">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((item, index) => <tr key={index}>
                                <th className="text-center">
                                    {index + 1}
                                </th>

                                {   /*  <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td> */}

                                <td className="text-center">
                                    {item.name}
                                </td>

                                <td className="text-center">{item.code}</td>
                                <td className="text-center">{item.teacher}</td>
                                <td className="text-center">{item.description}</td>

                                <th className="text-center">
                                    <Link to={`/dashboard/editCourse/${item.id}`}>
                                        <button
                                            // onClick={() => handleDelete(item.id)}
                                            className="btn btn-sm btn-ghost bg-blue-900 mx-1">
                                            <FaEdit className="text-white"></FaEdit>
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="btn btn-sm btn-ghost bg-red-600">
                                        <FaTrashAlt className="text-white"></FaTrashAlt>
                                    </button>
                                </th>

                            </tr>
                            )

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );
};

export default Courses;