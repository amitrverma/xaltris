"use client";

import { useEffect, useState } from "react";

import { calculateExperienceYears } from "../lib/experience";

export default function ExperienceYears({
  initialYears,
}: {
  initialYears: number;
}) {
  const [years, setYears] = useState(initialYears);

  useEffect(() => {
    setYears(calculateExperienceYears());
  }, []);

  return <>{years}</>;
}
