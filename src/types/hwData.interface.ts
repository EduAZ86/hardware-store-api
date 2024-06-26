export interface IHWData {
    partNumber: string,
    brand: string;
    model: string;
    statistics: {
        rank: number,
        benchmark: number,
        samples: string,
    }
    url: string;
}