import { EVENT_CONFIG } from "@/config/event";

export function getGoogleCalendarUrl(): string {
  const title = encodeURIComponent(`${EVENT_CONFIG.name} · ${EVENT_CONFIG.edition}`);
  const details = encodeURIComponent(
    `Three days of technology, hackathons, workshops, and student innovation at Ekiti State University (EKSU).\n\nOfficial Registration Form: ${EVENT_CONFIG.registration.url}\n\nNote: Please bring your student ID and laptop.`
  );
  const location = encodeURIComponent(
    `${EVENT_CONFIG.institution.name}, ${EVENT_CONFIG.institution.city}, ${EVENT_CONFIG.institution.state}, ${EVENT_CONFIG.institution.country}`
  );
  // Oct 28, 2026 08:00 UTC to Oct 30, 2026 18:00 UTC
  const dates = "20261028T080000Z/20261030T180000Z";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}

export function downloadIcsFile(): void {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Discovery Series EKSU//Event Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:discovery-series-eksu-2026@interswitch-eksu",
    "DTSTAMP:20261020T000000Z",
    "DTSTART:20261028T080000Z",
    "DTEND:20261030T180000Z",
    `SUMMARY:${EVENT_CONFIG.name} · ${EVENT_CONFIG.edition}`,
    `DESCRIPTION:Three days of technology, hackathons, workshops, and student innovation at EKSU.\\nRegistration: ${EVENT_CONFIG.registration.url}`,
    `LOCATION:${EVENT_CONFIG.institution.name}, ${EVENT_CONFIG.institution.city}, ${EVENT_CONFIG.institution.state}, Nigeria`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", "interswitch-discovery-series-eksu-2026.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
