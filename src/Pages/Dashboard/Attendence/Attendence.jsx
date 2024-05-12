
const Attendence = () => {
    return (
        <div className="w-full">
            <div className="bg-white rounded-lg m-5 shadow-lg p-10">
                <h1 className="text-2xl font-semibold pb-5">Student Attendence</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <h1 className="mb-2">Select Class</h1>
                        <select className="select select-bordered bg-gray-200 w-full max-w-xs">
                            <option disabled selected>Select Class</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                            <option>Four</option>
                            <option>Five</option>
                        </select>
                    </div>
                    <div>
                        <h1 className="mb-2">Select Section</h1>
                        <select className="select select-bordered bg-gray-200 w-full max-w-xs">
                            <option disabled selected>Select Section</option>
                            <option>A</option>
                            <option>B</option>
                        </select>
                    </div>
                    <div>
                        <h1 className="mb-2">Select Month</h1>
                        <select className="select select-bordered bg-gray-200 w-full max-w-xs">
                            <option disabled selected>Select Month</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                    </div>
                    <div>
                        <h1 className="mb-2">Select Year</h1>
                        <select className="select select-bordered bg-gray-200 w-full max-w-xs">
                            <option disabled selected>Select Year</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="mt-5 px-5 py-5 rounded-md"
                        style={{
                            backgroundColor: '#164863',
                            color: '#DDF2FD',
                            padding: '0.5rem 2rem',
                            borderRadius: '0.375rem',
                            borderWidth: '2px',
                            borderColor: '#1E40AF',
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}
                    >Save</button>
                    <button className="mt-5 px-2 py-1 rounded-md"
                        style={{
                            backgroundColor: '#427D9D',
                            color: '#DDF2FD',
                            padding: '0.5rem 2rem',
                            borderRadius: '0.375rem',
                            borderWidth: '2px',
                            borderColor: '#427D9D',
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}
                    >Reset</button>
                </div>

            </div>


            {/* <div className="bg-white rounded-lg m-5 shadow-lg p-10">
                <h1 className="text-2xl font-semibold pb-5">Attendence Sheet Of Class Three: Section A, April 2024</h1>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr style={{
                                backgroundColor: '#164863',
                                color: '#DDF2FD',
                            }} >
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> */}
        </div>

    );
};

export default Attendence;