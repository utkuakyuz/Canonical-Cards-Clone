import { services } from "../service/restServices";
import { reactive } from "vue";
const AnthonyJsonData = reactive({ list: []}); // get isteğinden gelen reklamların listesi

const getAnthonyJson = () => {
 services
   .AnthonyJsonValue()
   .then((res) => {
     console.log("res from AnthonyJsonValue: ", res);
     AnthonyJsonData.list = res.data
   })
   .catch((err) => {
     console.log("error in AnthonyJsonValue: ", err);
   })
}

export{
 getAnthonyJson,
 AnthonyJsonData
}