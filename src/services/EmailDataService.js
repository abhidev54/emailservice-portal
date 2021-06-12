import http from "../http-common";

class EmailDataService {
  getAll() {
    return http.get("/mail/history");
  }

  create(data) {
    return http.post("/mail/send", data);
  }
}

export default new EmailDataService();