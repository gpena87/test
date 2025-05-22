import {  Injectable } from '@nestjs/common';
import * as crypto from 'crypto';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World gonzalo!';
  }

  encript({key, data}: any): string {
    return crypto.publicEncrypt(key, Buffer.from(JSON.stringify(data))).toString('base64');
  }
}
