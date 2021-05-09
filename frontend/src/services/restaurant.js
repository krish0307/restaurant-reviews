import http from "../http-common";

class RestaurantDataService {
  getAll(page = 0) {
    return http.get(`restaurants?page=${page}`);
  }

  get(id) {
    console.log(id);
    return http.get(`/id/${id}`); //for realm /restaurant?id=${id} and for local server/id/${id}
  }

  find(query, by = "name", page = 0) {
    return http.get(`restaurants?${by}=${query}&page=${page}`);
  }

  createReview(data) {
    return http.post("/review", data); //for realm review-new
  }

  updateReview(data) {
    return http.put("/review", data); //for realm review-edit
  }

  deleteReview(id, userId) {
    return http.delete(`/review?id=${id}`, {
      data: { user_id: userId },
    }); //for realm review-delete
  }

  getCuisines(id) {
    return http.get("/cuisines");
  }
}

export default new RestaurantDataService();
