import axios from "axios";

export default axios.create({
    baseURL: "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/restaurant-reviews-fppue/service/Restaruants/incoming_webhook/",
    headers: {
        "Content-type": "application/json"
    }
});