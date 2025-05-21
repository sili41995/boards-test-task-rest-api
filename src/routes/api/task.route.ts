import { Router } from 'express';
import { auth, ctrlWrapper, getBoardId, isTaskExist, isValidId, validateBody, isNewTask, isValidBoardId, isTaskBoardExist } from '../../middlewares';
import { taskController } from '../../controllers';
import { Endpoints } from '../../constants';
import { taskSchemas } from '../../schemas';

const router: Router = Router();

const getAllCtrl = ctrlWrapper(taskController.getAll.bind(taskController));
const getByIdCtrl = ctrlWrapper(taskController.getById.bind(taskController));
const addCtrl = ctrlWrapper(taskController.add.bind(taskController));
const updateByIdCtrl = ctrlWrapper(taskController.updateById.bind(taskController));
const deleteByIdCtrl = ctrlWrapper(taskController.deleteById.bind(taskController));

router.get(Endpoints.root, auth, getBoardId, getAllCtrl);
router.get(Endpoints.rootWithId, isValidId, isTaskExist, auth, getByIdCtrl);
router.post(
  Endpoints.root,
  auth,
  // validateBody(taskSchemas.add),
  isNewTask,
  isValidBoardId,
  isTaskBoardExist,
  addCtrl
);
router.put(Endpoints.rootWithId, auth, isValidId, isTaskExist, validateBody(taskSchemas.updateById), updateByIdCtrl);
router.patch(Endpoints.statusWithId, auth, isValidId, isTaskExist, validateBody(taskSchemas.updateStatusById), updateByIdCtrl);
router.delete(Endpoints.rootWithId, auth, isValidId, isTaskExist, deleteByIdCtrl);

export default router;
