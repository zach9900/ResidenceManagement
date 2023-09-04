import courseCommander from "../../interfaces/courseCommander.interface";
import Base from "../Base.enum";
import Gender from "../Gender.enum";

const courseCommander1: courseCommander = {
  firstname: "אלכס",
  lastname: "שבקוטה",
  gender: Gender.male,
  personalNumber: "1234567",
  phoneNumber: "0525865687",
  gaf: "הנדסת מערכות",
  course: "1400",
  soldiersArray: [],
  base: Base.techni,
};

const courseCommander2: courseCommander = {
  firstname: "דנה",
  lastname: "כהן",
  gender: Gender.female,
  personalNumber: "1745869",
  phoneNumber: "0548557845",
  gaf: "הנדסת מערכות",
  course: "1400",
  soldiersArray: [],
  base: Base.techni,
};

const courseCommander3: courseCommander = {
  firstname: "נועה",
  lastname: "סילברמן",
  gender: Gender.female,
  personalNumber: "2548789",
  phoneNumber: "0502465866",
  gaf: "הנדסת מערכות",
  course: "1246",
  soldiersArray: [],
  base: Base.techni,
};
const courseCommanders = [courseCommander1, courseCommander2, courseCommander3];
export default courseCommanders;
