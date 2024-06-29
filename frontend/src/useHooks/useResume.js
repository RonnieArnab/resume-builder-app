import { useAuthContext } from "@/context/AuthContext";
import axios from "axios";

const useGetResume = () => {
  const { authUser } = useAuthContext()
  const { token } = authUser
  const fetchResume = async (resumeId) => {
    console.log(resumeId);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/resume/${resumeId}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        }
      );
      return response.data.resume;
    } catch (error) {
      console.log(error);
    }
  };

  const updateResume = async (resumeId, data) => {
    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/resume/${resumeId}/update`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        }
      );
      return response.data.resume;
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchResume, updateResume };
};

export default useGetResume;
