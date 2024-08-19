import { Injectable } from '@nestjs/common';
import { add } from "@autospace/sample-lib";


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello ' + add({ a: 342, b: 12 });
  }
}
