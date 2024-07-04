import { useState } from "react";
import { ListContactProps } from "../pages/ListContacts";
import { calculateAge } from "../utils/calculateAge";

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

  const filteredContacts = contacts.filter((contact) => {
    const age = calculateAge(contact.birthday);
    const birthdayMonth = new Date(contact.birthday).toLocaleString("pt-br", {
      month: "long",
    });

    return (
      (genderFilter === "" || contact.gender == genderFilter) &&
      (languageFilter === "" || contact.language === languageFilter) &&
      (ageFilter === "" || age.toString() === ageFilter) &&
      (birthdayMonthFilter === "" || birthdayMonth === birthdayMonthFilter)
    );
  });

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
