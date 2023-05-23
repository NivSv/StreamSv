import { Module } from '@nestjs/common'
import { ThrottlerModule } from '@nestjs/throttler'
import { HealthController } from 'health-check'
import { UserModule } from './user/user.module'

@Module({
    imports: [
        ThrottlerModule.forRoot({
            ttl: 60,
            limit: 10,
        }),
        UserModule,
    ],
    controllers: [HealthController],
    providers: [],
})
export class AppModule {}
