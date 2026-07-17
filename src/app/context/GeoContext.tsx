"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface GeoContextType {
  country: string | null;
  currency: string;
  loading: boolean;
}

const GeoContext = createContext<GeoContextType>({
  country: null,
  currency: "USD",
  loading: true,
});

export function GeoProvider({ children }: { children: ReactNode }) {
  const [country, setCountry] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setCountry(data.country_code || null);
        setLoading(false);
      })
      .catch(() => {
        setCountry("US");
        setLoading(false);
      });
  }, []);

  const currency = country === "GB" ? "GBP" : "USD";

  return (
    <GeoContext.Provider value={{ country, currency, loading }}>
      {children}
    </GeoContext.Provider>
  );
}

export function useGeo() {
  return useContext(GeoContext);
}
