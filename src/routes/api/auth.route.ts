import { Router } from 'express';
import { auth, ctrlWrapper, validateBody } from '../../middlewares';
import { authController } from '../../controllers';
import { Endpoints } from '../../constants';
import { userSchemas } from '../../schemas';

const router: Router = Router();

const signUpCtrl = ctrlWrapper(authController.signUp.bind(authController));
const signInCtrl = ctrlWrapper(authController.signIn.bind(authController));
const signOutCtrl = ctrlWrapper(authController.signOut.bind(authController));
const currentCtrl = ctrlWrapper(authController.current.bind(authController));

router.post(Endpoints.signUp, validateBody(userSchemas.signUp), signUpCtrl);
router.post(Endpoints.signIn, validateBody(userSchemas.signIn), signInCtrl);
router.post(Endpoints.signOut, auth, signOutCtrl);
router.get(Endpoints.current, auth, currentCtrl);

export default router;
