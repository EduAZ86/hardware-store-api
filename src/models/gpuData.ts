import { Schema, model } from 'mongoose';

const StadisticsSchema = new Schema({
    rank: Number,
    benchmark: Number,
    samples: Number,
});

const GpuDataSchema = new Schema({
    partNumber: String,
    brand: String,
    model: String,
    statistics: StadisticsSchema,
    url: String
});

const GpuDataModel = model('gpuData', GpuDataSchema);

export default GpuDataModel