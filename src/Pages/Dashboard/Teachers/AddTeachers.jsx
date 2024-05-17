import { useState } from 'react';

const AddTeachers = () => {
    const initialFormData = {
        email: '',
        name: '',
        password: '',
        phone_number: '',
        department: '',
        gender: '',
        address: '',
        image: null,
        date_of_join: '',
        user: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData();
        for (const key in formData) {
            form.append(key, formData[key]);
        }

        fetch('https://edu-plus-server.onrender.com/teachers/teachers/', {
            method: 'POST',
            body: form,
            headers: {
                'Accept': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => {
                        throw new Error(JSON.stringify(err));
                    });
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    const handleReset = () => {
        setFormData(initialFormData);
    };

    return (
        <div className="w-full">
            <div className="bg-white rounded-lg m-5 shadow-lg p-10">
                <h1 className="text-2xl font-semibold pb-5">Add Teacher</h1>
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
                                value={formData.password}
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

                    <div className="flex gap-1">
                        <button
                            type="submit"
                            className="m-auto mt-3 mb-3 font-bold mx-2 my-3 py-3 px-10 rounded focus:outline-none focus:shadow-outline"
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
                            Save
                        </button>
                        <button
                            type="button"
                            className="m-auto mt-3 mb-3 font-bold mx-2 my-3 py-3 px-10 rounded focus:outline-none focus:shadow-outline"
                            style={{
                                backgroundColor: '#427D9D',
                                color: '#DDF2FD',
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#164863';
                                e.target.style.color = '#DDF2FD';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = '#427D9D';
                                e.target.style.color = '#DDF2FD';
                            }}
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTeachers;
