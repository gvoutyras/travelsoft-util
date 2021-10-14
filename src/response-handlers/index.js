const respStatusEnum = {
  true: true,
  false: false,
  error: "error",
};

function successfulResponse(data, message) {
  return {
    respStatus: respStatusEnum.true,
    status: respStatusEnum.true,
    data: data,
    message: message,
  };
}

function failedResponse(message, errorCode) {
  return {
    respStatus: respStatusEnum.false,
    status: respStatusEnum.false,
    data: null,
    message: message,
    errorCode: errorCode,
  };
}

function errorResponse(message, errorCode) {
  return {
    respStatus: respStatusEnum.error,
    status: respStatusEnum.error,
    data: null,
    message: message,
    errorCode: errorCode,
  };
}

module.exports = {
  success: successfulResponse,
  fail: failedResponse,
  error: errorResponse,
};
