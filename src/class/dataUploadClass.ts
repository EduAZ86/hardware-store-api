import { ILoadData } from "../types/loadData.interface";

export class uploadData {
    partNumber: string;
    brand: string;
    model: string;
    statistics: {
        rank: number,
        benchmark: number,
        samples: number,
    }
    url: string;
    constructor(data: ILoadData) {
        this.partNumber = data["Part Number"];
        this.brand = data.Brand;
        this.model = data.Model;
        this.statistics = {
            rank: data.Rank,
            benchmark: data.Benchmark,
            samples: data.Samples
        };
        this.url = data.URL
    }
}