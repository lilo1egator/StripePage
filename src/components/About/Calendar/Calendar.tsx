import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import styles from "./Calendar.module.scss";

const STORAGE_KEY = "selectedDates";

function normalizeDate(d: Date) {
  const n = new Date(d);
  n.setHours(0, 0, 0, 0);
  return n;
}

export default function Calendar() {
  const [selectedDates, setSelectedDates] = useState<Date[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed: string[] = JSON.parse(raw);
      return parsed.map((s) => normalizeDate(new Date(s)));
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const iso = selectedDates.map((d) => d.toISOString());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(iso));
  }, [selectedDates]);

  function handleDayClick(day: Date) {
    const normalized = normalizeDate(day);
    const exists = selectedDates.some(
      (d) => d.getTime() === normalized.getTime()
    );

    if (exists) {
      setSelectedDates((prev) =>
        prev.filter((d) => d.getTime() !== normalized.getTime())
      );
    } else {
      setSelectedDates((prev) => [...prev, normalized]);
    }
  }

  return (
    <div className={styles.calendar}>
      <h2>Календар поїздок</h2>

      <div className={styles.calendar__card}>
        <button className={styles.calendar__cta}>
          + Купити квиток
        </button>

        <DayPicker
            mode="multiple"
            selected={selectedDates}
            onDayClick={handleDayClick}
            showOutsideDays
            formatters={{
                formatWeekdayName: (day) =>
                new Intl.DateTimeFormat('en', { weekday: 'short' }).format(day)
            }}
        />
      </div>
    </div>
  );
}
