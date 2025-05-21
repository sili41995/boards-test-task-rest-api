import { Router } from 'express';
import { auth, ctrlWrapper, validateBody } from '../../middlewares';
import { authController } from '../../controllers';
import { Endpoints } from '../../constants';
import { userSchemas } from '../../schemas';

const router: Router = Router();

const registerCtrl = ctrlWrapper(authController.register.bind(authController));
const loginCtrl = ctrlWrapper(authController.login.bind(authController));
const logoutCtrl = ctrlWrapper(authController.logout.bind(authController));
const currentCtrl = ctrlWrapper(authController.current.bind(authController));

router.post(Endpoints.signUp, validateBody(userSchemas.signUp), registerCtrl);
router.post(Endpoints.signIn, validateBody(userSchemas.signIn), loginCtrl);
router.post(Endpoints.signOut, auth, logoutCtrl);
router.get(Endpoints.current, auth, currentCtrl);

export default router;
