
import axios from "axios"

export default {

    saveMessage: function (saveMessage) {
        return axios.post("/api/messages", saveMessage);
    },

}