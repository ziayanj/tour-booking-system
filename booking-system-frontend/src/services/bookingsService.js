import baseService from "./baseService";

const getBookingDetails = async (id) => {
  try {
    const response = await baseService.get(`/bookings/${id}`);

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch(e) {
    return Promise.reject(e);
  }
};


const getBookings = async () => {
  try {
    const response = await baseService.get('/bookings');

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch {
    console.error("Internal error");
  }
};

const createBooking = async (bookingData, tourId) => {
  try {
    bookingData['tourId'] = tourId;
    const response = await baseService.post('/bookings', bookingData);

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch {
    console.error("Internal error");
  }
};

const updateBooking = async (bookingData, id) => {
  try {
    const response = await baseService.put(`/bookings/${id}`, bookingData);

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch {
    console.error("Internal error");
  }
};

const deleteBooking = async (id) => {
  try {
    const response = await baseService.delete(`/bookings/${id}`);

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch {
    console.error("Internal error");
  }
};

export {
  getBookings,
  getBookingDetails,
  createBooking,
  updateBooking,
  deleteBooking,
};
