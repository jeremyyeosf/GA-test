const express = require("express");
const cors = require("cors");
const app = express();
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 8080;

const { google } = require("googleapis");
const path = require("path");
const { authenticate } = require("@google-cloud/local-auth");

const analyticsreporting = google.analyticsreporting("v4");

async function runSample(viewId, pagePath, startDate, endDate) {
    // Obtain user credentials to use for the request
    const auth = await authenticate({
        keyfilePath: path.join(
            __dirname,
            "/secret/tslos/client_secret_254451360859-6bhcvg0os1qm11itufuini033tb4onuc.apps.googleusercontent.com (1).json"
        ),
        scopes: "https://www.googleapis.com/auth/analytics",
    });
    google.options({ auth });

    let datesArray = [
        "2021-04-08",
        "2021-04-07",
        "2021-04-06",
        "2021-04-05",
        "2021-04-04",
    ];
    let resultsArray = [];
    for (let i = 0; i < datesArray.length; i++) {
        const element = datesArray[i];
        let res = await analyticsreporting.reports.batchGet({
            requestBody: {
                reportRequests: [
                    {
                        viewId: viewId,
                        dateRanges: [
                            {
                                startDate: datesArray[i],
                                endDate: datesArray[i],
                            },
                        ],
                        metrics: [
                            {
                                expression: "ga:pageviews",
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
            startDate: datesArray[i],
            endDate: datesArray[i],
        });
    }

    console.log(resultsArray);
    return resultsArray
    
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
}

app.use(cors());

app.get("/data", async (req, resp) => {
    try {
        console.log("req.query", req.query);
        const { viewId, pagePath, startDate, endDate } = req.query;
        const result = await runSample(viewId, pagePath, startDate, endDate);
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
