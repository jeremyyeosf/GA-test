const express = require("express");
const cors = require("cors");
const moment = require("moment");
const app = express();
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 8080;

const { google } = require("googleapis");
const path = require("path");
const { authenticate } = require("@google-cloud/local-auth");

const analyticsreporting = google.analyticsreporting("v4");

async function runSample(viewId, pagePath, startDate, endDate, timeInterval) {
    // Obtain user credentials to use for the request
    const auth = await authenticate({
        keyfilePath: path.join(
            __dirname,
            "/secret/tslos/client_secret_254451360859-6bhcvg0os1qm11itufuini033tb4onuc.apps.googleusercontent.com (1).json"
        ),
        scopes: "https://www.googleapis.com/auth/analytics",
    });
    google.options({ auth });

    function splitDateRange(startDate, endDate, intervalInDays) {
        if (moment(startDate).isSame(endDate)) {
            return [[startDate, endDate]];
        } else {
            let intervalEnd = moment(startDate).add(intervalInDays - 1, "days").format("YYYY-MM-DD");
            let newStartDate = moment(startDate).add(intervalInDays, "days").format("YYYY-MM-DD");
            // take remaining days as last interval if next startDate goes beyond endDate
            if (moment(newStartDate).isAfter(endDate)) {
                return [[startDate, endDate]];
            }
            return [[startDate, intervalEnd]].concat(
                splitDateRange(newStartDate, endDate, intervalInDays)
            );
        }
    }

    let datesArray = [];
    if (timeInterval === "daily") {
        //    set datesArray from start-end
        datesArray = splitDateRange(startDate, endDate, 1);
        console.log("datesArray", datesArray);
    } else if (timeInterval === "none") {
        datesArray = [[startDate, endDate]];
    }

    let resultsArray = [];
    for (let i = 0; i < datesArray.length; i++) {
        let res = await analyticsreporting.reports.batchGet({
            requestBody: {
                reportRequests: [
                    {
                        viewId: viewId,
                        dateRanges: [
                            {
                                startDate: datesArray[i][0],
                                endDate: datesArray[i][1],
                            },
                        ],
                        metrics: [
                            {
                                expression: "ga:uniquePageviews",
                                // expression: "ga:pageviews",
                            },
                        ],
                        dimensions: [
                            {
                                name: "ga:pagePath",
                            },
                        ],
                        dimensionFilterClauses: [
                            {
                                filters: [
                                    {
                                        dimensionName: "ga:pagePath",
                                        operator: "EXACT",
                                        expressions: [pagePath],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        });
        resultsArray.push({
            pageViews: res.data.reports[0].data.rows[0].metrics[0].values[0],
            startDate: datesArray[i][0],
            endDate: datesArray[i][1],
        });
    }

    console.log(resultsArray);
    return resultsArray;
}

app.use(cors());

app.get("/data", async (req, resp) => {
    try {
        // console.log("req.query", req.query);
        const { viewId, pagePath, startDate, endDate, timeInterval } = req.query;
        // const result = await runSample(viewId, pagePath, startDate, endDate);
        // const testInput1 = {
        //     viewId: "212379370",
        //     pagePath: "/",
        //     startDate: "2021-04-09",
        //     endDate: "2021-04-09",
        //     timeInterval: "none",
        // };

        const result = await runSample(
            viewId,
            pagePath,
            startDate,
            endDate,
            timeInterval
        );
        resp.status(200);
        resp.send(result);
    } catch (error) {
        console.log(error);
        resp.status(500).send({ error: "Incorrect parameters" });
    }
});

app.listen(PORT, () => {
    console.info(`Application started on port ${PORT} at ${new Date()}`);
});

// const res = await analyticsreporting.reports.batchGet({
//     requestBody: {
//         reportRequests: [
//             {
//                 viewId: viewId,
//                 dateRanges: [
//                     {
//                         startDate: startDate,
//                         endDate: endDate,
//                     },
//                     // {
//                     //     startDate: "2021-04-08",
//                     //     endDate: "2021-04-08",
//                     // },
//                     // {
//                     //     startDate: "2021-04-07",
//                     //     endDate: "2021-04-07",
//                     // },
//                     // {
//                     //     startDate: "2021-04-06",
//                     //     endDate: "2021-04-06",
//                     // },
//                     // {
//                     //     startDate: "2021-04-05",
//                     //     endDate: "2021-04-05",
//                     // },
//                     // {
//                     //     startDate: "2021-04-04",
//                     //     endDate: "2021-04-04",
//                     // },
//                 ],
//                 metrics: [
//                     {
//                         expression: "ga:pageviews",
//                     },
//                 ],
//                 dimensions: [
//                     {
//                         name: "ga:pagePath",
//                     },
//                 ],
//                 dimensionFilterClauses: [
//                     {
//                         filters: [
//                             {
//                                 dimensionName: "ga:pagePath",
//                                 operator: "EXACT",
//                                 expressions: [pagePath],
//                             },
//                         ],
//                     },
//                 ],
//             },
//         ],
//     },
// });
// const stringData = JSON.stringify(res.data.reports[0].data);
// console.log(stringData);
// if (res.data.reports[0].data.rows != null) {
//     const formattedResults = {
//         pageViews: res.data.reports[0].data.rows[0].metrics[0].values[0],
//     };
//     console.log("formattedResults", formattedResults);
//     return formattedResults;
// } else {
//     throw new Error();
// }
