import { Injectable } from '@nestjs/common';
import { Superhero } from './superhero.model';

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];

  addSuperhero(name: string, superpower: string, humility: number) {
    const superhero = { name, superpower, humility };
    this.superheroes.push(superhero);
  }

  getSuperheroes() {
    return this.superheroes.sort((a, b) => b.humility - a.humility);
  }
}
