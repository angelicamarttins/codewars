const getGrade = (s1, s2, s3) => {
  const average = Math.round((s1 + s2 + s3) / 3);
  console.log(average);

  if (average >= 90) return "A";
  if (average < 90 && average >= 80) return "B";
  if (average < 80 && average >= 70) return "C";
  if (average < 70 && average >= 61) return "D";
  if (average <= 60) return "F";
};

console.log(getGrade(100, 95, 80));
