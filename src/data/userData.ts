
export interface UserData {
  id: string;
  name: string;
  email: string;
  password?: string;
  role?: 'admin' | 'user';
  token?: string;
  profileImage?: string;
  city?: string;
  address?: string;
  phoneNumber?: string;
  country?: string;
  state?: string;
  zipCode?: string;
}

const mockUsers: UserData[] = [
  {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan@example.com',
    password: '123456',
    role: 'user',
    token: 'mock-token-juan',
    profileImage: '/img/juan.png',
    city: 'JPerez',
    address: 'juan.sec@example.com',
    phoneNumber: '+56912345678',
    country: 'Chile',
    state: 'Araucanía',
    zipCode: '4780000',
  },
  {
    id: '2',
    name: 'Ana Martínez',
    email: 'ana@example.com',
    password: 'adminpass',
    role: 'admin',
    token: 'mock-token-ana',
  },
  {
    id: '3',
    name: 'Carlos Torres',
    email: 'carlos@example.com',
    password: 'torrespass',
    role: 'user',
    token: 'mock-token-carlos',
  },
];

export default mockUsers;
