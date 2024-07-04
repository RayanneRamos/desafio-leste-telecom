import { useState } from "react";
import { ListContactProps } from "../pages/ListContacts";
import { calculateAge } from "../utils/calculateAge";
import { AGES } from "../utils/ages";

interface UseFiltersReturn {
  genderFilter: string;
  setGenderFilter: (value: string) => void;
  languageFilter: string;
  setLanguageFilter: (value: string) => void;
  ageFilter: string;
  setAgeFilter: (value: string) => void;
  birthdayMonthFilter: string;
  setBirthdayMonthFilter: (value: string) => void;
  filteredContacts: ListContactProps[];
}

export function useFilters(contacts: ListContactProps[]): UseFiltersReturn {
  const [genderFilter, setGenderFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [birthdayMonthFilter, setBirthdayMonthFilter] = useState("");

  function getAgeRange(ageValue: string) {
    const ageRange = AGES.find((age) => age.value === ageValue)?.age;

    if (ageRange) {
      const [minAge, maxAge] = ageRange.split(" à ").map(Number);
      return { minAge, maxAge: maxAge || 200 };
    }

    return { minAge: 0, maxAge: 200 };
  }

  const filterByGender = (contact: ListContactProps) => {
    return genderFilter === "" || contact.gender === genderFilter;
  };

  const filterByLanguage = (contact: ListContactProps) => {
    return languageFilter === "" || contact.language === languageFilter;
  };

  const filterByAge = (contact: ListContactProps) => {
    const age = calculateAge(contact.birthday);
    const { minAge, maxAge } = getAgeRange(ageFilter);
    return ageFilter === "" || (age >= minAge && age <= maxAge);
  };

  const filterByBirthdayMonth = (contact: ListContactProps) => {
    const birthdayMonth = new Date(contact.birthday).toLocaleString("en-us", {
      month: "long",
    });

    return (
      birthdayMonthFilter === "" ||
      birthdayMonth.toLowerCase() === birthdayMonthFilter.toLowerCase()
    );
  };

  const filteredContacts = contacts
    .filter(filterByGender)
    .filter(filterByLanguage)
    .filter(filterByAge)
    .filter(filterByBirthdayMonth);

  return {
    genderFilter,
    setGenderFilter,
    languageFilter,
    setLanguageFilter,
    ageFilter,
    setAgeFilter,
    birthdayMonthFilter,
    setBirthdayMonthFilter,
    filteredContacts,
  };
}
