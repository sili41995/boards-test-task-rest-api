import { Response, Request } from 'express';
import { AuthService } from '../services';
import { httpError } from '../utils';
import { IAuthRequest } from '../types/auth.type';

export class AuthController {
  constructor(private authService: AuthService) {
    this.authService = authService;
  }

  async signUp(req: Request, res: Response): Promise<void> {
    const result = await this.authService.signUp(req.body);

    res.status(201).json(result);
  }

  async signIn(req: Request, res: Response): Promise<void> {
    const result = await this.authService.signIn(req.body);

    res.status(200).json(result);
  }

  async signOut(req: IAuthRequest, res: Response): Promise<void> {
    if (!req.user) {
      throw httpError({ status: 401 });
    }

    const result = await this.authService.signOut(req.user);

    res.status(200).json(result);
  }

  async current(req: IAuthRequest, res: Response): Promise<void> {
    if (!req.user) {
      throw httpError({ status: 401 });
    }

    const result = req.user;

    res.status(200).json(result);
  }
}

const authController = new AuthController(new AuthService());

export default authController;
