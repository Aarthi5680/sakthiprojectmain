import "../styles/Signup.css";
import React, { useState } from "react";
import axios from "axios";
import { CiUser, CiMail, CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    city: "",
    password: "",
  });

  const handlerout = () => {
    navigate("/signin");
  };

  const handleChange = (e) => {
    console.log(e.target.name);

    var name = e.target.name ? e.target.name : e.name;

    switch (name) {
      case "firstname":
        setData((prevData) => ({
          ...prevData,
          firstname: e.target.value,
        }));
        break;
      case "lastname":
        setData((prevData) => ({
          ...prevData,
          lastname: e.target.value,
        }));
        break;
      case "mobile":
        setData((prevData) => ({
          ...prevData,
          mobile: e.target.value,
        }));
        break;
      case "email":
        setData((prevData) => ({
          ...prevData,
          email: e.target.value,
        }));
        break;
      case "city":
        setData((prevData) => ({
          ...prevData,
          city: e.target.value,
        }));
        break;
      case "password":
        setData((prevData) => ({
          ...prevData,
          password: e.target.value,
        }));
        break;
    }
    console.log(data);
  };

  const handlesubmit = () => {
    console.log(data);

    axios
      .post("http://localhost:3004/api/Adduser", data)
      .then(function (response) {
        alert(response.data.message);
        navigate("/addmoments");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="App h-screen bg-slate-900  w-full	">
      {/* heading section */}
      <div className=" h-32 w-full	 ">
        <span className="text-slate-100 text-3xl"> &larr;</span>
      </div>

      {/* main form section */}

      <div action="" className="bg-white	 rounded-tl-3xl h-4/5	">
        <div className="flex w-full  items-center	  flex-col">
          <div className="my-4">
            <div className="text-3xl font-bold"> Sign Up</div>
            <div className="mt-2"> To be a member</div>
          </div>

          {/* content div */}
          <div className="w-9/12 ">
            <div className="w-full  flex ">
              <div className="w-1/2 ">
                <div className=" my-1">
                  <label htmlFor="" className="text-xs">
                    First name
                  </label>
                </div>

                <div className="flex ">
                  <div className="border-b-2 mt-1 p-2">
                    
                    <CiUser />
                  </div>

                  <input
                    type="text"
                    placeholder="name"
                    name="firstname"
                    id="firstname"
                    onChange={(e) => handleChange(e)}
                    className="border-b-2 ml-4 w-80"
                  />
                </div>
              </div>

              <div className=" w-1/2  	">
                <div className="my-1">
                  <label htmlFor="" className="text-xs ">
                    last name
                  </label>
                </div>

                <div className="flex ">
                  <span className="border-b-2 mt-1 p-2">
                    
                    <CiUser />
                  </span>
                  <input
                    type="text"
                    placeholder="last name"
                    name="lastname"
                    id="lastname"
                    onChange={(e) => handleChange(e)}
                    className="border-b-2 w-80  ml-3 "
                  />
                </div>
              </div>
            </div>

            <div className=" w-full flex mt-5 ">
              <div className="	w-1/2  ">
                <div className="my-1">
                  <label className="text-xs" htmlFor="">
                    Mobile no
                  </label>
                </div>

                <div>
                  <span className="border-b-2 ">
                    <select className="border-b-2 pb-1">
                      <option value=""></option>
                      <option>+91</option>
                    </select>
                  </span>
                  <input
                    type="text"
                    placeholder="mobile number"
                    name="mobile"
                    id="mobile"
                    onChange={(e) => handleChange(e)}
                    className="border-b-2 w-72  ml-3 p-1"
                  />
                </div>
              </div>

              <div className="	w-1/2 ">
                <div className="my-1">
                  <label className="text-xs" htmlFor="">
                    Email&minus;ID
                  </label>
                </div>

                <div className="flex ">
                  <span className="border-b-2 mt-1 p-2">
                    
                    <CiMail />
                  </span>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    id="email"
                    onChange={(e) => handleChange(e)}
                    className="border-b-2	 w-80  ml-3"
                  />
                </div>
              </div>
            </div>

            <div className=" w-full flex  mt-3">
              <div className="w-1/2 	">
                <div className="my-1">
                  <label className="text-xs" htmlFor="">
                    City
                  </label>
                </div>

                <div className="mt-1 ">
                  <input
                    type="text"
                    placeholder="City name"
                    name="city"
                    id="city"
                    onChange={(e) => handleChange(e)}
                    className="border-b-2 p-1	 w-64"
                  />
                </div>
              </div>

              <div className="	w-1/2 	">
                <div className="my-1">
                  <label className="text-xs" htmlFor="">
                    Enter Password
                  </label>
                </div>

                <div className="flex ">
                  <span className="border-b-2 mt-1 p-2">
                    <CiLock />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter password"
                    name="password"
                    id="password"
                    onChange={(e) => handleChange(e)}
                    className="border-b-2	 w-80  ml-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div>
              <button
                className="text-xl text-slate-100 bg-slate-900 font-bold border-black  w-40 h-10  rounded-full	"
                onClick={handlesubmit}
              >
                
                submit
              </button>
            </div>
            <div className="mt-2 flex">
              
              Already a member&#63;
              <p
                className="ml-1 cursor-pointer text-xl font-bold"
                onClick={handlerout}
              >
                Sign in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
