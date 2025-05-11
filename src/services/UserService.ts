import mockUsers, { UserData } from '@/data/userData';

const STORAGE_KEY = 'users';

export const UserService = {
  // Obtener todos los usuarios
  getAll(): UserData[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as UserData[]) : mockUsers;
  },

  // Guardar usuarios en localStorage
  saveAll(users: UserData[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  },

  // Registrar un nuevo usuario
  register(newUser: UserData): { success: boolean; message: string } {
    const users = this.getAll();

    const emailExists = users.some((user) => user.email === newUser.email);
    if (emailExists) {
      return { success: false, message: 'Este correo ya está registrado' };
    }

    const userToSave: UserData = {
      ...newUser,
      id: (users.length + 1).toString(),
      role: 'user', // Esto asegura que sea un string literal 'user'
      token: `mock-token-${Date.now()}`,
    };

    const updatedUsers = [...users, userToSave];
    this.saveAll(updatedUsers);

    return { success: true, message: 'Usuario registrado exitosamente' };
  },

  // Método para actualizar un usuario
  update(updatedUser: UserData): void {
    const users = this.getAll();
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? { ...user, ...updatedUser } : user
    );
    this.saveAll(updatedUsers);
  },
};
