import { Test, TestingModule } from '@nestjs/testing';
import { CarroController } from './autos.controller';
import { CarroService } from '../../domain/services/carro.service';

describe('AppController', () => {
  let appController: CarroController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CarroController],
      providers: [CarroService],
    }).compile();

    appController = app.get<CarroController>(CarroController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
