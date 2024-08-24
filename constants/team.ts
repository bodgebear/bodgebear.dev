import { Person } from "types/Person";

import bl from "assets/people/bartek.png";
import kp from "assets/people/kacper.png";

import rp from "assets/people/rafal.png";
import ab from "assets/people/arek.png";
import ps from "assets/people/piotrek.png";
import bb from "assets/people/bogdan.png";
import jp from "assets/people/kuba.png";
import mw from "assets/people/maciek.png";

interface Team {
  core: Person[];
  friends: Person[];
}

export const team: Team = {
  core: [
    {
      name: "Bartek Legięć",
      position: "Programming & Art",
      image: bl.src,
      url: "https://legiec.io",
    },
    {
      name: "Kacper Pietrzak",
      position: "Programming & Sounds",
      image: kp.src,
      url: "https://www.linkedin.com/in/kacper-pietrzak/",
    },
  ],
  friends: [
    {
      name: "Piotr Szadkowski",
      position: "Programming",
      image: ps.src,
    },
    {
      name: "Bogdan Bańkowski",
      position: "Programming",
      image: bb.src,
    },
    {
      name: "Kuba Pietrzak",
      position: "Programming & Sounds",
      image: jp.src,
    },
    {
      name: "Rafał Piórek",
      position: "Programming",
      image: rp.src,
    },
    {
      name: "Maciek Wójcik",
      position: "Programming",
      image: mw.src,
    },
    {
      name: "Arek Borysiuk",
      position: "Art & Music",
      image: ab.src,
    },
  ],
};
