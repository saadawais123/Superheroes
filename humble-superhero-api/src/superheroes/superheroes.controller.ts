import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  addSuperhero(
    @Body('name') name: string,
    @Body('superpower') superpower: string,
    @Body('humility') humility: number,
  ) {
    if (humility < 1 || humility > 10) {
      throw new Error('Humility score must be between 1 and 10');
    }
    this.superheroesService.addSuperhero(name, superpower, humility);
    return { message: 'Superhero added successfully' };
  }

  @Get()
  getSuperheroes() {
    return this.superheroesService.getSuperheroes();
  }
}
