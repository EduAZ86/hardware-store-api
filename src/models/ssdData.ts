import { Schema, model } from 'mongoose';

const StadisticsSchema = new Schema({
    rank: Number,
    benchmark: Number,
    samples: Number,
});

const SsdDataSchema = new Schema({
    partNumber: String,
    brand: String,
    model: String,
    statistics: StadisticsSchema,
    url: String
});

const SsdDataModel = model('ssdData', SsdDataSchema);

export default SsdDataModel