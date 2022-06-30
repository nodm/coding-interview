import { Movie } from './movie.type';

export async function getMovies(): Promise<Movie[]> {
  return [
    {
      id: 1,
      name: 'STAR WARS: EPISODE I -- THE PHANTOM MENACE',
      year: 1999,
      rating: 0.51,
    },
    {
      id: 2,
      name: 'STAR WARS: EPISODE II -- ATTACK OF THE CLONES',
      year: 2022,
      rating: 0.66,
    },
    {
      id: 3,
      name: 'STAR WARS: THE CLONE WARS',
      year: 2008,
      rating: 0.18,
    },
    {
      id: 4,
      name: 'STAR WARS: EPISODE III -- REVENGE OF THE SITH',
      year: 2005,
      rating: 0.79,
    },
    {
      id: 5,
      name: 'SOLO: A STAR WARS STORY',
      year: 2018,
      rating: 0.69,
    },
    {
      id: 6,
      name: 'OBI-WAN KENOBI',
      year: 2022,
      rating: 0.83,
    },
    {
      id: 7,
      name: 'STAR WARS REBELS',
      year: 2014,
      rating: 0.98,
    },
    {
      id: 8,
      name: 'ROGUE ONE: A STAR WARS STORY',
      year: 2016,
      rating: 0.84,
    },
    {
      id: 9,
      name: 'STAR WARS: EPISODE IV -- A NEW HOPE',
      year: 1977,
      rating: 0.93,
    },
    {
      id: 10,
      name: 'STAR WARS: EPISODE V -- THE EMPIRE STRIKES BACK',
      year: 1980,
      rating: 0.94,
    },
    {
      id: 11,
      name: 'STAR WARS: EPISODE VI -- RETURN OF THE JEDI',
      year: 1983,
      rating: 0.83,
    },
    {
      id: 12,
      name: 'THE MANDALORIAN',
      year: 2019,
      rating: 0.93,
    },
    {
      id: 13,
      name: 'THE BOOK OF BOBA FETT',
      year: 2021,
      rating: 0.66,
    },
    {
      id: 14,
      name: '',
      year: 0,
      rating: 0,
    },
    {
      id: 15,
      name: 'STAR WARS: THE FORCE AWAKENS',
      year: 2015,
      rating: 0.93,
    },
    {
      id: 16,
      name: 'STAR WARS: THE FORCE AWAKENS',
      year: 2015,
      rating: 0.91,
    },
    {
      id: 17,
      name: 'STAR WARS: THE RISE OF SKYWALKER',
      year: 2019,
      rating: 0.52,
    },
  ];
}
