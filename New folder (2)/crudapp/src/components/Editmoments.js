import React, { useEffect, useState } from "react";
import "../styles/Editmoments.css";
import { AiOutlineMenu } from "react-icons/ai";
import { ImImage } from "react-icons/im";
import { FiChevronDown, FiUpload } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Editmoments() {
  const navigate = useNavigate()
  const [updateuserData, setUpdateUserData] = useState([])

  const [input, setinput] = useState({
    title: "",
    tag: "",
    image:""
  });

  const userid = useParams()

  console.log(userid);

  const getEditUser = () => {
    axios
      .get(`https://sakthimainproject.onrender.com/getuserDetails/${userid.userid}`)
      .then(function (response) {
        setUpdateUserData(response.data.data)
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getEditUser()
  }, []);

  const handleEdit = () => {
    axios
      .put(`https://sakthimainproject.onrender.com/api/updateUser/${userid.userid}`,input)
      .then(function (response) {
        getEditUser()
        navigate('/moments')
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // useEffect(() => {
  //   updateuser()
  // }, []);

  console.log(updateuserData);

  const handleFileChange = (e) => {
    console.log(e.target);
    convertBase64(e.target.files[0]);
}

  const handleChange = (e) => {
    console.log(e.target.value);
    var name = e.target.name ? e.target.name : e.name;
    switch (name) {
      case "title":
        setinput((preValue) => ({
          ...preValue,
          title: e.target.value,
        }));
        break;
      case "tag":
        setinput((preValue) => ({
          ...preValue,
          tag: e.target.value,
        }));
        break;
      case "image":
        convertBase64(e.target.files[0]);
        break;
    }
    console.log(input);
  };
  function convertBase64(file, type) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        console.log(fileReader.result);
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    }).then((files) => {
      console.log(files);
      setinput((preValue) => ({
        ...preValue,
        image: files,
      }));
    });
  }
  return (
    <div>
      <div className=" flex h-screen w-full">
        <div className="h-screen w-80	 shadow-xl ">
          <div className=" mt-32">
            <div className="ml-10"> Profile</div>
            <div className="flex justify-between  mt-6 bg-slate-900 border-2 p-3">
              <div className="ml-10 text-slate-100 text-xl font-bold">
                
                Moments
              </div>
              <span className="pt-1.5 mr-3 text-slate-100">
                
                <FiChevronDown />
              </span>
            </div>

            <div className="flex flex-col ml-20">
              <span className="my-3">Momentlist</span>
              <span>Add new moment</span>
            </div>
          </div>
        </div>
        <div className="w-11/12">
          <div>
            <div className="h-12 w-full   flex justify-between border-2">
              <div className="p-2">
                
                <AiOutlineMenu className="text-3xl " />
              </div>
              <div className="flex p-2x mr-3">
                <span className="mr-3">
                  
                  <img
                    className="w-8 h-8 object-cover rounded-full "
                    src=""
                    alt="N"
                  />
                </span>
                <span className="pt-1.5">
                  <FiChevronDown />
                </span>
              </div>
            </div>

            <div className="h-12 p-3 text-xl font-bold w-full border-2 border-t-0 ">
              <span className=""> edit moment</span>
            </div>
          </div>

          <div className=" m-5 p-3 h-4/6   shadow-xl border-2">
            <div className=" px-20">
              <div className="my-1">
                <label className="text-sm" htmlFor="">
                  Title
                </label>
              </div>

              <div className="mt-1 ">
                <input
                  type="text"
                  placeholder=" Give a tile"
                  name="title"
                  id="title"
                  defaultValue={updateuserData?.title ? updateuserData?.title : null}
                  onChange={(e) => handleChange(e)}
                  className="border-b-2  w-full"
                />
              </div>
            </div>
            <div>
              <div className="flex px-20 flex-wrap w-full">
                <div className="w-1/2    ">
                  <div className="  my-10">
                    <div className="my-1">
                      <label className="text-sm" htmlFor="">
                        Tags
                      </label>
                    </div>

                    <div className="mt-1 ">
                      <input
                        type="text"
                        placeholder=" Give a tile"
                        name="tag"
                        id="tag"
                        defaultValue={updateuserData?.tag ? updateuserData?.tag : null}                        onChange={(e) => handleChange(e)}
                        className="border-b-2  w-full"
                      />
                    </div>
                  </div>
                  <div className="">
                    <span className="text-sm">Uploading </span>
                    <div>
                      <span>
                        {/* <ImImage className="text-5xl" /> */}
                        <img src={updateuserData?.image ? updateuserData?.image : null} alt="noimage"  />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-1/2  p-4 flex  flex-col items-center justify-center">
                  <div className=" w-56 h-56 border-2  border-dashed	flex  flex-col items-center justify-center">
                    <div>
                      <FiUpload className="text-5xl" />
                    </div>
                    <div className=""> drag and dorp file</div>
                    <div className="font-bold">OR</div>
                    <div className="">
                      
                      <input
                        type="file"
                        className=" text-slate-100 bg-slate-900  border-black  w-24 h-7  rounded-full	"
                        accept=".png, .jpg, .jpeg"
                        name="image"
                        id="image"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full  justify-center">
            
            <button className="text-xl text-slate-100 bg-slate-900 font-bold border-black  w-40 h-10  rounded-full	" onClick={handleEdit}>
              
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editmoments;
