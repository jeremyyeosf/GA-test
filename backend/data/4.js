const filterList = {
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
            { dimensions: ["/"], metrics: [{ values: ["1627"] }] },
            { dimensions: ["/about-us"], metrics: [{ values: ["15"] }] },
            { dimensions: ["/admin"], metrics: [{ values: ["13"] }] },
            { dimensions: ["/announcements"], metrics: [{ values: ["53"] }] },
            { dimensions: ["/birdseye"], metrics: [{ values: ["67"] }] },
            { dimensions: ["/bossview"], metrics: [{ values: ["12"] }] },
            { dimensions: ["/home"], metrics: [{ values: ["12"] }] },
            { dimensions: ["/irndashboard"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/noticeboard"], metrics: [{ values: ["243"] }] },
            { dimensions: ["/profile"], metrics: [{ values: ["20"] }] },
        ],
        totals: [{ values: ["2063"] }],
        rowCount: 10,
        minimums: [{ values: ["1"] }],
        maximums: [{ values: ["1627"] }],
    },
};

let urlArray = [];

const urlsLvl1 = {
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
            { dimensions: ["/"], metrics: [{ values: ["1628"] }] },
            { dimensions: ["/about-us"], metrics: [{ values: ["15"] }] },
            { dimensions: ["/admin"], metrics: [{ values: ["13"] }] },
            { dimensions: ["/admin/"], metrics: [{ values: ["162"] }] },
            { dimensions: ["/announcements"], metrics: [{ values: ["53"] }] },
            { dimensions: ["/birdseye"], metrics: [{ values: ["67"] }] },
            { dimensions: ["/bossview"], metrics: [{ values: ["12"] }] },
            { dimensions: ["/campaign/"], metrics: [{ values: ["27"] }] },
            { dimensions: ["/campaigns"], metrics: [{ values: ["9"] }] },
            { dimensions: ["/campaigns/"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/circular/"], metrics: [{ values: ["2"] }] },
            { dimensions: ["/claims/"], metrics: [{ values: ["265"] }] },
            { dimensions: ["/companyfeed"], metrics: [{ values: ["2"] }] },
            { dimensions: ["/contactus"], metrics: [{ values: ["5"] }] },
            { dimensions: ["/features"], metrics: [{ values: ["7"] }] },
            { dimensions: ["/finance/"], metrics: [{ values: ["9"] }] },
            { dimensions: ["/forgetpassword"], metrics: [{ values: ["4"] }] },
            {
                dimensions: [
                    "/forgetpassword?token=531964204df5ba712c3e6dd5f9008361e81aedb59bda10675a4d00d19113b682",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/forgetpassword?token=76d3de247da53e3d24b339bd42f4dc611100e2cf39bbb739a9a87adfd163cca7",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/forgetpassword?token=787a104553839fceb2d0c9b7f9ca45cfb4421912d2219464301daa75f5aed601",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/forgetpassword?token=e8b01d5681be9d7008a6ae937f3149bd97945fb32dc29bb94fd2535bc4084e6a",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/ForgetPassword.aspx"],
                metrics: [{ values: ["1"] }],
            },
            { dimensions: ["/global/"], metrics: [{ values: ["31"] }] },
            { dimensions: ["/home"], metrics: [{ values: ["12"] }] },
            { dimensions: ["/indicators/"], metrics: [{ values: ["274"] }] },
            { dimensions: ["/irndashboard"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/Login.aspx"], metrics: [{ values: ["21"] }] },
            { dimensions: ["/noticeboard"], metrics: [{ values: ["243"] }] },
            { dimensions: ["/payslip/"], metrics: [{ values: ["2"] }] },
            { dimensions: ["/priceplans"], metrics: [{ values: ["8"] }] },
            { dimensions: ["/privacypolicy"], metrics: [{ values: ["1"] }] },
            { dimensions: ["/profile"], metrics: [{ values: ["20"] }] },
            { dimensions: ["/room/"], metrics: [{ values: ["47"] }] },
            { dimensions: ["/sales/"], metrics: [{ values: ["6"] }] },
            { dimensions: ["/settings/"], metrics: [{ values: ["6"] }] },
            { dimensions: ["/sme"], metrics: [{ values: ["2"] }] },
            { dimensions: ["/staff/"], metrics: [{ values: ["19"] }] },
            { dimensions: ["/status/"], metrics: [{ values: ["191"] }] },
            { dimensions: ["/supervisor/"], metrics: [{ values: ["12"] }] },
            { dimensions: ["/terms"], metrics: [{ values: ["2"] }] },
        ],
        totals: [{ values: ["3184"] }],
        rowCount: 40,
        minimums: [{ values: ["1"] }],
        maximums: [{ values: ["1628"] }],
    },
};

const urlsLvl2 = {
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
                dimensions: ["/admin/", "/contract/"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["/admin/", "/employees"],
                metrics: [{ values: ["18"] }],
            },
            {
                dimensions: ["/admin/", "/employees/"],
                metrics: [{ values: ["133"] }],
            },
            {
                dimensions: ["/admin/", "/holidays"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/admin/", "/leave_admin"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/admin/", "/reports"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["/admin/", "/score_indicator"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/campaign/", "/mycampaigns/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/campaign/", "/summary/"],
                metrics: [{ values: ["26"] }],
            },
            {
                dimensions: ["/campaigns/", "/masterlist"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/circular/", "/document/"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/claims/", "/create"],
                metrics: [{ values: ["8"] }],
            },
            {
                dimensions: ["/claims/", "/endorse"],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: ["/claims/", "/endorse/"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["/claims/", "/view"],
                metrics: [{ values: ["19"] }],
            },
            {
                dimensions: ["/claims/", "/view/"],
                metrics: [{ values: ["231"] }],
            },
            {
                dimensions: ["/finance/", "/claims"],
                metrics: [{ values: ["7"] }],
            },
            {
                dimensions: ["/finance/", "/payroll"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/finance/", "/payroll/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/global/", "/calendar/"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/global/", "/campaign/"],
                metrics: [{ values: ["25"] }],
            },
            {
                dimensions: ["/global/", "/OrientationPage.aspx"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["/global/", "/status/"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/indicators/", "/groupcompany"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/indicators/", "/mydept"],
                metrics: [{ values: ["13"] }],
            },
            {
                dimensions: ["/indicators/", "/mykpi"],
                metrics: [{ values: ["244"] }],
            },
            {
                dimensions: ["/indicators/", "/scoring"],
                metrics: [{ values: ["13"] }],
            },
            {
                dimensions: ["/indicators/", "/stats/"],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: ["/payslip/", "/viewall"],
                metrics: [{ values: ["2"] }],
            },
            { dimensions: ["/room/", "/book"], metrics: [{ values: ["37"] }] },
            {
                dimensions: ["/room/", "/mybookings"],
                metrics: [{ values: ["10"] }],
            },
            {
                dimensions: ["/sales/", "/clientcompany"],
                metrics: [{ values: ["3"] }],
            },
            { dimensions: ["/sales/", "/view"], metrics: [{ values: ["3"] }] },
            {
                dimensions: ["/settings/", "/changepassword"],
                metrics: [{ values: ["6"] }],
            },
            {
                dimensions: ["/staff/", "/dashboard_v2.aspx"],
                metrics: [{ values: ["18"] }],
            },
            {
                dimensions: ["/staff/", "/dashboard.aspx"],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: ["/status/", "/apply"],
                metrics: [{ values: ["38"] }],
            },
            {
                dimensions: ["/status/", "/approve"],
                metrics: [{ values: ["8"] }],
            },
            {
                dimensions: ["/status/", "/approve/"],
                metrics: [{ values: ["17"] }],
            },
            {
                dimensions: ["/status/", "/calendar"],
                metrics: [{ values: ["8"] }],
            },
            {
                dimensions: ["/status/", "/summary"],
                metrics: [{ values: ["55"] }],
            },
            {
                dimensions: ["/status/", "/summary/"],
                metrics: [{ values: ["63"] }],
            },
            {
                dimensions: ["/status/", "/update/"],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: ["/supervisor/", "/dashboard_v3.aspx"],
                metrics: [{ values: ["12"] }],
            },
        ],
        totals: [{ values: ["1054"] }],
        rowCount: 45,
        minimums: [{ values: ["1"] }],
        maximums: [{ values: ["244"] }],
    },
};

const urlsLvl4 = {
    columnHeader: {
        dimensions: [
            "ga:pagePathLevel1",
            "ga:pagePathLevel2",
            "ga:pagePathLevel3",
            "ga:pagePathLevel4",
        ],
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
                    "/admin/",
                    "/contract/",
                    "/create/",
                    "/6be4c438-c526-4eee-a97e-c41e22e43de2",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/contract/",
                    "/update/",
                    "/1a759d6a-f554-4da7-ac61-983cf16e5955/user",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/contract/",
                    "/update/",
                    "/7f71323d-0658-4884-85e9-fd855c21b56e/contract",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/0b820599-18a1-453e-a455-4faf81c3e34e",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/11d67a07-679a-42c8-9bb5-6bb47d195b82",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/1d78e3a8-cd6b-47aa-a3b3-ef5660530cca",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/21cecafa-efe5-42fe-9818-8409a0ca7c8c",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/23172f0d-fe06-4cb3-9c0e-83dc7481f044",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/30071a0e-6218-4322-8159-06859d5ddda4",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/3030e273-6046-4a68-b894-265162b2b321",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/38efe357-c22b-48dc-b33a-46fc14ebedc3",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/39051f34-bc94-4336-adc4-f367df2dad3b",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/4766f8dd-0316-4df9-87d8-6aa7fdf6df3a",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/488c8ecc-a461-42ee-b8fb-bad6f81a6c83",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/53356ddb-17c5-40a8-b06e-708818da6372",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/5822553e-b96e-4fc5-914b-b5b539a039f7",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/5fb6d843-b1f2-44fa-b0a1-2d14bec838df",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/633b6e3d-a6b3-4f88-a829-d06b38423418",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/64f7f724-c830-4bb9-939a-4b372c8371de",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/6be4c438-c526-4eee-a97e-c41e22e43de2",
                ],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/9f7c8464-1b1e-4100-a628-d20425df617d",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/aafbb20b-8ddb-4f7f-a8be-fdbb06de1150",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/abca593d-b749-4d0f-a2a6-f81b63e92f72",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/b3430e02-4e52-4587-8f41-44375d1e9893",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/c3ca8904-5710-464b-ad39-3424a150e4f4",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/cbc3eab8-3498-4d7f-8f20-51df752d6f1f",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/d3c40d75-0d65-4a36-b928-cd36f2065e99",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/d438d34d-f950-475c-bc88-24b641f6c6e4",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_of_user/",
                    "/fcadbf1d-9ed3-478d-ae79-c6828e7c1246",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/contract_view/",
                    "/d45801e9-3e16-4505-b43d-4c92de8a8379",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/credit_leave/",
                    "/1d78e3a8-cd6b-47aa-a3b3-ef5660530cca",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/credit_leave/",
                    "/3030e273-6046-4a68-b894-265162b2b321",
                ],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/credit_leave/",
                    "/31b5e3a3-656c-4878-82a5-ef3de6169c4e",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/credit_leave/",
                    "/39051f34-bc94-4336-adc4-f367df2dad3b",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/credit_leave/",
                    "/53356ddb-17c5-40a8-b06e-708818da6372",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/credit_leave/",
                    "/5fb6d843-b1f2-44fa-b0a1-2d14bec838df",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/credit_leave/",
                    "/64f7f724-c830-4bb9-939a-4b372c8371de",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/credit_leave/",
                    "/6be4c438-c526-4eee-a97e-c41e22e43de2",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/credit_leave/",
                    "/7a611a8a-9a85-409a-897d-bdfc2e508019",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/credit_leave/",
                    "/8fffc8dd-d4e8-42f9-a195-f2c8514c7716",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/credit_leave/",
                    "/eb78980b-d664-4d29-b957-55ca94bb65c0",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/credit_leave/",
                    "/f9e74745-00fe-440a-8a72-514254012cde",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/credit_leave/",
                    "/fcadbf1d-9ed3-478d-ae79-c6828e7c1246",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/050a7b9e-80ce-485a-95e5-103c4b90930e",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/0b820599-18a1-453e-a455-4faf81c3e34e",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/11d67a07-679a-42c8-9bb5-6bb47d195b82",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/1c1d3020-f491-4f73-ace0-deb13a52d478",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/1d78e3a8-cd6b-47aa-a3b3-ef5660530cca",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/21cecafa-efe5-42fe-9818-8409a0ca7c8c",
                ],
                metrics: [{ values: ["4"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/23172f0d-fe06-4cb3-9c0e-83dc7481f044",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/28141435-6e01-45d8-a053-c1787ac099de",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/30071a0e-6218-4322-8159-06859d5ddda4",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/3030e273-6046-4a68-b894-265162b2b321",
                ],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/311b6aa4-8838-4e6b-8684-cf269a784b43",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/38efe357-c22b-48dc-b33a-46fc14ebedc3",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/39051f34-bc94-4336-adc4-f367df2dad3b",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/4766f8dd-0316-4df9-87d8-6aa7fdf6df3a",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/488c8ecc-a461-42ee-b8fb-bad6f81a6c83",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/4b7cea98-01af-450c-aab9-84db7ebdcd70",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/53356ddb-17c5-40a8-b06e-708818da6372",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/5822553e-b96e-4fc5-914b-b5b539a039f7",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/5fb6d843-b1f2-44fa-b0a1-2d14bec838df",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/64f7f724-c830-4bb9-939a-4b372c8371de",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/6a4fbb5c-230c-42be-9498-d822e8414d02",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/6be4c438-c526-4eee-a97e-c41e22e43de2",
                ],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/7a611a8a-9a85-409a-897d-bdfc2e508019",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/81812987-fea4-469c-8b47-69cfbc1b2a1f",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/81e9b521-ecfc-4ae5-a8a6-7563a6208f93",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/86b2f86c-5a56-4fad-90f7-a02e46228108",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/8c47cd23-b9ec-4519-ae61-3fe27912373e",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/8f7311c3-6037-449b-9fe1-07efb7dc627a",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/9cd4c172-4ec1-4f9e-be46-14a814c04363",
                ],
                metrics: [{ values: ["5"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/9d815bd8-7341-444f-aaf3-a4c543aa4e19",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/a1c2b7b3-00cc-427c-a7c8-66287fe5f694",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/a2071c61-be13-4974-8761-561cc80b240a",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/abca593d-b749-4d0f-a2a6-f81b63e92f72",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/b3430e02-4e52-4587-8f41-44375d1e9893",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/b7789d24-bc2d-4402-a91f-36c5948747b0",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/c81fd4cc-c219-4d65-8736-42be5f809718",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/ca398dbd-e45f-4ec9-85a1-140fe689fd8f",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/cbc3eab8-3498-4d7f-8f20-51df752d6f1f",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/cde60ddb-10fd-4ba8-8f40-ecbe26e60576",
                ],
                metrics: [{ values: ["3"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/d3c40d75-0d65-4a36-b928-cd36f2065e99",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/d96876e6-4245-4e08-a744-b7906399a0ba",
                ],
                metrics: [{ values: ["2"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/eb78980b-d664-4d29-b957-55ca94bb65c0",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/f9e74745-00fe-440a-8a72-514254012cde",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/leave_summary/",
                    "/fcadbf1d-9ed3-478d-ae79-c6828e7c1246",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/update/",
                    "/0ab573cd-a5e3-42fc-b366-2ee9904b68fb",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/update/",
                    "/43559c6f-e713-401b-8c30-aa4ad1814019",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/update/",
                    "/4ceeca56-28ae-4b93-a28a-f3a83f365af1",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/update/",
                    "/51c52768-d41e-47b7-b261-11745632e3c9",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/update/",
                    "/64f7f724-c830-4bb9-939a-4b372c8371de",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/update/",
                    "/6526f6b5-8bc0-4252-9bc4-72010be17858",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/update/",
                    "/8fffc8dd-d4e8-42f9-a195-f2c8514c7716",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/update/",
                    "/a8c3ce9f-d2d9-4717-b18f-3d89e5e5386a",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/update/",
                    "/d8a1b538-143c-45c3-8547-142ab094f10d",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/update/",
                    "/fcadbf1d-9ed3-478d-ae79-c6828e7c1246",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/view/",
                    "/53356ddb-17c5-40a8-b06e-708818da6372",
                ],
                metrics: [{ values: ["1"] }],
            },
            {
                dimensions: [
                    "/admin/",
                    "/employees/",
                    "/view/",
                    "/5a36cccc-6511-402f-b165-46e38145754f",
                ],
                metrics: [{ values: ["1"] }],
            },
        ],
        totals: [{ values: ["134"] }],
        rowCount: 99,
        minimums: [{ values: ["1"] }],
        maximums: [{ values: ["5"] }],
    },
};
