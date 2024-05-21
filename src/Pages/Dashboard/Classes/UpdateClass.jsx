const UpdateClass = () => {
  return (
    <div className="flex items-center justify-center p-12">
      {/* <!-- Author: FormBold Team --> */}
      <div className="mx-auto w-full max-w-[650px] bg-white p-8 rounded-3xl">
        <form>
          <div className="mb-5">
            <label
              htmlFor="clsName"
              className="block text-gray-700 font-medium mb-2"
            >
              Classes Name
            </label>
            <input
              type="text"
              id="clsName"
              name="clsName"
              //   value={formData.pName}
              //   onChange={handleChange}
              placeholder="Enter Class Name"
              className="w-full rounded-md border bg-inherit border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="gender"
              className="block text-gray-700 font-medium mb-2"
            >
              Teacher
            </label>
            <select
              id="gender"
              name="gender"
              //   value={formData.gender}
              //   onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400 bg-inherit"
              required
            >
              <option value="">Select Teacher</option>
              <option value="male">Test</option>
              <option value="female">Test1</option>
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

export default UpdateClass;
