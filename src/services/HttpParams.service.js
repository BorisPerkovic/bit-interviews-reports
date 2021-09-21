class HttpParamsService {
  headerGET() {
    const tokenObj = localStorage.getItem("token");
    const requestOptions = {
      method: "GET",
      headers: { Authorization: `Bearer ${tokenObj}` },
    };
    return requestOptions;
  }

  headerDELETE() {
    const tokenObj = localStorage.getItem("token");
    const requestOptions = {
      method: "DELETE",
      headers: { Authorization: `Bearer ${tokenObj}` },
    };
    return requestOptions;
  }

  headerPOST(props) {
    const tokenObj = localStorage.getItem("token");
    const requestOptions = {
      method: "POST",
      headers: { Authorization: `Bearer ${tokenObj}` },
      body: props,
    };
    return requestOptions;
  }
}

export const httpParams = new HttpParamsService();
