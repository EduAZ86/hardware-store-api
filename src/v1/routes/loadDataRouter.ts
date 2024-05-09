import { Router } from "express";
import loadDataController from "../../controllers/loadDataController";

const loadDataRouter = Router();

loadDataRouter.get('/', loadDataController.getAllLoadDataController)
loadDataRouter.get('/', loadDataController.getByIDLoadDataController)
loadDataRouter.post('/', loadDataController.postLoadDataController)
loadDataRouter.put('/', loadDataController.putLoadDataController)
loadDataRouter.delete('/', loadDataController.deleteLoadDataController)

export default loadDataRouter