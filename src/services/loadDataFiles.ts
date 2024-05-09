import fs, { readFileSync } from "fs";
import path from 'path';
import { parse } from 'csv-parse/sync';
import { uploadDataFiles } from "./uploadDataFiles";

const FOLDER_PATH = './src/files';


const loadData = () => {
    console.log('load data');

    fs.readdir(FOLDER_PATH, (err, files) => {
        if (err) {
            console.error('Error al leer la carpeta:', err);
            return;
        }
        const csvFiles = files.filter(file => path.extname(file).toLowerCase() === '.csv');

        csvFiles.forEach((csvFile) => {
            const csvFilePath = path.join(FOLDER_PATH, csvFile)
            const fileContent = readFileSync(csvFilePath, 'utf-8');
            const csvContent = parse(fileContent, {
                columns: true,
                quote: false,
                cast: (value, context) => {
                    if (context.column === 'Rank') return Number(value)
                    if (context.column === 'Benchmark') return Number(value)
                    if (context.column === 'Samples') return Number(value)
                    return value
                }
            })
            uploadDataFiles(csvContent)
        })
    })
}

export default loadData
