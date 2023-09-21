import { Users } from 'db';

const baseImageUrl = 'https://raw.githubusercontent.com/mkosir/trpc-fe-boilerplate/main/misc/user-images';

export const mockUsers = [
  {
    id: '1f008731-4645-43de-8af9-3060d4086001',
    email: 'walter.white@mail.com',
    name: 'Walter White',
    userAccName: 'Heisenberg',
    imageUrl: `${baseImageUrl}/heisenberg.jpg`,
    role: 'administrator',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086002',
    email: 'jesse.pinkman@mail.com',
    name: 'Jesse Pinkman',
    userAccName: 'Jesse',
    imageUrl: `${baseImageUrl}/jesse.jpg`,
    role: 'apprentice',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086003',
    email: 'skyler.white@mail.com',
    name: 'Skyler White',
    userAccName: 'Sky',
    imageUrl: `${baseImageUrl}/sky.jpg`,
    role: 'standard',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086004',
    email: 'hank.schrader@mail.com',
    name: 'Hank Schrader',
    userAccName: 'Hank',
    imageUrl: `${baseImageUrl}/hank.jpg`,
    role: 'standard',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086005',
    email: 'marie.schrader@mail.com',
    name: 'Marie Schrader',
    userAccName: 'Marie',
    role: 'standard',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086006',
    email: 'saul.goodman@mail.com',
    name: 'Saul Goodman',
    userAccName: 'Jimmy',
    imageUrl: `${baseImageUrl}/jimmy.jpg`,
    role: 'standard',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086007',
    email: 'gustavo.fring@mail.com',
    name: 'Gustavo Fring',
    userAccName: 'Gus',
    imageUrl: `${baseImageUrl}/gus.jpg`,
    role: 'standard',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086008',
    email: 'michael.ehrmantraut@mail.com',
    name: 'Michael Ehrmantraut',
    userAccName: 'Mike',
    imageUrl: `${baseImageUrl}/mike.jpg`,
    role: 'standard',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086009',
    email: 'hector.salamanca@mail.com',
    name: 'Hector Salamanca',
    userAccName: 'Tio',
    imageUrl: `${baseImageUrl}/tio.jpg`,
    role: 'standard',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086010',
    email: 'alberto.salamanca@mail.com',
    name: 'Alberto Salamanca',
    userAccName: 'Tuco',
    role: 'standard',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086011',
    email: 'gale.boetticher@mail.com',
    name: 'Gale Boetticher',
    userAccName: 'Captain Nerd',
    role: 'apprentice',
  },
] as const satisfies Users;
