
export interface ILoadData {
    "Part Number": string;
    Type: string;
    Brand: string;
    Model: string;
    Rank: number;
    Benchmark: number;
    Samples: number;
    URL: string;
}

export interface ILoadDataProps {
    partNumber: string;
    brand: string;
    model: string;
    rank: number;
    benchmark: number;
    samples: number;
    url: string;
}