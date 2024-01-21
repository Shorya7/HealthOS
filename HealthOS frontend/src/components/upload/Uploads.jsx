import React, { useState, useEffect } from "react";
// import ScanDoc from "./ScanDoc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
// import "./Uploads.css";

import HealthFood from "../../assets/logbg.svg"
const showToast = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

const Uploads = () => {
  const Navigate = useNavigate();

  const [file1, setFile1] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file1);

    try {
      const response = await fetch("http://127.0.0.1:4000/process-image", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();

        toast.success("Data extracted successfully", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(responseData);
        localStorage.setItem("docs", true);
        localStorage.setItem("resp", responseData.text);

  let responses = localStorage.getItem("resp");
  console.log(String(responses));
        
let responseArray = responses ? responses.split("\n").map((item) => item.trim()) : [];


  const healthy = [];
  const unhealthy = [];
  let index = 2;
  while (responseArray[index] !== "") {
      healthy.push(responseArray[index].substring(2));
    
    index++;
  }
  for (let i = index + 3; i < responseArray.length; i++) {
      unhealthy.push(responseArray[i].substring(2));
    
  }

  console.log(healthy, unhealthy);
  localStorage.setItem("healthyItems", JSON.stringify(healthy));
  localStorage.setItem("unhealthyItems", JSON.stringify(unhealthy));

        window.location.reload(false);
      } else {
        showToast("Error uploading files");
      }
    } catch (error) {
      showToast(`error while uploading a file`);
      console.error(error);
    }

    setLoading(false);
  };

  const handleFileChange = (e, setFileCallback) => {
    const selectedFile = e.target.files[0];
    setFileCallback(selectedFile);
  };
  useEffect(() => {
    let docs = localStorage.getItem("docs");
    if (docs) {
        Navigate("/response_diet");
      
    }
  }, [Navigate]);

  return (


<div className="fullsc">
      <ToastContainer autoClose={4000} theme="colored" newestOnTop={true} />
      <div className="mainbody">
        <div className="left_side">
          <div className="left_logo">
          <img src={HealthFood} alt="Healthy"/>
          </div>
          <div className="left_cont">
          Scan Food Menu 
          </div>
        </div>
        <div className="right_side">
          <div className="container">
            <div className="head_log">Upload Outlet's Menu</div>

            <input
                type="file"
                accept="image/jpeg"
                onChange={(e) => handleFileChange(e, setFile1)}
              />
              <label htmlFor="file">Upload Menu</label>


            
            <div className="sub_btn_log">
            <button
                  type="submit"
                  disabled={loading}
                  onClick={handleFileUpload}>
                  {loading ? <>Uploading..</> : <>Submit</>}
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploads;
