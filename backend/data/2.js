const res1 = {
    columnHeader: {
        dimensions: ["ga:pagePathLevel1"],
        metricHeader: {
            metricHeaderEntries: [
                { name: "ga:uniquePageviews", type: "INTEGER" },
            ],
        },
    },
    data: {
        rows: [{ dimensions: ["/"], metrics: [{ values: ["485"] }] }],
        totals: [{ values: ["485"] }],
        rowCount: 1,
        minimums: [{ values: ["485"] }],
        maximums: [{ values: ["485"] }],
        isDataGolden: true,
    },
};

const res2 = {
    columnHeader: {
        dimensions: ["ga:pagePathLevel1"],
        metricHeader: {
            metricHeaderEntries: [
                { name: "ga:uniquePageviews", type: "INTEGER" },
            ],
        },
    },
    data: {
        rows: [
            { dimensions: ["/"], metrics: [{ values: ["485"] }] },
            { dimensions: ["/about-us"], metrics: [{ values: ["3"] }] },
            { dimensions: ["/admin"], metrics: [{ values: ["2"] }] },
            { dimensions: ["/admin/"], metrics: [{ values: ["38"] }] },
            { dimensions: ["/announcements"], metrics: [{ values: ["19"] }] },
            { dimensions: ["/birdseye"], metrics: [{ values: ["21"] }] },
            { dimensions: ["/bossview"], metrics: [{ values: ["3"] }] },
            { dimensions: ["/campaign/"], metrics: [{ values: ["6"] }] },
            { dimensions: ["/campaigns"], metrics: [{ values: ["2"] }] },
            { dimensions: ["/circular/"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/claims/"], metrics: [{ values: ["31"] }] },
            { dimensions: ["/contactus"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/features"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/finance/"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/global/"], metrics: [{ values: ["11"] }] },
            { dimensions: ["/home"], metrics: [{ values: ["3"] }] },
            { dimensions: ["/indicators/"], metrics: [{ values: ["81"] }] },
            { dimensions: ["/irndashboard"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/Login.aspx"], metrics: [{ values: ["6"] }] },
            { dimensions: ["/noticeboard"], metrics: [{ values: ["91"] }] },
            { dimensions: ["/payslip/"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/profile"], metrics: [{ values: ["10"] }] },
            { dimensions: ["/room/"], metrics: [{ values: ["13"] }] },
            { dimensions: ["/settings/"], metrics: [{ values: ["2"] }] },
            { dimensions: ["/staff/"], metrics: [{ values: ["4"] }] },
            { dimensions: ["/status/"], metrics: [{ values: ["58"] }] },
            { dimensions: ["/supervisor/"], metrics: [{ values: ["1"] }] },
        ],
        totals: [{ values: ["896"] }],
        rowCount: 27,
        minimums: [{ values: ["1"] }],
        maximums: [{ values: ["485"] }],
        isDataGolden: true,
    },
};

const data = {
    columnHeader: {
        dimensions: ["ga:pagePathLevel1"],
        metricHeader: {
            metricHeaderEntries: [
                { name: "ga:uniquePageviews", type: "INTEGER" },
            ],
        },
    },
    data: {
        rows: [
            { dimensions: ["/"], metrics: [{ values: ["485"] }] },
            { dimensions: ["/about-us"], metrics: [{ values: ["3"] }] },
            { dimensions: ["/admin"], metrics: [{ values: ["2"] }] },
            { dimensions: ["/admin/"], metrics: [{ values: ["38"] }] },
            { dimensions: ["/announcements"], metrics: [{ values: ["19"] }] },
            { dimensions: ["/birdseye"], metrics: [{ values: ["21"] }] },
            { dimensions: ["/bossview"], metrics: [{ values: ["3"] }] },
            { dimensions: ["/campaign/"], metrics: [{ values: ["6"] }] },
            { dimensions: ["/campaigns"], metrics: [{ values: ["2"] }] },
            { dimensions: ["/circular/"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/claims/"], metrics: [{ values: ["31"] }] },
            { dimensions: ["/contactus"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/features"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/finance/"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/global/"], metrics: [{ values: ["11"] }] },
            { dimensions: ["/home"], metrics: [{ values: ["3"] }] },
            { dimensions: ["/indicators/"], metrics: [{ values: ["81"] }] },
            { dimensions: ["/irndashboard"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/Login.aspx"], metrics: [{ values: ["6"] }] },
            { dimensions: ["/noticeboard"], metrics: [{ values: ["91"] }] },
            { dimensions: ["/payslip/"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/profile"], metrics: [{ values: ["10"] }] },
            { dimensions: ["/room/"], metrics: [{ values: ["13"] }] },
            { dimensions: ["/settings/"], metrics: [{ values: ["2"] }] },
            { dimensions: ["/staff/"], metrics: [{ values: ["4"] }] },
            { dimensions: ["/status/"], metrics: [{ values: ["58"] }] },
            { dimensions: ["/supervisor/"], metrics: [{ values: ["1"] }] },
        ],
        totals: [{ values: ["896"] }],
        rowCount: 27,
        minimums: [{ values: ["1"] }],
        maximums: [{ values: ["485"] }],
        isDataGolden: true,
    },
};

const data1 = {
    columnHeader: {
        dimensions: ["ga:date", "ga:pagePathLevel1"],
        metricHeader: {
            metricHeaderEntries: [
                { name: "ga:uniquePageviews", type: "INTEGER" },
            ],
        },
    },
    data: {
        rows: [
            { dimensions: ["20210401", "/"], metrics: [{ values: ["121"] }] },
            {
                dimensions: ["20210401", "/admin"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210401", "/admin/"],
                metrics: [{ values: ["22"] }],
            },
            {
                dimensions: ["20210401", "/announcements"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["20210401", "/birdseye"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210401", "/bossview"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210401", "/campaign/"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["20210401", "/circular/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/claims/"],
                metrics: [{ values: ["12"] }],
            },
            {
                dimensions: ["20210401", "/global/"],
                metrics: [{ values: ["2"] }],
            },
            { dimensions: ["20210401", "/home"], metrics: [{ values: ["1"] }] },
            {
                dimensions: ["20210401", "/indicators/"],
                metrics: [{ values: ["21"] }],
            },
            {
                dimensions: ["20210401", "/irndashboard"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/Login.aspx"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210401", "/noticeboard"],
                metrics: [{ values: ["28"] }],
            },
            {
                dimensions: ["20210401", "/profile"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["20210401", "/room/"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["20210401", "/staff/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/status/"],
                metrics: [{ values: ["11"] }],
            },
            { dimensions: ["20210402", "/"], metrics: [{ values: ["20"] }] },
            {
                dimensions: ["20210402", "/announcements"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210402", "/birdseye"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210402", "/campaigns"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210402", "/claims/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210402", "/global/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210402", "/indicators/"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210402", "/Login.aspx"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210402", "/noticeboard"],
                metrics: [{ values: ["5"] }],
            },
            {
                dimensions: ["20210402", "/profile"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210402", "/status/"],
                metrics: [{ values: ["6"] }],
            },
            { dimensions: ["20210403", "/"], metrics: [{ values: ["22"] }] },
            {
                dimensions: ["20210403", "/about-us"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210403", "/announcements"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210403", "/birdseye"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210403", "/contactus"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210403", "/indicators/"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210403", "/noticeboard"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["20210403", "/profile"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210403", "/status/"],
                metrics: [{ values: ["2"] }],
            },
            { dimensions: ["20210404", "/"], metrics: [{ values: ["17"] }] },
            {
                dimensions: ["20210404", "/about-us"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210404", "/birdseye"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210404", "/campaign/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210404", "/global/"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["20210404", "/indicators/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210404", "/noticeboard"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["20210404", "/payslip/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210404", "/staff/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210404", "/status/"],
                metrics: [{ values: ["3"] }],
            },
            { dimensions: ["20210405", "/"], metrics: [{ values: ["76"] }] },
            {
                dimensions: ["20210405", "/announcements"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210405", "/birdseye"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210405", "/claims/"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["20210405", "/global/"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210405", "/indicators/"],
                metrics: [{ values: ["9"] }],
            },
            {
                dimensions: ["20210405", "/noticeboard"],
                metrics: [{ values: ["13"] }],
            },
            {
                dimensions: ["20210405", "/room/"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210405", "/status/"],
                metrics: [{ values: ["13"] }],
            },
            { dimensions: ["20210406", "/"], metrics: [{ values: ["61"] }] },
            {
                dimensions: ["20210406", "/admin/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210406", "/announcements"],
                metrics: [{ values: ["8"] }],
            },
            {
                dimensions: ["20210406", "/birdseye"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["20210406", "/campaign/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210406", "/claims/"],
                metrics: [{ values: ["8"] }],
            },
            { dimensions: ["20210406", "/home"], metrics: [{ values: ["1"] }] },
            {
                dimensions: ["20210406", "/indicators/"],
                metrics: [{ values: ["10"] }],
            },
            {
                dimensions: ["20210406", "/noticeboard"],
                metrics: [{ values: ["8"] }],
            },
            {
                dimensions: ["20210406", "/profile"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210406", "/room/"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210406", "/settings/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210406", "/staff/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210406", "/status/"],
                metrics: [{ values: ["9"] }],
            },
            {
                dimensions: ["20210406", "/supervisor/"],
                metrics: [{ values: ["1"] }],
            },
            { dimensions: ["20210407", "/"], metrics: [{ values: ["57"] }] },
            {
                dimensions: ["20210407", "/admin/"],
                metrics: [{ values: ["6"] }],
            },
            {
                dimensions: ["20210407", "/announcements"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210407", "/birdseye"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["20210407", "/campaign/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210407", "/claims/"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210407", "/finance/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210407", "/indicators/"],
                metrics: [{ values: ["10"] }],
            },
            {
                dimensions: ["20210407", "/noticeboard"],
                metrics: [{ values: ["9"] }],
            },
            {
                dimensions: ["20210407", "/room/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210407", "/settings/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210407", "/status/"],
                metrics: [{ values: ["6"] }],
            },
            { dimensions: ["20210408", "/"], metrics: [{ values: ["57"] }] },
            {
                dimensions: ["20210408", "/about-us"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210408", "/admin/"],
                metrics: [{ values: ["9"] }],
            },
            {
                dimensions: ["20210408", "/announcements"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210408", "/birdseye"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["20210408", "/campaigns"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210408", "/claims/"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["20210408", "/features"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210408", "/global/"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["20210408", "/indicators/"],
                metrics: [{ values: ["11"] }],
            },
            {
                dimensions: ["20210408", "/Login.aspx"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210408", "/noticeboard"],
                metrics: [{ values: ["8"] }],
            },
            {
                dimensions: ["20210408", "/room/"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["20210408", "/staff/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210408", "/status/"],
                metrics: [{ values: ["4"] }],
            },
            { dimensions: ["20210409", "/"], metrics: [{ values: ["54"] }] },
            {
                dimensions: ["20210409", "/birdseye"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["20210409", "/bossview"],
                metrics: [{ values: ["1"] }],
            },
            { dimensions: ["20210409", "/home"], metrics: [{ values: ["1"] }] },
            {
                dimensions: ["20210409", "/indicators/"],
                metrics: [{ values: ["15"] }],
            },
            {
                dimensions: ["20210409", "/noticeboard"],
                metrics: [{ values: ["13"] }],
            },
            {
                dimensions: ["20210409", "/profile"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210409", "/room/"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210409", "/status/"],
                metrics: [{ values: ["4"] }],
            },
        ],
        totals: [{ values: ["896"] }],
        rowCount: 109,
        minimums: [{ values: ["1"] }],
        maximums: [{ values: ["121"] }],
        isDataGolden: true,
    },
};

const data2 = {
    columnHeader: {
        dimensions: ["ga:date", "ga:pagePathLevel1"],
        metricHeader: {
            metricHeaderEntries: [
                { name: "ga:uniquePageviews", type: "INTEGER" },
            ],
        },
    },
    data: {
        rows: [
            { dimensions: ["20210401", "/"], metrics: [{ values: ["121"] }] },
            {
                dimensions: ["20210401", "/admin"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210401", "/admin/"],
                metrics: [{ values: ["22"] }],
            },
            {
                dimensions: ["20210401", "/announcements"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["20210401", "/birdseye"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210401", "/bossview"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210401", "/campaign/"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["20210401", "/circular/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/claims/"],
                metrics: [{ values: ["12"] }],
            },
            {
                dimensions: ["20210401", "/global/"],
                metrics: [{ values: ["2"] }],
            },
            { dimensions: ["20210401", "/home"], metrics: [{ values: ["1"] }] },
            {
                dimensions: ["20210401", "/indicators/"],
                metrics: [{ values: ["21"] }],
            },
            {
                dimensions: ["20210401", "/irndashboard"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/Login.aspx"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210401", "/noticeboard"],
                metrics: [{ values: ["28"] }],
            },
            {
                dimensions: ["20210401", "/profile"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["20210401", "/room/"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["20210401", "/staff/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/status/"],
                metrics: [{ values: ["11"] }],
            },
        ],
        totals: [{ values: ["243"] }],
        rowCount: 19,
        minimums: [{ values: ["1"] }],
        maximums: [{ values: ["121"] }],
        isDataGolden: true,
    },
};
const data3 = {
    columnHeader: {
        dimensions: ["ga:date", "ga:pagePathLevel4"],
        metricHeader: {
            metricHeaderEntries: [
                { name: "ga:uniquePageviews", type: "INTEGER" },
            ],
        },
    },
    data: {
        rows: [
            {
                dimensions: [
                    "20210401",
                    "/0b820599-18a1-453e-a455-4faf81c3e34e",
                ],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/38efe357-c22b-48dc-b33a-46fc14ebedc3",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/39051f34-bc94-4336-adc4-f367df2dad3b",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/4766f8dd-0316-4df9-87d8-6aa7fdf6df3a",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/5822553e-b96e-4fc5-914b-b5b539a039f7",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/81e9b521-ecfc-4ae5-a8a6-7563a6208f93",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/9cd4c172-4ec1-4f9e-be46-14a814c04363",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/abca593d-b749-4d0f-a2a6-f81b63e92f72",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/b3430e02-4e52-4587-8f41-44375d1e9893",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/b7789d24-bc2d-4402-a91f-36c5948747b0",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/d96876e6-4245-4e08-a744-b7906399a0ba",
                ],
                metrics: [{ values: ["1"] }],
            },
        ],
        totals: [{ values: ["20"] }],
        rowCount: 11,
        minimums: [{ values: ["1"] }],
        maximums: [{ values: ["4"] }],
        isDataGolden: true,
    },
};

const data_lvl3 = {
    columnHeader: {
        dimensions: ["ga:date", "ga:pagePathLevel3"],
        metricHeader: {
            metricHeaderEntries: [
                { name: "ga:uniquePageviews", type: "INTEGER" },
            ],
        },
    },
    data: {
        rows: [
            { dimensions: ["20210401", "/"], metrics: [{ values: ["5"] }] },
            {
                dimensions: [
                    "20210401",
                    "/0a5ee51f-de63-497f-9154-717af808862c",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/164c42ce-ca8c-4c28-aeec-fb982a0b583c",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/32b12347-d027-407b-a87b-a5b4fffb8b86",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/431c10ab-d5cb-4d1e-bc8a-b4b53dc8743d",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/46e24d75-a115-4cc6-877f-32f5f4a68039",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/53380e18-fbc6-4c09-b335-802aaddd488c",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/55f5457c-9936-4370-b762-bcb4bd36c020",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/75adafbf-bcf8-49b1-919d-39fd4b9d8d35",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/79dda309-8c3e-4a77-9c4c-569a821f14e7",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/7a238248-b52a-48f7-98fd-8723b9e3a266",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/a748fb48-92d7-488f-8b8b-5b92dca99f51",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/campaign_details.aspx?q=nrDrdUt9uvY=",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/contract_of_user/"],
                metrics: [{ values: ["8"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/d18e14af-9b66-4b12-a436-89b0337d10f7",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/d82365d9-fa92-4b0a-89da-fde9a3e56fd7",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/dde82ac2-dcb5-4d7a-8ca4-f80b07ec179d",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "20210401",
                    "/f7332b48-3135-403d-b15a-abfa037d8df9",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210401", "/leave_summary/"],
                metrics: [{ values: ["12"] }],
            },
        ],
        totals: [{ values: ["44"] }],
        rowCount: 19,
        minimums: [{ values: ["1"] }],
        maximums: [{ values: ["12"] }],
        isDataGolden: true,
    },
};

const data4 = {
    columnHeader: {
        dimensions: ["ga:date", "ga:pagePathLevel1", "ga:pagePathLevel2"],
        metricHeader: {
            metricHeaderEntries: [
                { name: "ga:uniquePageviews", type: "INTEGER" },
            ],
        },
    },
    data: {
        rows: [
            {
                dimensions: ["20210401", "/admin/", "/contract"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/admin/", "/employees"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/admin/", "/employees/"],
                metrics: [{ values: ["20"] }],
            },
            {
                dimensions: ["20210401", "/campaign/", "/summary/"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["20210401", "/circular/", "/document/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/claims/", "/endorse"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/claims/", "/view/"],
                metrics: [{ values: ["11"] }],
            },
            {
                dimensions: ["20210401", "/global/", "/campaign/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/global/", "/OrientationPage.aspx"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/indicators/", "/groupcompany"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/indicators/", "/mydept"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/indicators/", "/mykpi"],
                metrics: [{ values: ["15"] }],
            },
            {
                dimensions: ["20210401", "/indicators/", "/scoring"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/indicators/", "/stats/"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["20210401", "/room/", "/book"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["20210401", "/staff/", "/dashboard_v2.aspx"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/status/", "/apply"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["20210401", "/status/", "/calendar"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/status/", "/summary"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/status/", "/summary/"],
                metrics: [{ values: ["5"] }],
            },
        ],
        totals: [{ values: ["76"] }],
        rowCount: 20,
        minimums: [{ values: ["1"] }],
        maximums: [{ values: ["20"] }],
        isDataGolden: true,
    },
};
const data5 = {
    columnHeader: {
        dimensions: ["ga:date", "ga:pagePathLevel1"],
        metricHeader: {
            metricHeaderEntries: [
                { name: "ga:uniquePageviews", type: "INTEGER" },
            ],
        },
    },
    data: {
        rows: [
            { dimensions: ["20210401", "/"], metrics: [{ values: ["121"] }] },
            {
                dimensions: ["20210401", "/admin"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210401", "/admin/"],
                metrics: [{ values: ["22"] }],
            },
            {
                dimensions: ["20210401", "/announcements"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["20210401", "/birdseye"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210401", "/bossview"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210401", "/campaign/"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["20210401", "/circular/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/claims/"],
                metrics: [{ values: ["12"] }],
            },
            {
                dimensions: ["20210401", "/global/"],
                metrics: [{ values: ["2"] }],
            },
            { dimensions: ["20210401", "/home"], metrics: [{ values: ["1"] }] },
            {
                dimensions: ["20210401", "/indicators/"],
                metrics: [{ values: ["21"] }],
            },
            {
                dimensions: ["20210401", "/irndashboard"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/Login.aspx"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["20210401", "/noticeboard"],
                metrics: [{ values: ["28"] }],
            },
            {
                dimensions: ["20210401", "/profile"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["20210401", "/room/"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["20210401", "/staff/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["20210401", "/status/"],
                metrics: [{ values: ["11"] }],
            },
        ],
        totals: [{ values: ["243"] }],
        rowCount: 19,
        minimums: [{ values: ["1"] }],
        maximums: [{ values: ["121"] }],
        isDataGolden: true,
    },
};
