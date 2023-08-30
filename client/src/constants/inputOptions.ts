const RoleOptions: Array<{ value: string; label: string }> = [
  { value: "חניך", label: "חניך" },
  { value: `מק"ס`, label: `מק"ס` },
  { value: "מנהל קומה", label: "מנהל קומה" },
  { value: `מב"ס`, label: `מב"ס` },
];

const genderOptions: Array<{ value: string; label: string }> = [
  { value: "זכר", label: "זכר" },
  { value: "נקבה", label: "נקבה" },
];

const courseNumberToGaf: { [courseNumber: string]: string } = {
  "1400": "הנדסת מערכות",
  "1264": "הנדסת מערכות",
  "1414": "קרב א",
};

const courseOptions: Array<{ value: string; label: string }> = [
  { value: "1400", label: "1400" },
  { value: "1264", label: "1264" },
  { value: "1414", label: "1414" },
];

export { RoleOptions, genderOptions, courseNumberToGaf, courseOptions };
