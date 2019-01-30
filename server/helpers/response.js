// eslint-disable-next-line arrow-body-style
export default (response, statusCode, statusMessage, ...data) => {
  return response.status(statusCode).json({ statusMessage, data });
};
