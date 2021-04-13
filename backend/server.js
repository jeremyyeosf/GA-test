const express = require("express");
const cors = require("cors");
const app = express();
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 8080;
// const { urlArr } = require("./data/urlArr");
const { google } = require("googleapis");
const path = require("path");
const { authenticate } = require("@google-cloud/local-auth");

const analyticsreporting = google.analyticsreporting("v4");

async function runSample(
    viewId,
    startDate,
    endDate,
    selectedDimensions,
    selectedMetrics,
    pagePath
) {
    // Obtain user credentials to use for the request
    const auth = await authenticate({
        keyfilePath: path.join(
            __dirname,
            "/secret/tslos/client_secret_254451360859-6bhcvg0os1qm11itufuini033tb4onuc.apps.googleusercontent.com (1).json"
        ),
        scopes: "https://www.googleapis.com/auth/analytics",
    });
    google.options({ auth });

    let dimensions = [];
    if (selectedDimensions?.length > 0) {
        for (let i = 0; i < selectedDimensions.length; i++) {
            dimensions.push({ name: selectedDimensions[i] });
        }
    }

    let metrics = [];
    if (selectedMetrics?.length > 0) {
        for (let i = 0; i < selectedMetrics.length; i++) {
            metrics.push({ expression: selectedMetrics[i] });
        }
    }

    // let urlList = [];
    // if (urlArr?.length > 0) {
    //     for (let i = 0; i < urlArr.length; i++) {
    //         urlList.push({
    //             dimensionName: "ga:pagePath",
    //             operator: "EXACT",
    //             expressions: urlArr[i],
    //         });
    //     }
    // }

    let res = await analyticsreporting.reports.batchGet({
        requestBody: {
            reportRequests: [
                {
                    viewId: viewId,
                    dateRanges: [
                        {
                            // startDate: "2021-04-01",
                            // endDate: "2021-04-03",
                            startDate: startDate,
                            endDate: endDate,
                        },
                    ],
                    metrics: metrics,
                    metricFilterClauses: [
                        {
                            filters: [
                                {
                                    metricName: "ga:uniquePageviews",
                                    operator: "GREATER_THAN",
                                    comparisonValue: "0",
                                },
                            ],
                            //     {
                            //         dimensionName: "ga:pagePath",
                            //         operator: "EXACT",
                            //         expressions: ["/profile"],
                            //     },
                            // ],
                        },
                    ],

                    // [
                    //     {
                    //         expression: "ga:uniquePageviews",
                    //     },
                    // ],
                    dimensions: dimensions,
                    dimensionFilterClauses: [
                        {
                            filters: 
                            // urlList,
                            [
                                {
                                    dimensionName: "ga:pagePath",
                                    expressions: ["."],
                                },
                            ],
                        },
                    ],
                    orderBys: [
                        {
                            fieldName: "ga:uniquePageviews",
                            sortOrder: "DESCENDING",
                        },
                    ],
                    pageSize: 100000,
                },
            ],
        },
    });

    const result_string = JSON.stringify(res.data.reports[0]);
    console.log("res", result_string);
    return res.data.reports[0];
    // console.log(resultsArray);
    // return resultsArray;
}

app.use(cors());

app.get("/data", async (req, resp) => {
    try {
        const {
            viewId,
            startDate,
            endDate,
            selectedDimensions,
            selectedMetrics,
        } = req.query;

        const result = await runSample(
            viewId,
            startDate,
            endDate,
            selectedDimensions,
            selectedMetrics
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
