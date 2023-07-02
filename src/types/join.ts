interface Action {
  type: string;
  value: string | number;
};

interface UserInfo {
  name: string;
  age: number;
  phoneNumber: string;
  emailAddress: string;
};

export type { Action, UserInfo };