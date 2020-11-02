import { Person } from 'types/Person';

import bl from 'assets/people/bartek.png';
import kp from 'assets/people/kacper.png';

import rp from 'assets/people/rafal.png';
import ab from 'assets/people/arek.png';
import ps from 'assets/people/piotrek.png';
import bb from 'assets/people/bogdan.png';
import jp from 'assets/people/kuba.png';
import mw from 'assets/people/maciek.png';

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
      name: 'Bogdan Bańkowski',
      position: 'Programming',
      image: bb,
    },
    {
      name: 'Kuba Pietrzak',
      position: 'Sounds & QA',
      image: jp,
    },
    {
      name: 'Rafał Piórek',
      position: 'Programming',
      image: rp,
    },
    {
      name: 'Piotrek Szadkowski',
      position: 'Programming',
      image: ps,
    },
    {
      name: 'Maciek Wójcik',
      position: 'Ideation',
      image: mw,
    },
    {
      name: 'Arek Borysiuk',
      position: 'Art & Music',
      image: ab,
    },
  ],
};

export default team;
