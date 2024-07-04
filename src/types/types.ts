export interface Contact {
  id: string | undefined;
  firstname: string;
  lastname: string;
  email: string;
  birthday: string;
  language: string;
  gender: "Masculino" | "Feminino";
  photo: string;
}
