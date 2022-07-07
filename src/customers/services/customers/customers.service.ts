import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findCustomers() {
    return {
      id: 1,
      email: 'modafaker@gmail.com',
      createdAt: new Date(),
    };
  }
}
