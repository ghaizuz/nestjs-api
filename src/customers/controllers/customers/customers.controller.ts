import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private custormerService: CustomersService) {}

  @Get('')
  getCustomer() {
    return this.custormerService.findCustomers();
  }
}
