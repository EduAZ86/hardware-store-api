import { Schema, model } from 'mongoose';

const StadisticsSchema = new Schema({
    rank: Number,
    benchmark: Number,
    samples: Number,
});

const RamDataSchema = new Schema({
    partNumber: String,
    brand: String,
    model: String,
    statistics: StadisticsSchema,
    url: String
});

const RamDataModel = model('ramData', RamDataSchema);

export default RamDataModel