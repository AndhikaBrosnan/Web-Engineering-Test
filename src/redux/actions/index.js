import ApiRandom from "../../apis/apiRandomUser";

export const fetchUsers = async () => {
  try {
    const response = await ApiRandom({
      url: "?results=10",
      method: "GET",
    });
    return response.data;
  } catch (err) {
    return { message: "Error while fetching Users" };
  }
};

export const fetchFilter = async (genderVal = null, searchVal = null) => {
  let searchQuery = "";
  if (searchVal) {
    searchQuery = `&keyword=${searchVal}`;
  }

  let genderQuery = "";
  if (genderVal) {
    genderQuery = `&gender=${genderVal}`;
  }

  try {
    const response = await ApiRandom({
      url: `?results=10${genderQuery}${searchQuery}`,
      method: "GET",
    });
    return response.data;
  } catch (err) {
    return { message: "Error while fetching Male Users" };
  }
};

export const fetchPagination = async (currentPage) => {
  try {
    const response = await ApiRandom({
      url: `?results=10&page=${currentPage}&pageSize=10`,
      method: "GET",
    });
    return response.data;
  } catch (err) {
    return { message: "Error while fetching Pagination Users" };
  }
};

export const fetchSearch = async (q) => {
  try {
    const response = await ApiRandom({
      url: "",
      method: "GET",
    });
    return response.data;
  } catch (err) {
    return { message: "Error while fetching Pagination Users" };
  }
};
