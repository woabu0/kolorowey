import React, { useState } from "react";

export const Contact = () => {
  const [selectedJob, setSelectedJob] = useState("");

  const handleJobChange = (event) => {
    setSelectedJob(event.target.value);
  };

  const [volumeQuantity, setvolumeQuantity] = useState({
    Pageviews: false,
    Visits: false,
    Impressions: false,
    "Active Users": false,
  });

  const handleCheckboxChange = (volumeID) => {
    setvolumeQuantity((prevQuantities) => ({
      ...prevQuantities,
      [volumeID]: !prevQuantities[volumeID],
    }));
  };

  return (
    <div id="contact" className="w-[360px] md:w-[700px] lg:w-[950px] xl:w-[1100px] 2xl:w-[1440px] m-auto">
      <h1 className="text-[30px] text-center my-16">Contact Us</h1>
      <form className="text-[12px] w-[300px] md:w-[610px] m-auto">
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
          <div className="flex flex-col gap-2">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-[300px] h-[48px] rounded-lg border-black border-[2px] focus:outline-[#be4dec] px-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Compnay/Website:</label>
            <input
              type="text"
              placeholder="Enter your Company/Website"
              className="w-[300px] h-[48px] rounded-lg border-black border-[2px] focus:outline-[#be4dec] px-3"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center mt-5">
          <div className="flex flex-col gap-2">
            <label>Work Email:</label>
            <input
              type="text"
              placeholder="Enter your Work Email"
              className="w-[300px] h-[48px] rounded-lg border-black border-[2px] focus:outline-[#be4dec] px-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Phone:</label>
            <input
              type="text"
              placeholder="Enter you Phone"
              className="w-[300px] h-[48px] rounded-lg border-black border-[2px] focus:outline-[#be4dec] px-3"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label>Who you are?</label>
          <select
            value={selectedJob}
            onChange={handleJobChange}
            name="who"
            id="who"
            className="w-full h-[48px] rounded-lg border-black border-[2px] focus:outline-[#be4dec] cursor-pointer px-3"
          >
            <option value="">Select who you are</option>
            <option value="Publisher">Publisher</option>
            <option value="Advertiser">Advertiser</option>
            <option value="D2c Brand">D2C Brand</option>
            <option value="B2B Business">B2B Business</option>
            <option value="Any Other">Any Other</option>
          </select>
        </div>
        <div>
          {selectedJob === "Publisher" && (
            <div className="mt-5">
              <label>
                Monthly Volumes (Pageviews/Visits/Impressions/Active Users):
              </label>
              <div className="flex flex-col md:flex-row gap-2 items-start justify-between mt-2">
                {Object.keys(volumeQuantity).map((volumeID) => (
                  <div
                    key={volumeID}
                    className="w-full md:w-[150px] flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        checked={volumeQuantity[volumeID]}
                        onChange={() => handleCheckboxChange(volumeID)}
                        className="cursor-pointer accent-[#be4dec]"
                      />
                      <label>{volumeID}</label>
                    </div>
                    {volumeQuantity[volumeID] && (
                      <div>
                        <input
                          type="number"
                          placeholder="Quantity"
                          className="w-full h-[48px] rounded-lg border-black border-[2px] focus:outline-[#be4dec] cursor-pointer px-3"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label>Monthly Revenue (USD):</label>
                <select
                  name="revenues"
                  className="w-full h-[48px] rounded-lg border-black border-[2px] focus:outline-[#be4dec] cursor-pointer px-3"
                >
                  <option value="Less than 1,000 USD">
                    Less than 1,000 USD
                  </option>
                  <option value="1,000 - 4,000 USD">1,000 - 4,000 USD</option>
                  <option value="4,000 - 10,000 USD">4,000 - 10,000 USD</option>
                  <option value="10,000 - 20,000 USD">
                    10,000 - 20,000 USD
                  </option>
                  <option value="More than 40,000 USD">
                    More than 40,000 USD
                  </option>
                </select>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label>What are you seeking for?</label>
          <textarea
            name="message"
            placeholder="Enter your Message"
            className="w-full h-28 rounded-lg border-black border-[2px] focus:outline-[#be4dec] p-3"
          ></textarea>
        </div>
        <div className="mt-5 flex items-center gap-1">
          <input type="checkbox" className="cursor-pointer accent-[#be4dec]" />
          <p className="text-[10px] md:text-[14px]">
            Do you agree with all the terms & conditions?
          </p>
        </div>
        <button
          type="submit"
          className="w-full h-[48px] rounded-lg bg-color text-white text-[18px] mt-5 hover:bg-[#f7f7f7] hover:scale-110 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
