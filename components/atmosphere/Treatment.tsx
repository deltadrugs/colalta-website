"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { isTreatment, type TreatmentId } from "@/lib/atmosphere";

const STORAGE_KEY = "colalta-study";

type StudyState = {
  treatment: TreatmentId | null;
  embed: boolean;
};

const TreatmentContext = createContext<StudyState>({ treatment: null, embed: false });

export function readTreatment(): TreatmentId | null {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("variant");
  const embed = params.get("embed") === "1";

  if (!embed && query === "off") {
    sessionStorage.removeItem(STORAGE_KEY);
    return null;
  }

  if (isTreatment(query)) {
    if (!embed) sessionStorage.setItem(STORAGE_KEY, query);
    return query;
  }

  if (embed) return null;

  const stored = sessionStorage.getItem(STORAGE_KEY);
  return isTreatment(stored) ? stored : null;
}

export function TreatmentProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StudyState>({ treatment: null, embed: false });

  useEffect(() => {
    const apply = () => {
      const embed = new URLSearchParams(window.location.search).get("embed") === "1";
      setState({ treatment: readTreatment(), embed });
    };
    apply();
    window.addEventListener("popstate", apply);
    return () => window.removeEventListener("popstate", apply);
  }, []);

  return <TreatmentContext.Provider value={state}>{children}</TreatmentContext.Provider>;
}

export function useStudy(): StudyState {
  return useContext(TreatmentContext);
}

export function useTreatment(): TreatmentId | null {
  return useContext(TreatmentContext).treatment;
}
