/*
Для поддержки логики необходимо сделать объекты класса Team
(команда, в которой хранятся персонажи противника на текущий раунд) итерируемыми.
 При итерации они должны выдавать персонажей.

Описание

Реализуйте итератор в классе Team, который по одному выдаёт персонажей (объекты типа Person).
*/

import LoryTeamMember from './LoryTeamMember.js';

const petrovich = new LoryTeamMember('Petrovich', 'B, C', 56);
const semenich = new LoryTeamMember('Semenich', 'B, C', 33);
const michalich = new LoryTeamMember('Michalich', 'A, B, C', 42);

const loryTeams = [];
loryTeams.push(petrovich, semenich, michalich);

let index = -1;
const iterator = () => ({
  next() {
    if (index > loryTeams.length) {
      return {
        value: undefined,
        dane: true,
      };
    }
    index += 1;
    return {
      value: loryTeams[index],
      dane: false,
    };
  },
});

console.log(iterator().next());
console.log(iterator().next());
console.log(iterator().next());
console.log(iterator().next());
