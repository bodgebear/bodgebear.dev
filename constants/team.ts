import { Person } from 'types/Person';

import bl from 'assets/people/bartek.png';
import kp from 'assets/people/kacper.png';

import rp from 'assets/people/rafal.png';
import ab from 'assets/people/arek.png';

interface Team {
  core: Person[];
  friends: Person[];
}

const team: Team = {
  core: [
    {
      name: 'Bartek Legięć',
      position: 'Programming & Art',
      image: bl,
    },
    {
      name: 'Kacper Pietrzak',
      position: 'Programming & Sounds',
      image: kp,
    },
  ],
  friends: [
    {
      name: 'Rafał Piórek',
      position: 'Programming',
      image: rp,
    },
    {
      name: 'Arek Borysiuk',
      position: 'Art & Sounds',
      image: ab,
    },
  ],
};


export default team;
