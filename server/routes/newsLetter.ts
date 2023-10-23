export default defineEventHandler((event) => {
  return sendRedirect(event, 'my-domain.com');
});
