import axios from "axios";

export default class AnalyticsService {
    async getData(viewId, pagePath, startDate, endDate, timeInterval) {
        try {
            const results = await axios({
                method: "GET",
                url: "http://localhost:8080/data",
                params: { viewId, pagePath, startDate, endDate, timeInterval },
            });
            return results.data;
        } catch (error) {
            return error.response;
        }
    }
}
