export default function (doc) {
  if (doc.isBroken) {
    return '/not-found';
  }

  if (doc.type === 'home_page') {
    return '/';
  }

  if (doc.type === 'homestaging') {
    return '/homestaging';
  }

  if (doc.type === 'rental_management') {
    return '/rental';
  }

  if (doc.type === 'contact_page') {
    return '/contact';
  }

  if (doc.type === 'service_page') {
    return `/services`;
  }

  return '/not-found';
};