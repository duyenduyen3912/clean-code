if (score >= 90) {
  grade = "A";
} else {
  if (score >= 80) {
    grade = "B";
  } else {
    if (score >= 70) {
      grade = "C";
    } else {
      if (score >= 60) {
        grade = "D";
      } else {
        grade = "F";
      }
    }
  }
}

let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}
