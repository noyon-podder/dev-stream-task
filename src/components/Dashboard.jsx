import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import "../App.css";
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [size, setSize] = useState(10);
  const count = data.length;

  const pages = Math.ceil(count / size);

  //data fetch and store data in state
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <section className="container px-4 mx-auto">
      <span className="text-indigo-800 text-lg  ">Show Per Page: </span>
      <select
        className="my-4 border px-3"
        onChange={(event) => setSize(event.target.value)}
      >
        <option value="5">5</option>
        <option value="10" selected>
          10
        </option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      {/* table part start here  */}
      <div className="flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <h2>ID</h2>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Title
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Body
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200  ">
                  {data.map((d) => (
                    <tr key={d.id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div>{d.id}</div>
                      </td>
                      <td>{d.title}</td>
                      <td>
                        {d?.body.length < 20
                          ? d.body
                          : `${d.body.slice(0, 50)}...`}
                      </td>
                      <td>
                        <div className="flex items-center gap-6">
                          <CiEdit className="text-indigo-900 hover:text-indigo-600 text-lg cursor-pointer" />
                          <MdDelete className="text-indigo-900 hover:text-indigo-600 text-lg cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* pagination part start here  */}
      <div className="flex items-center justify-between mt-6">
        <Link className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:-scale-x-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <span>previous</span>
        </Link>

        <div className="items-center hidden md:flex gap-x-3">
          <span>
            current page: {currentPage} and size: {size}
          </span>
          {[...Array(pages).keys()].map((page) => (
            <button
              key={page}
              className={
                currentPage === page
                  ? "selected"
                  : "px-2 py-1 text-sm text-blue-500 rounded-md  bg-blue-100/60"
              }
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>

        <Link
          href="#"
          className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100"
        >
          <span>Next</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:-scale-x-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Dashboard;
