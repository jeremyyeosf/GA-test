import axios from "axios";

export default class AnalyticsService {
    async getData(viewId, startDate, endDate, selectedDimensions, selectedMetrics, pagePath, ) {
        try {
            const results = await axios({
                method: "GET",
                url: "http://localhost:8080/data",
                params: { viewId, startDate, endDate, selectedDimensions, selectedMetrics, pagePath, },
            });
            return results.data;
        } catch (error) {
            return error.response;
        }
    }
}
