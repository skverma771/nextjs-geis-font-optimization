import { create } from 'zustand';

interface AuthState {
  user: any | null; // User can be of any type or null
  setUser: (user: any) => void; // Function to set user
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
