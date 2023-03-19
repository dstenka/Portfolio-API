import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './../auth.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(
    HeaderAPIKeyStrategy,
    'api-key',
) {
    constructor(private AuthService: AuthService) {
        super({ header: 'api-key', prefix: '' }, true, async (apiKey, done) => {
            if (this.AuthService.validateApiKey(apiKey)) {
                done(null, apiKey);
            }
            done(new UnauthorizedException(), null);
        });
    }
}
