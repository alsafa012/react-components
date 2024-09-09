import React, { useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const maritalStatusOptions = [
  { id: "single", label: "Single" },
  { id: "married", label: "Married" },
  { id: "divorced", label: "Divorced" },
  { id: "widowed", label: "Widowed" },
  { id: "separated", label: "Separated" },
  { id: "others", label: "Others" },
];
const RadioInputForm = () => {
  const [userGender, setUserGender] = useState("");
  const [userMaritalStatus, setUserMaritalStatus] = useState("");

  const formRef = useRef(null);
  const handleRegistration = (e) => {
    e.preventDefault();
    // const form = e.target;
    const form = formRef.current;
    const gender = form.gender.value;
    const maritalStatus = form.maritalStatus.value;

    const DotNeededData = {
      gender: userGender,
      formGender: gender,
      marital_status: userMaritalStatus,
      maritalStatusFromForm: maritalStatus,
    };
    console.log(DotNeededData);

    // register
  };

  return (
    <div>
      <p className="text-2xl text-center font-medium">RadioInputForm</p>
      <div className="min-h-scree flex justify-center items-center py-5 overflow-hidden bg-[url('https://i.ibb.co/tHZ5X4S/light-blue-project-management-concept-23-2147782704.jpg')]">
        <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
          <form
            ref={formRef}
            onSubmit={handleRegistration}
            // className="w-[90%] md:w-[80%] lg:w-[50%] mx-auto p-5 border bg-slate-600  rounded-xl space-y-2"
            className="w-[90%] md:w-[80%] lg:w-[50%] mx-auto p-5 border border-blue-200 backdrop-blur-xl rounded-xl space-y-2"
          >
            {/* Gender */}
            <p className="text-center text-lg font-medium bg-gray-500 text-white rounded-xl">
              Gender Status using Static👇👇
            </p>
            <div className="flex items-start md:items-center gap-5">
              <label className="font-semibold text-lg">
                <span htmlFor="" className="text-black">
                  Gender
                </span>
              </label>
              <div className="flex flex-wrap justify-center gap-5 text-center">
                {/* male */}
                <div className="flex flex-row-reverse items-center gap-2">
                  <label
                    htmlFor="male"
                    className="font-semibold text-lg text-black"
                  >
                    Male
                  </label>
                  <input
                    onChange={() => setUserGender("male")}
                    checked={userGender === "male"}
                    className="h-10 cursor-pointer p-2 rounded-md"
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    required
                  />
                </div>
                {/* female */}
                <div className="text-xl flex flex-row-reverse items-center gap-2">
                  <label
                    htmlFor="female"
                    className="font-semibold text-lg text-black"
                  >
                    Female
                  </label>
                  <input
                    onChange={() => setUserGender("female")}
                    checked={userGender === "female"}
                    className="h-6 cursor-pointer p-2 rounded-md"
                    type="radio"
                    name="gender"
                    value="femaless"
                    id="female"
                  />
                </div>
                {/* others */}
                <div className="text-xl flex flex-row-reverse items-center gap-2">
                  <label
                    htmlFor="otherGender"
                    className="font-semibold text-lg text-black"
                  >
                    Others
                  </label>
                  <input
                    onChange={() => setUserGender("others")}
                    checked={userGender === "others"}
                    className="h-6 cursor-pointer p-2 rounded-md"
                    type="radio"
                    name="gender"
                    value="othersss"
                    id="otherGender"
                  />
                </div>
              </div>
            </div>
            {/* Marital Status */}
            <p className="text-center text-lg font-medium bg-gray-500 text-white rounded-xl">Marital Status using map👇👇</p>
            <div className="flex items-start gap-5">
              <label className="font-semibold text-lg text-nowrap text-black mt-[20px]">
                <span>Marital Status</span>
              </label>
              <div className="flex flex-wrap justify-center gap-5 text-center mt-[15px]">
                {maritalStatusOptions.map((status, ind) => (
                  <div
                    key={ind}
                    className="text-xl flex flex-row-reverse items-center gap-2"
                  >
                    <label
                      htmlFor={status.id}
                      className="font-semibold text-lg text-black"
                    >
                      {status.label}
                    </label>
                    <input
                      onChange={() => setUserMaritalStatus(status.id)}
                      checked={userMaritalStatus === status.id}
                      className="h-10 cursor-pointer p-2 rounded-md"
                      type="radio"
                      id={status.id}
                      //   name and value given for if need to get selected values from form
                      name="maritalStatus"
                      value={status.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p>userGender: {userGender}</p>
              <p>userMaritalStatus: {userMaritalStatus}</p>
            </div>
            <button
              className="text-start px-3 py-2 border rounded-md bg-blue-500 font-bold text-white hover:bg-blue-600 border-none"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RadioInputForm;
