import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { useParams } from "react-router-dom";

const LandingPage = () => {
  const { username } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popUp, setPopUp] = useState(false);
  const [clickData, setClickData] = useState({});

  useEffect(() => {
    // Define the URL you want to fetch data from
    // const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    const apiUrl = "http://universities.hipolabs.com/search?country=Indonesia";

    // Make the GET request using the Fetch API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  console.log(data);

  const buttonPopup = (item) => {
    setPopUp(!popUp);
    setClickData(item);
  };
  const buttonClosePopup = () => {
    setPopUp(!popUp);
    setClickData({});
  };

  return (
    <div className=" justify-center my-[100px] mx-[200px] w-[1200px]">
      <div className="mb-[20px] text-lg">Welcome {username}</div>
      {popUp ? (
        <Modal data={clickData} isOpen={popUp} onClose={buttonClosePopup} />
      ) : null}
      <div class="flex overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-black uppercase bg-gray-50 dark:bg-gray-300 dark:text-black">
            <tr>
              <th scope="col" class="px-6 py-3">
                University
              </th>
              <th scope="col" class="px-6 py-3">
                Website
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer"
                  onClick={() => {
                    buttonPopup(item);
                  }}
                >
                  {item.name}
                </th>
                <td class="px-6 py-4">{item.web_pages}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LandingPage;
