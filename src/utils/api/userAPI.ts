import api from "./api";

const userApi = {
  login: ({ username, password }) =>
    api.fire({ url: "", data: { username, password } }),
};

export default userApi;
