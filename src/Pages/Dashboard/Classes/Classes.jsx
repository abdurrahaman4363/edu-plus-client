import { useEffect } from 'react';
import { useState } from 'react';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch(
          'https://edu-plus-server.onrender.com/classes/'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClasses();
  }, []);
  console.log(classes);
  return (
    <div>
      <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 mt-5">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                ID
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Class Name
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Teacher Name
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {classes.map((cls) => (
              <tr key={cls?.id}>
                <td className="py-4 px-6 border-b border-gray-200">
                  {cls?.id}
                </td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">
                  {cls?.name}
                </td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">
                  {cls?.class_teacher}
                </td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">
                  {cls?.status}
                </td>
              </tr>
            ))}

            <tr>
              <td className="py-4 px-6 border-b border-gray-200">Jane Doe</td>
              <td className="py-4 px-6 border-b border-gray-200 truncate">
                janedoe@gmail.com
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                555-555-5555
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">
                  Inactive
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;
