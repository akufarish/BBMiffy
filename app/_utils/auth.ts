export type LoginPayload = {
  identity: string;
  password: string;
};

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
};
