import { Schema, model } from 'mongoose';

const StadisticsSchema = new Schema({
    rank: Number,
    benchmark: Number,
    samples: String,
});

const UsbDataSchema = new Schema({
    partNumber: String,
    brand: String,
    model: String,
    statistics: StadisticsSchema,
    url: String
});

const UsbDataModel = model('usbData', UsbDataSchema);

export default UsbDataModel