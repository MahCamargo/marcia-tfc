const httpErrorMap = {
  successful: 200,
  created: 201,
  deleted: 204,
  notFound: 404,
  notFound2: 400,
  unauthorized: 401,
  forbidden: 403,
  conflict: 409,
  unprocessableEntity: 422,
};

const mapStatusHTTP = (status: string): number => {
  if (status in httpErrorMap) {
    return httpErrorMap[status as keyof typeof httpErrorMap];
  }
  return 500;
};

export default mapStatusHTTP;
