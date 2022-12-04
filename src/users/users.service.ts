import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'CamiloPerafan',
      password: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJzdWIiOjEsImlhdCI6MTY2OTkxNTI5MywiZXhwIjoxNjY5OTE4ODkzfQ.P393dgGK74EZhNbJ_m2JJrDg3Jcu1PIIacoGFtO4ZYY',
    },
    {
      userId: 2,
      username: 'CamiloPerafan',
      password: 'camilo',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}