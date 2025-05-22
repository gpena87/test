import {  Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World gonzalo!';
  }

  encript(data: any): string {
    return data;
  }
}
