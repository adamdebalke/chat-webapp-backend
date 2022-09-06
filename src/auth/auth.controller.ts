import { Controller, Inject } from '@nestjs/common';
import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Routes, Services } from '../utils/types';
import { IAuthService } from './auth';


@Controller(Routes.AUTH)
export class AuthController {
  constructor(@Inject(Services.AUTH) private authService: IAuthService) {}
  
  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
  }

  @Post('login')
  login() {}

  @Get('status')
  status() {}

  @Post('logout')
  logout() {}
}
