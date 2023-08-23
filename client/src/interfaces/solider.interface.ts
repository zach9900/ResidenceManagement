import Gender from "../constants/Gender.enum";

export default interface Solider {
  firstname: string;
  lastname: string;
  gender: Gender;
  personalNumber: string;
  gaf: string;
  course: string;
}
