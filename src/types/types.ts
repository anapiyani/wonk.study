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

export type TCoureses = {
  id: number;
  course_img: null | string;
  name: string;
};

export type TClasses = {
  grade_level: string;
  section: string;
  id: number;
  number_of_students: number;
};

export type TtoChangeEmail = {
  email: string;
};

export type TtoChangePassword = {
  old_password: string;
  password: string;
};
