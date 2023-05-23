import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import helmet from 'helmet'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const options = {
        origin: ['*'],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        optionsSuccessStatus: 204,
    }
    app.enableCors(options)
    app.use(helmet())
    await app.listen(3091)
}
bootstrap()
