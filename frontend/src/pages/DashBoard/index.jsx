import React, { useEffect, useState } from "react";
import AddResume from "./components/AddResume";
import ResumeCardItem from "./components/ResumeCardItem";
import { useCookies } from "react-cookie";
import Navbar from "@/components/NavBar/NavBar";
import { useAuthContext } from "@/context/AuthContext";
import PortfolioCard from "@/components/PortfolioCard/PortfolioCard";
import useFetchPortfolioList from "@/useHooks/useFetchPortfolioList";
import useFetchResume from "@/useHooks/useFetchResume";

function DashBoard() {
  const [resumeList, setResumeList] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const [isTabResume, setisTabResume] = useState(true);
  const { authUser } = useAuthContext();

  const fetchResumeList = useFetchResume();
  const fetchPortfolioList = useFetchPortfolioList();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, status } = await fetchPortfolioList();
        const response = await fetchResumeList();

        if (response.status) {
          setResumeList(response.resume);
        }
        if (status) {
          setPortfolios(data);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-10 md:px-20 lg:px-32">
        <div className="font-bold text-3xl">My Dashboard</div>
        <p>Start Managing your Resume and Portfolio</p>
      </div>
      <div className="sm:w-4/5 w-full p-2 mx-auto mb-20">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center list-none">
            <li
              class="me-2 text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
              role="presentation">
              <button
                onClick={() => setisTabResume(true)}
                class={`inline-block p-4 border-b-2 rounded-t-lg ${
                  isTabResume
                    ? "text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
                id="profile-styled-tab"
                data-tabs-target="#styled-profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false">
                Resume
              </button>
            </li>
            <li class="me-2" role="presentation">
              <button
                onClick={() => setisTabResume(false)}
                class={`inline-block p-4 border-b-2 rounded-t-lg ${
                  !isTabResume
                    ? "text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
                id="dashboard-styled-tab"
                data-tabs-target="#styled-dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false">
                Portfolio
              </button>
            </li>
          </ul>
        </div>
        <div id="default-styled-tab-content">
          <div
            class={`${
              isTabResume ? "" : "hidden"
            } p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5">
              <AddResume />
              {resumeList.length > 0 &&
                resumeList.map((resume, index) => (
                  <ResumeCardItem key={index} resume={resume} />
                ))}
            </div>
          </div>
          <div
            class={`${
              !isTabResume ? "" : "hidden"
            } p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}>
            <div className="flex flex-wrap gap-6 justify-center">
              {portfolios.length == 0
                ? "No Portfolios.."
                : portfolios.map((item, index) => (
                    <PortfolioCard id={item.url} parsedData={item} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
