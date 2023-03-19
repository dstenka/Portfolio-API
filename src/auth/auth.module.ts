import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiKeyStrategy } from './strategy/apikey.strategy';

@Module({
    imports: [PassportModule],
    providers: [ApiKeyStrategy, AuthService],
    exports: [AuthService],
})
export class AuthModule {}
