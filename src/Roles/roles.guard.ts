import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler());
    if (!roles) {
      return true; // If no roles are defined, the route is accessible by anyone
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // Assume user is attached after authentication (via Passport)

    if (!user) {
      throw new UnauthorizedException();
    }

    const hasRole = roles.some((role) => user.roles?.includes(role));
    if (!hasRole) {
      throw new UnauthorizedException('Insufficient role');
    }

    return true;
  }
}
