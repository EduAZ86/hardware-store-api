import { Schema, model } from 'mongoose';

const StadisticsSchema = new Schema({
    rank: Number,
    benchmark: Number,
    samples: Number,
});

const CpuDataSchema = new Schema({
    partNumber: String,
    brand: String,
    model: String,
    statistics: StadisticsSchema,
    url: String
});

const CpuDataModel = model('cpuData', CpuDataSchema);

export default CpuDataModel