import { ILoadData } from "../types/loadData.interface";
import { uploadData } from "../class/dataUploadClass";
import CpuDataModel from "../models/cpuData";
import GpuDataModel from "../models/gpuData";
import SsdDataModel from "../models/ssdData";
import HddDataModel from "../models/hddData";
import RamDataModel from "../models/ramData";
import UsbDataModel from "../models/usbData";

export const uploadDataFiles = async (dataFiles: ILoadData[]) => {
    try {
        if (dataFiles.length > 0 && dataFiles[0].Type) {
            if (dataFiles[0].Type === 'CPU') {
                const arrayData = dataFiles.map((data: ILoadData) => new uploadData(data))
                await CpuDataModel.insertMany(arrayData)
                return { success: true }
            };
            if (dataFiles[0].Type === 'GPU') {
                const arrayData = dataFiles.map((data: ILoadData) => new uploadData(data))
                await GpuDataModel.insertMany(arrayData)
                return { success: true }
            };
            if (dataFiles[0].Type === 'SSD') {
                const arrayData = dataFiles.map((data: ILoadData) => new uploadData(data))
                await SsdDataModel.insertMany(arrayData)
                return { success: true }
            };
            if (dataFiles[0].Type === 'HDD') {
                const arrayData = dataFiles.map((data: ILoadData) => new uploadData(data))
                await HddDataModel.insertMany(arrayData)
                return { success: true }
            };
            if (dataFiles[0].Type === 'RAM') {
                const arrayData = dataFiles.map((data: ILoadData) => new uploadData(data))
                await RamDataModel.insertMany(arrayData)
                return { success: true }
            };
            if (dataFiles[0].Type === 'USB') {
                const arrayData = dataFiles.map((data: ILoadData) => new uploadData(data))
                await UsbDataModel.insertMany(arrayData)
                return { success: true }
            };
        } else {
            throw new Error("data vacia")
        }

    } catch (error: any) {
        console.log(error.message);
    }
} 