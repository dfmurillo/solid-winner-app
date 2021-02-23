export const raiseFetchErrorIfExist = (response) => {
  //Todo: create my own instance of erros to customize it
  if (typeof response.status === "undefined") {
    throw new Error("Invalid response");
  }

  switch (response.status) {
    case 404:
    case 500:
      throw new Error(response.error || "Error while fetching");
    default:
      return true;
  }
};
