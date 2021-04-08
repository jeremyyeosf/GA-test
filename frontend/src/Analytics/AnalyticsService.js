import axios from "axios";

export default class AnalyticsService {
    async getData(viewId, pagePath, startDate, endDate) {
        try {
            const results = await axios({
                method: "GET",
                url: "http://localhost:8080/data",
                params: { viewId, pagePath, startDate, endDate },
            });
            return results.data;
        } catch (error) {
            return error.response;
        }
    }
}
