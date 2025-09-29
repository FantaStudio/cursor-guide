import { api } from "shared/api";
import { User } from "../model";

export const userApi = {
    getUser: (id: string): Promise<User> => api.get(`/users/${id}`),

    updateUser: (id: string, data: Partial<User>): Promise<User> =>
        api.post(`/users/${id}`, data),
};

