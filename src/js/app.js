import Person from './Person.js';
import Team from './Team.js';

const dima = new Person('Dima', 36);
const tania = new Person('Tania', 31);
const vika = new Person('Vika', 2);

const team = new Team();

team.add(dima);
team.add(tania);
team.add(vika);

for (const test of team) {
  console.log(test);
}
