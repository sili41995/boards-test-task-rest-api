import { Router } from 'express';
import { auth, ctrlWrapper, isBoardExist, isValidId, validateBody, isNewBoard } from '../../middlewares';
import { boardController } from '../../controllers';
import { Endpoints } from '../../constants';
import { boardSchemas } from '../../schemas';

const router: Router = Router();

const getAllCtrl = ctrlWrapper(boardController.getAll.bind(boardController));
const getByIdCtrl = ctrlWrapper(boardController.getById.bind(boardController));
const addCtrl = ctrlWrapper(boardController.add.bind(boardController));
const updateByIdCtrl = ctrlWrapper(boardController.updateById.bind(boardController));
const deleteByIdCtrl = ctrlWrapper(boardController.deleteById.bind(boardController));

router.get(Endpoints.root, auth, getAllCtrl);
router.get(Endpoints.rootWithId, isValidId, isBoardExist, auth, getByIdCtrl);
router.post(Endpoints.root, auth, validateBody(boardSchemas.add), isNewBoard, addCtrl);
router.put(Endpoints.rootWithId, auth, isValidId, isBoardExist, validateBody(boardSchemas.updateById), updateByIdCtrl);
router.delete(Endpoints.rootWithId, auth, isValidId, isBoardExist, deleteByIdCtrl);

export default router;
