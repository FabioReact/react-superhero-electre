import { render } from '@testing-library/react'
import { Hero } from '../../types/hero'
import HeroesList from './HeroesList'

const makeSut = () => {
  const heroes: Hero[] = [
    {
      id: '1',
      name: 'A-Bomb',
      powerstats: {
        intelligence: '38',
        strength: '100',
        speed: '17',
        durability: '80',
        power: '24',
        combat: '64',
      },
      biography: {
        'full-name': 'Richard Milhouse Jones',
        'alter-egos': 'No alter egos found.',
        aliases: ['Rick Jones'],
        'place-of-birth': 'Scarsdale, Arizona',
        'first-appearance': 'Hulk Vol 2 #2 (April, 2008) (as A-Bomb)',
        publisher: 'Marvel Comics',
        alignment: 'good',
      },
      appearance: {
        gender: 'Male',
        race: 'Human',
        height: ["6'8", '203 cm'],
        weight: ['980 lb', '441 kg'],
        'eye-color': 'Yellow',
        'hair-color': 'No Hair',
      },
      work: {
        occupation: 'Musician, adventurer, author; formerly talk show host',
        base: '-',
      },
      connections: {
        'group-affiliation':
          'Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom',
        relatives:
          'Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)',
      },
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg',
      },
    },
    {
      id: '2',
      name: 'Abe Sapien',
      powerstats: {
        intelligence: '88',
        strength: '28',
        speed: '35',
        durability: '65',
        power: '100',
        combat: '85',
      },
      biography: {
        'full-name': 'Abraham Sapien',
        'alter-egos': 'No alter egos found.',
        aliases: ['Langdon Everett Caul', 'Abraham Sapien', 'Langdon Caul'],
        'place-of-birth': '-',
        'first-appearance': 'Hellboy: Seed of Destruction (1993)',
        publisher: 'Dark Horse Comics',
        alignment: 'good',
      },
      appearance: {
        gender: 'Male',
        race: 'Icthyo Sapien',
        height: ["6'3", '191 cm'],
        weight: ['145 lb', '65 kg'],
        'eye-color': 'Blue',
        'hair-color': 'No Hair',
      },
      work: {
        occupation: 'Paranormal Investigator',
        base: '-',
      },
      connections: {
        'group-affiliation': 'Bureau for Paranormal Research and Defense',
        relatives: 'Edith Howard (wife, deceased)',
      },
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/956.jpg',
      },
    },
  ]
  return {
    heroes,
  }
}

// Au moins un element dans la liste
test('should have one or more element in the list of heroes', () => {
  const { heroes } = makeSut()
  const { container } = render(<HeroesList heroes={heroes} />)
  const parent = container.querySelector('div')
  expect(parent?.childElementCount).toBe(heroes.length)
})

// Aucun hero
test('should have one or more element in the list of heroes', () => {
  const heroes: Hero[] = []
  const { getByTitle } = render(<HeroesList heroes={heroes} />)
  const parent = getByTitle('List of results')
  expect(parent?.childElementCount).toBe(0)
})
