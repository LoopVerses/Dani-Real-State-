"use client";

import { Property } from "@/types";

export type TypeFilter = "All" | Property["type"];
export type CityFilter = "All" | Property["city"];
export type StatusFilter = "All" | Property["status"];

interface FilterBarProps {
  typeFilter: TypeFilter;
  cityFilter: CityFilter;
  statusFilter: StatusFilter;
  resultCount: number;
  onTypeChange: (value: TypeFilter) => void;
  onCityChange: (value: CityFilter) => void;
  onStatusChange: (value: StatusFilter) => void;
}

const types: TypeFilter[] = ["All", "Residential", "Commercial", "Plot"];
const cities: CityFilter[] = ["All", "Karachi", "Lahore", "Islamabad"];
const statuses: StatusFilter[] = ["All", "For Sale", "For Rent"];

export default function FilterBar({
  typeFilter,
  cityFilter,
  statusFilter,
  resultCount,
  onTypeChange,
  onCityChange,
  onStatusChange,
}: FilterBarProps) {
  return (
    <div className="sticky top-[72px] bg-dark-2/95 backdrop-blur z-40 py-4 border-b border-primary/10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
        <div className="flex flex-wrap gap-2">
          <span className="text-text-muted text-sm self-center mr-2">Type:</span>
          {types.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => onTypeChange(t)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                typeFilter === t
                  ? "bg-primary text-dark font-semibold"
                  : "border border-primary/30 text-white hover:border-primary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <select
            value={cityFilter}
            onChange={(e) => onCityChange(e.target.value as CityFilter)}
            className="bg-dark-3 border border-primary/20 text-white rounded-lg px-4 py-2 text-sm focus:border-primary outline-none"
          >
            {cities.map((c) => (
              <option key={c} value={c}>
                {c === "All" ? "All Cities" : c}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap gap-2">
            {statuses.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => onStatusChange(s)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                  statusFilter === s
                    ? "bg-primary text-dark font-semibold"
                    : "border border-primary/30 text-white hover:border-primary"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <p className="text-text-muted text-sm whitespace-nowrap">
          Showing {resultCount} properties
        </p>
      </div>
    </div>
  );
}
