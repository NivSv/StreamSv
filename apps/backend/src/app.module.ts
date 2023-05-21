import { Module } from '@nestjs/common'
import { ThrottlerModule } from '@nestjs/throttler'
import { HealthController } from 'health-check'

@Module({
    imports: [
        ThrottlerModule.forRoot({
            ttl: 60,
            limit: 10,
        }),
    ],
    controllers: [HealthController],
    providers: [],
})
export class AppModule {}
