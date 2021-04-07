import axios from 'axios'

export default class AnalyticsService {
    async getData(viewId, startDate, endDate) {
        const results = await axios({
            method: 'GET',
            url: 'http://localhost:8080/data',
            params: { viewId, startDate, endDate }
        })
        // console.log('results: ', results.data)
        return results.data
    }
}
