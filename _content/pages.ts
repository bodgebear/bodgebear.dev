interface Page {
  id: string;
  name: string;
  description: string;
  image: string;
  playNowUrl?: string;
}

export const pages: Page[] = [
  {
    id: 'sybirfunk',
    name: "Sybirfunk 1943",
    description: 'Stop funked up gulag prisoners from escaping.',
    image: 'https://raw.githubusercontent.com/bodgingbear/sybirfunk/master/website/screenshot.png',
    playNowUrl: 'https://sybirfunk.bodgingbear.dev/',
  },
  {
    id: 'airplane',
    name: "It shouldn't be doing this...",
    description: 'Calm down the nervous passenger by fixing the plane',
    image: 'https://raw.githubusercontent.com/bodgingbear/airplane/master/website/screenshot.png',
    playNowUrl: 'https://airplane.bodgingbear.dev/',
  },
  {
    id: 'inside-the-pistol-guild',
    name: 'Inside the pistol guild',
    description: 'Perform a pest control for these wizards\' pistol',
    image: 'https://raw.githubusercontent.com/bodgingbear/inside-the-pistol-guild/master/website/screenshot.png',
    playNowUrl: 'https://pistol-guild.bodgingbear.dev/',
  },
  {
    id: 'nadgorliwy-konduktor',
    name: 'Nadgorliwy konduktor',
    description: 'Push people into the train',
    image: 'https://raw.githubusercontent.com/bodgingbear/nadgorliwy-konduktor/master/website/screenshot.png',
    playNowUrl: 'https://konduktor.bodgingbear.dev/',
  },
  {
    id: 'whymit',
    name: 'WHYMIT',
    description: 'Two students measure bridge using a friend',
    image: 'https://raw.githubusercontent.com/bodgingbear/whymit/master/website/screenshot.png',
    playNowUrl: 'https://whymit.bodgingbear.dev',
  },
  {
    id: 'Laika-wracaj',
    name: 'Laika wracaj!',
    description: 'Help Laika find her way back home',
    image: 'https://raw.githubusercontent.com/bodgingbear/laika-wracaj/master/website/screenshot.png',
    playNowUrl: 'https://github.com/bodgingbear/Laika-wracaj/releases/download/0.0.2/desktop-1.1.jar',
  },
];
