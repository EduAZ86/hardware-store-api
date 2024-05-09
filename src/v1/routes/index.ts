import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const v1Router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift();
    return file
}
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== 'index' && cleanName) {
        import(`./${cleanName}`).then(moduleRouter => {
            console.log(`se esta cargando la ruta ... /${cleanName}`);
            v1Router.use(`/${cleanName}`, moduleRouter.default);
        });
    };
});
export default v1Router