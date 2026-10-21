/**
 * Service descriptions shown on the home page and the services page.
 *
 * Edit the copy here. Keep `confirmWithPharmacy: true` until the pharmacy
 * has confirmed that offering — especially immunizations (certification),
 * delivery, and refill reminders.
 */

export type Service = {
  slug: string;
  name: string;
  summary: string;
  body: string;
  confirmWithPharmacy: boolean;
};

export const services: Service[] = [
  {
    slug: "prescriptions",
    name: "Prescription filling",
    summary: "New prescriptions and refills, ready for pickup at the counter.",
    body: "Bring a paper prescription, or ask your prescriber to send it to ColAlta Pharmacy. Bring an insurance card if you hope to use coverage. Which plans we bill is not listed on this website — call and ask before you assume a plan is accepted.",
    confirmWithPharmacy: false,
  },
  {
    slug: "transfers",
    name: "Prescription transfers",
    summary: "We contact your current pharmacy and request the prescriptions you want moved.",
    body: "Call us with the other pharmacy’s name and the medication names, or follow the steps on the refills page. Transfers depend on refills remaining and on the medication. Some prescriptions, including many controlled medications, cannot move the usual way. The pharmacist will tell you what is possible.",
    confirmWithPharmacy: false,
  },
  {
    slug: "counseling",
    name: "Medication counseling",
    summary: "Questions about a label, a side effect, or how a medicine fits with another.",
    body: "Ask at the counter when you pick up, or call and we will make time to talk. Counseling is part of the visit. This website does not give personal medical advice, and it is not a substitute for the pharmacist or your prescriber.",
    confirmWithPharmacy: false,
  },
  {
    slug: "otc",
    name: "OTC and the front store",
    summary: "Everyday health items alongside the prescription counter.",
    body: "The front of the store is for ordinary over-the-counter needs. What is on the shelf changes, and this website does not sell products or list a catalog. Ask the pharmacy if you are looking for something specific.",
    confirmWithPharmacy: false,
  },
  {
    slug: "immunizations",
    name: "Immunizations",
    summary: "Ask whether any vaccines are offered, and which ones.",
    body: "Many community pharmacies give routine vaccines. Whether ColAlta Pharmacy currently immunizes — and which vaccines, ages, or seasons that covers — has not been confirmed for this website. Call before you come in for a shot. Nothing here schedules a vaccine or claims a specific certification.",
    confirmWithPharmacy: true,
  },
  {
    slug: "reminders",
    name: "Refill reminders",
    summary: "Ask if the pharmacy can remind you when a refill is due.",
    body: "Reminder calls or messages are common, but they are not turned on from this website. There is no enrollment form here. If you want a reminder, call the pharmacy and ask whether that service is available.",
    confirmWithPharmacy: true,
  },
  {
    slug: "delivery",
    name: "Delivery",
    summary: "Do not count on delivery until the pharmacy confirms it.",
    body: "Local delivery may or may not be offered, and this website does not promise it. Confirm with the pharmacy before you need medicine brought to you, including which neighborhoods are covered and whether a fee applies.",
    confirmWithPharmacy: true,
  },
];
