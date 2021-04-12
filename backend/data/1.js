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
            { dimensions: ["/"], metrics: [{ values: ["121"] }] },
            { dimensions: ["/admin"], metrics: [{ values: ["2"] }] },
            { dimensions: ["/admin/"], metrics: [{ values: ["22"] }] },
            { dimensions: ["/announcements"], metrics: [{ values: ["4"] }] },
            { dimensions: ["/birdseye"], metrics: [{ values: ["2"] }] },
            { dimensions: ["/bossview"], metrics: [{ values: ["2"] }] },
            { dimensions: ["/campaign/"], metrics: [{ values: ["3"] }] },
            { dimensions: ["/circular/"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/claims/"], metrics: [{ values: ["12"] }] },
            { dimensions: ["/global/"], metrics: [{ values: ["2"] }] },
            { dimensions: ["/home"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/indicators/"], metrics: [{ values: ["21"] }] },
            { dimensions: ["/irndashboard"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/Login.aspx"], metrics: [{ values: ["2"] }] },
            { dimensions: ["/noticeboard"], metrics: [{ values: ["28"] }] },
            { dimensions: ["/profile"], metrics: [{ values: ["4"] }] },
            { dimensions: ["/room/"], metrics: [{ values: ["3"] }] },
            { dimensions: ["/staff/"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/status/"], metrics: [{ values: ["11"] }] },
        ],
        totals: [{ values: ["243"] }],
        rowCount: 19,
        minimums: [{ values: ["1"] }],
        maximums: [{ values: ["121"] }],
        isDataGolden: true,
    },
};

const data2 = {
    columnHeader: {
        dimensions: ["ga:pagePathLevel2"],
        metricHeader: {
            metricHeaderEntries: [
                { name: "ga:uniquePageviews", type: "INTEGER" },
            ],
        },
    },
    data: {
        rows: [
            { dimensions: ["/apply"], metrics: [{ values: ["4"] }] },
            { dimensions: ["/book"], metrics: [{ values: ["3"] }] },
            { dimensions: ["/calendar"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/campaign/"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/contract"], metrics: [{ values: ["1"] }] },
            {
                dimensions: ["/dashboard_v2.aspx"],
                metrics: [{ values: ["1"] }],
            },
            { dimensions: ["/document/"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/employees"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/employees/"], metrics: [{ values: ["20"] }] },
            { dimensions: ["/endorse"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/groupcompany"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/mydept"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/mykpi"], metrics: [{ values: ["15"] }] },
            {
                dimensions: ["/OrientationPage.aspx"],
                metrics: [{ values: ["1"] }],
            },
            { dimensions: ["/scoring"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/stats/"], metrics: [{ values: ["3"] }] },
            { dimensions: ["/summary"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/summary/"], metrics: [{ values: ["8"] }] },
            { dimensions: ["/view/"], metrics: [{ values: ["11"] }] },
        ],
        totals: [{ values: ["76"] }],
        rowCount: 19,
        minimums: [{ values: ["1"] }],
        maximums: [{ values: ["20"] }],
        isDataGolden: true,
    },
};

const data12 = {
    columnHeader: {
        dimensions: ["ga:pagePathLevel1", "ga:pagePathLevel2"],
        metricHeader: {
            metricHeaderEntries: [
                { name: "ga:uniquePageviews", type: "INTEGER" },
            ],
        },
    },
    data: {
        rows: [
            {
                dimensions: ["/admin/", "/contract"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/admin/", "/employees"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/admin/", "/employees/"],
                metrics: [{ values: ["20"] }],
            },
            {
                dimensions: ["/campaign/", "/summary/"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["/circular/", "/document/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/claims/", "/endorse"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/claims/", "/view/"],
                metrics: [{ values: ["11"] }],
            },
            {
                dimensions: ["/global/", "/campaign/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/global/", "/OrientationPage.aspx"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/indicators/", "/groupcompany"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/indicators/", "/mydept"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/indicators/", "/mykpi"],
                metrics: [{ values: ["15"] }],
            },
            {
                dimensions: ["/indicators/", "/scoring"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/indicators/", "/stats/"],
                metrics: [{ values: ["3"] }],
            },
            { dimensions: ["/room/", "/book"], metrics: [{ values: ["3"] }] },
            {
                dimensions: ["/staff/", "/dashboard_v2.aspx"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/apply"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["/status/", "/calendar"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/summary"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/summary/"],
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

const data_day = {
    columnHeader: {
        dimensions: ["ga:pagePathLevel1", "ga:pagePathLevel2", "ga:date"],
        metricHeader: {
            metricHeaderEntries: [
                { name: "ga:uniquePageviews", type: "INTEGER" },
            ],
        },
    },
    data: {
        rows: [
            {
                dimensions: ["/admin/", "/contract", "20210401"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/admin/", "/employees", "20210401"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/admin/", "/employees", "20210407"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/admin/", "/employees", "20210408"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/admin/", "/employees/", "20210401"],
                metrics: [{ values: ["20"] }],
            },
            {
                dimensions: ["/admin/", "/employees/", "20210406"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/admin/", "/employees/", "20210407"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["/admin/", "/employees/", "20210408"],
                metrics: [{ values: ["8"] }],
            },
            {
                dimensions: ["/admin/", "/leave_admin", "20210407"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/campaign/", "/summary/", "20210401"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["/campaign/", "/summary/", "20210404"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/campaign/", "/summary/", "20210406"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/campaign/", "/summary/", "20210407"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/circular/", "/document/", "20210401"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/claims/", "/create", "20210405"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/claims/", "/create", "20210406"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/claims/", "/endorse", "20210401"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/claims/", "/view", "20210402"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/claims/", "/view/", "20210401"],
                metrics: [{ values: ["11"] }],
            },
            {
                dimensions: ["/claims/", "/view/", "20210405"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["/claims/", "/view/", "20210406"],
                metrics: [{ values: ["7"] }],
            },
            {
                dimensions: ["/claims/", "/view/", "20210407"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/claims/", "/view/", "20210408"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["/finance/", "/payroll/", "20210407"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/global/", "/campaign/", "20210401"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/global/", "/campaign/", "20210402"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/global/", "/campaign/", "20210404"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["/global/", "/campaign/", "20210408"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["/global/", "/OrientationPage.aspx", "20210401"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/global/", "/OrientationPage.aspx", "20210405"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/global/", "/status/", "20210405"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/indicators/", "/groupcompany", "20210401"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/indicators/", "/mydept", "20210401"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/indicators/", "/mydept", "20210405"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/indicators/", "/mydept", "20210406"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["/indicators/", "/mydept", "20210407"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/indicators/", "/mydept", "20210408"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["/indicators/", "/mykpi", "20210401"],
                metrics: [{ values: ["15"] }],
            },
            {
                dimensions: ["/indicators/", "/mykpi", "20210402"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/indicators/", "/mykpi", "20210403"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/indicators/", "/mykpi", "20210404"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/indicators/", "/mykpi", "20210405"],
                metrics: [{ values: ["7"] }],
            },
            {
                dimensions: ["/indicators/", "/mykpi", "20210406"],
                metrics: [{ values: ["6"] }],
            },
            {
                dimensions: ["/indicators/", "/mykpi", "20210407"],
                metrics: [{ values: ["9"] }],
            },
            {
                dimensions: ["/indicators/", "/mykpi", "20210408"],
                metrics: [{ values: ["8"] }],
            },
            {
                dimensions: ["/indicators/", "/mykpi", "20210409"],
                metrics: [{ values: ["13"] }],
            },
            {
                dimensions: ["/indicators/", "/scoring", "20210401"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/indicators/", "/scoring", "20210405"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/indicators/", "/scoring", "20210406"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/indicators/", "/scoring", "20210409"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/indicators/", "/stats/", "20210401"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["/payslip/", "/viewall", "20210404"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/room/", "/book", "20210401"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["/room/", "/book", "20210408"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["/room/", "/book", "20210409"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/room/", "/mybookings", "20210405"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/room/", "/mybookings", "20210406"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/room/", "/mybookings", "20210407"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/room/", "/mybookings", "20210409"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/settings/", "/changepassword", "20210406"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/settings/", "/changepassword", "20210407"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/staff/", "/dashboard_v2.aspx", "20210401"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/staff/", "/dashboard_v2.aspx", "20210404"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/staff/", "/dashboard_v2.aspx", "20210406"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/staff/", "/dashboard_v2.aspx", "20210408"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/apply", "20210401"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["/status/", "/apply", "20210402"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["/status/", "/apply", "20210403"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/apply", "20210405"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["/status/", "/apply", "20210406"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/status/", "/apply", "20210408"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/apply", "20210409"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/approve", "20210402"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/approve", "20210404"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/approve/", "20210405"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/status/", "/approve/", "20210407"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/status/", "/calendar", "20210401"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/calendar", "20210405"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/calendar", "20210406"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/summary", "20210401"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/summary", "20210402"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/summary", "20210403"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/summary", "20210404"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/summary", "20210405"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/status/", "/summary", "20210406"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/summary", "20210407"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/status/", "/summary", "20210408"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/status/", "/summary", "20210409"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/status/", "/summary/", "20210401"],
                metrics: [{ values: ["5"] }],
            },
            {
                dimensions: ["/status/", "/summary/", "20210402"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/summary/", "20210404"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/summary/", "20210405"],
                metrics: [{ values: ["5"] }],
            },
            {
                dimensions: ["/status/", "/summary/", "20210406"],
                metrics: [{ values: ["5"] }],
            },
            {
                dimensions: ["/status/", "/summary/", "20210407"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/status/", "/summary/", "20210408"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/summary/", "20210409"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/supervisor/", "/dashboard_v3.aspx", "20210406"],
                metrics: [{ values: ["1"] }],
            },
        ],
        totals: [{ values: ["248"] }],
        rowCount: 97,
        minimums: [{ values: ["1"] }],
        maximums: [{ values: ["20"] }],
        isDataGolden: true,
    },
};

const data_day_nopath = {
    columnHeader: {
        dimensions: ["ga:date"],
        metricHeader: {
            metricHeaderEntries: [
                { name: "ga:uniquePageviews", type: "INTEGER" },
            ],
        },
    },
    data: {
        rows: [
            { dimensions: ["20210401"], metrics: [{ values: ["243"] }] },
            { dimensions: ["20210402"], metrics: [{ values: ["42"] }] },
            { dimensions: ["20210403"], metrics: [{ values: ["35"] }] },
            { dimensions: ["20210404"], metrics: [{ values: ["33"] }] },
            { dimensions: ["20210405"], metrics: [{ values: ["122"] }] },
            { dimensions: ["20210406"], metrics: [{ values: ["117"] }] },
            { dimensions: ["20210407"], metrics: [{ values: ["99"] }] },
            { dimensions: ["20210408"], metrics: [{ values: ["110"] }] },
            { dimensions: ["20210409"], metrics: [{ values: ["95"] }] },
        ],
        totals: [{ values: ["896"] }],
        rowCount: 9,
        minimums: [{ values: ["33"] }],
        maximums: [{ values: ["243"] }],
        isDataGolden: true,
    },
};

const dat = {
    columnHeader: {
        dimensions: ["ga:date"],
        metricHeader: {
            metricHeaderEntries: [
                { name: "ga:uniquePageviews", type: "INTEGER" },
            ],
        },
    },
    data: {
        rows: [
            { dimensions: ["20210401"], metrics: [{ values: ["121"] }] },
            { dimensions: ["20210402"], metrics: [{ values: ["20"] }] },
            { dimensions: ["20210403"], metrics: [{ values: ["22"] }] },
            { dimensions: ["20210404"], metrics: [{ values: ["17"] }] },
            { dimensions: ["20210405"], metrics: [{ values: ["76"] }] },
            { dimensions: ["20210406"], metrics: [{ values: ["61"] }] },
            { dimensions: ["20210407"], metrics: [{ values: ["57"] }] },
            { dimensions: ["20210408"], metrics: [{ values: ["57"] }] },
            { dimensions: ["20210409"], metrics: [{ values: ["54"] }] },
        ],
        totals: [{ values: ["485"] }],
        rowCount: 9,
        minimums: [{ values: ["17"] }],
        maximums: [{ values: ["121"] }],
        isDataGolden: true,
    },
};




