import axios from "axios";

export async function fetchBillboardImageUrl() {
    try {
        const response = await axios.get("http://localhost:3000/api/main/billboards");
        const data = response.data[0];
        return data;
    } catch (error) {
        console.error("Error fetching billboard data:", error);
        return null;
    }
}
