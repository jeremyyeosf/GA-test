const express = require("express");
const cors = require("cors");
const app = express();
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 8080;

const { google } = require("googleapis");
const path = require("path");
const { authenticate } = require("@google-cloud/local-auth");

const analyticsreporting = google.analyticsreporting("v4");

async function runSample(viewId, startDate, endDate) {
    // Obtain user credentials to use for the request
    const auth = await authenticate({
        keyfilePath: path.join(
            __dirname,
            "/secret/tslos/client_secret_254451360859-6bhcvg0os1qm11itufuini033tb4onuc.apps.googleusercontent.com (1).json"
        ),
        scopes: "https://www.googleapis.com/auth/analytics",
    });
    google.options({ auth });

    const res = await analyticsreporting.reports.batchGet({
        requestBody: {
            reportRequests: [
                {
                    viewId: viewId,
                    // viewId: "212379370",
                    dateRanges: [
                        // {
                        //     startDate: "2021-04-01",
                        //     endDate: "2021-04-08",
                        // },
                        {
                            startDate: startDate,
                            endDate: endDate,
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
                                    expressions: ["/noticeboard"],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    });

    // console.table(res.data.reports[0].data);
    // console.log();
    // console.table(res.data.reports[0].data);
    const stringData = JSON.stringify(res.data.reports[0].data);
    console.log(stringData);

    const data = {
        pageViews: res.data.reports[0].data.rows[0].metrics[0].values[0],
    };
    console.log("data", data);

    // console.log(res.data.reports[0].data.rows[0].metrics);
    return data;
}

app.use(cors());

app.get("/data", async (req, resp) => {
    console.log("req.query", req.query);
    const { viewId, startDate, endDate } = req.query;
    const result = await runSample(viewId, startDate, endDate);
    resp.status(200);
    resp.send(result);
});

app.listen(PORT, () => {
    console.info(`Application started on port ${PORT} at ${new Date()}`);
});
