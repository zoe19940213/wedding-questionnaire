import axios from "axios";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  confirmButtonColor: "#e5b5b4",
  confirmButtonText: "Close"
});

const baseURL = "http://localhost:3000";

function creatAnswer(answer) {
  return axios.post(`${baseURL}`, answer);
}
export { creatAnswer, Toast };
