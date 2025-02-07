import { SuperheroesService } from './superheroes.service';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(() => {
    service = new SuperheroesService();
  });

  it('should add and retrieve superheroes sorted by humility', () => {
    service.addSuperhero('Hero1', 'Flying', 8);
    service.addSuperhero('Hero2', 'Invisibility', 10);
    const heroes = service.getSuperheroes();
    expect(heroes[0].name).toBe('Hero2');
  });
});
