import baseService from "./baseService";

const getTourDetails = async (id) => {
  try {
    const response = await baseService.get(`/tours/${id}`);

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch(e) {
    console.error("Internal error");
    return Promise.reject(e);
  }
};

const getAvailableTours = async (params) => {
  try {
    const response = await baseService.get('/tours', { params });

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch {
    console.error("Internal error")
  }
};

const getPopularLocations = async () => {
  try {
    const response = await baseService.get('/tours/popular');

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch {
    console.error("Internal error")
  }
};

export {
  getTourDetails,
  getAvailableTours,
  getPopularLocations,
};
