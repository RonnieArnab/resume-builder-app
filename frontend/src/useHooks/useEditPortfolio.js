import { useAuthContext } from "@/context/AuthContext";
import axios from "../api/axios";

const useEditPortfolio = () => {
    const updatePortfolio = async (portfolioDetails) => {
        try {
            const config = {
                headers: { "Content-Type": "application/json" },
              };

            const response = await axios.post("/portfolio/update", JSON.stringify(portfolioDetails), config);
            return response.data;
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    return updatePortfolio;
};

export default useEditPortfolio