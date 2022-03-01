import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  getAllIncomeReports() {
    return {
      status: true,
      message: 'OK!',
    };
  }
}
