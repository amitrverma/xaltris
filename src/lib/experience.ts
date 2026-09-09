const experienceStart = {
  year: 2003,
  monthIndex: 5,
};

export function calculateExperienceYears(date = new Date()): number {
  const elapsedMonths =
    (date.getFullYear() - experienceStart.year) * 12 +
    (date.getMonth() - experienceStart.monthIndex);

  return Math.max(0, Math.floor(elapsedMonths / 12 + 0.5));
}
