import React, { useState } from "react"

import Sidebar from "../components/sidebar"
import SellersHeader from "../components/SellersHeader"

import { FiBox } from "react-icons/fi"
import { BsPaletteFill, BsStack } from "react-icons/bs"

export default function CustomiseShop() {
  const [showSidebar, setShowSidebar] = useState(false)
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('')
    const [selectedFile, setSelectedFile] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    };

    const previewFile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSource(reader.result);
      };
    };
    
    const handleSubmitFile = (e) => {
      e.preventDefault();
      if(!previewSource) return;
      uploadImage(previewSource);
    };

    const uploadImage = async (base64EncodedImage) => {
      console.log(base64EncodedImage);
      try {
        await fetch('/api/upload', {
          method: 'POST',
          body: JSON.stringify({data: base64EncodedImage}),
          headers: {'Content-type': 'application-json'}
        })
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className="font-poppins lg:grid lg:grid-cols-6  min-h-screen relative">
      <Sidebar showSidebar={showSidebar} page="customise-shop" />

      <div className="col-span-5 bg-gray-100 px-6 py-3 lg:px-16 sm:py-8">
        <SellersHeader
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />

        <div className="flex mt-4 py-4 w-full items-center justify-between">
          <span className="flex space-x-2 text-primary">
            <FiBox size={32} />
            <p className="text-lg font-semibold text-black">Customise Shop</p>
          </span>
          <button className="bg-primary text-white py-2 w-4/12 rounded-lg text-center">
            Save
          </button>
        </div>

        <div className="flex md:flex-row flex-col py-4 md:space-x-4 md:space-y-0 space-y-4">
          {/** store info */}
          <div className="md:w-8/12 w-full space-y-2">
            <div className="bg-white p-4 rounded font-semibold shadow">
              Store Info
            </div>

            <div className="bg-white p-4 space-y-4 rounded shadow">
              <input
                type="text"
                className="px-4 py-2 border border-primary rounded-lg lg:w-8/12 w-full placeholder:text-gray-400 placeholder:text-sm"
                placeholder="Store Name"
                autoComplete=""
              />

              <div className="flex space-x-4">
                <textarea
                  className="px-4 py-2 border border-primary rounded-lg lg:w-8/12 w-full placeholder:text-gray-400 placeholder:text-sm"
                  rows="4"
                  placeholder="Store Description Max (40)"
                ></textarea>
                <p className="hidden lg:block w-3/12 italic text-sm">
                  This is a short description of what your store offers be
                  short, precise and brief as this is what customers would see
                </p>
              </div>

              <input
                type="text"
                className="px-4 py-2 border border-primary rounded-lg lg:w-8/12 w-full placeholder:text-gray-400 placeholder:text-sm"
                placeholder="Store full legal address"
              />

              <div className="lg:w-8/12 w-full flex space-x-2">
                <div className="w-1/2 px-4 py-2 border border-primary rounded-lg">
                  <span className="flex items-center sm:justify-start justify-center space-x-2">
                    <img
                      src={require("../assets/nigeria.png")}
                      alt=""
                      className="w-6 h-3 sm:mt-0 mt-1"
                    />
                    <p className="text-sm hidden sm:block">Nigeria</p>
                  </span>
                </div>
                <input
                  type="text"
                  className="w-1/2 px-4 py-2 border border-primary rounded-lg placeholder:text-gray-400 placeholder:text-sm"
                  placeholder="State"
                />
              </div>

              <input
                type="text"
                className="px-4 py-2 border border-primary rounded-lg lg:w-8/12 w-full placeholder:text-gray-400 placeholder:text-sm"
                placeholder="Business Contact"
                autoComplete=""
              />

              <input
                type="text"
                className="px-4 py-2 border border-primary rounded-lg lg:w-8/12 w-full placeholder:text-gray-400 placeholder:text-sm"
                placeholder="Store Name"
                autoComplete="Additional Info"
              />
            </div>
          </div>

          {/** store appearance */}
          <div className="bg-white md:w-4/12 w-full p-4 space-y-5 rounded shadow">
            <p className="font-semibold text-lg text-black py-2">
              Store Appearance
            </p>
                <form onSubmit={handleSubmitFile} className="w-full">
                   <div className="flex items-center"> 
                   <label className="text-md text-gray-700">Upload Logo</label>
                    <BsStack className="text-xl" style={{paddingLeft: '8px'}}/>
                   </div>
                    <input type="file" name="image" onChange={handleFileInputChange} value={fileInputState} className="w-full" /> 
                   <div className="flex items-center">
                   <label className="text-md text-gray-700">Background Image</label>
                    <BsPaletteFill className="text-xl" style={{paddingLeft: '8px'}}/>
                   </div>
                    <input type="file" name="image" onChange={handleFileInputChange} value={fileInputState} className="w-full"/> 
                    <button className="bg-blue-600 text-white py-1 px-2 rounded-md" type="submit">Submit</button>
                </form>
                {previewSource && (
                  <img src={previewSource}  className="rounded-full" alt="Selected" style={{height: '120px'}} />
                )}
            {/* <span className="flex items-center space-x-2">
              <p className="text-sm text-black">Upload Logo</p>
              <BsStack />
            </span>
            <span className="flex items-center space-x-2">
              <p className="text-sm text-black">Background Image</p>
              <BsPaletteFill />
            </span>

            <div className="h-[300px] w-full bg-shop bg-cover bg-center flex justify-center items-end rounded-lg">
              <img
                src={require("../assets/avatar-0.jpg")}
                alt=""
                className="w-24 h-24 rounded-full mb-12"
              />
            </div> */}

            <span className="text-blue-500 underline text-sm mt-8">
              Preview
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
