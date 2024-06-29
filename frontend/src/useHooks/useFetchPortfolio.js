import axios from "../api/axios";

const useFetchPortfolio = () => {

    const fetchPortfolio = async ({portfolioId}) => {
        try {
            const config = {
                headers: { "Content-Type": "application/json" },
              };

            const response = await axios.post("/portfolio/fetch", JSON.stringify({portfolioId}), config);
            return response.data;
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    return fetchPortfolio;
};

export default useFetchPortfolio;