export class PageViewData {
    pagePath: string = '';
    timeFrame: string = "";
    timeInterval: string = "";
    result: PageView[] | null = null;
}

class PageView {
    pageViews: number = 0;
    startDate: string = "";
    endDate: string = "";
}


// {
//     pathPath: '/',
//     timeFrame: "Last 7 days"
//     timeInterval: "Daily",
//     result: [
    //             {
    //                 pageViews: 10,
    //                 startDate: "2021-04-08",
    //                 endDate: "2021-04-08",
    //             },
    //             {
    //                 pageViews: 10,
    //                 startDate: "2021-04-07",
    //                 endDate: "2021-04-07",
    //             },
    //             {
    //                 pageViews: 10,
    //                 startDate: "2021-04-06",
    //                 endDate: "2021-04-06",
    //             },
    //             {
    //                 pageViews: 10,
    //                 startDate: "2021-04-05",
    //                 endDate: "2021-04-05",
    //             }
    //         ]
// }