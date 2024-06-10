export type TEmailMessage = {
  name: string;
  sender_email: string;
  message: string;
};
export type TLoginUser = {
  email: string;
  password: string;
};
export type TUserInfo = {
  age: number | null;
  date_joined: string | null;
  email: string | null;
  first_name: string | null;
  gender: string | null;
  grade_level: string | null;
  id: number | null;
  is_active: boolean | null;
  is_staff: boolean | null;
  is_superuser: boolean | null;
  last_login: string | null;
  last_name: string | null;
  middle_name: string | null;
  phone_number: string | null;
  profile_picture: string | null;
  role: string | null;
  section: string | null;
  username: string | null;
  groups: [];
  user_permissions: [];
};
