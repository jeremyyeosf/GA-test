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
