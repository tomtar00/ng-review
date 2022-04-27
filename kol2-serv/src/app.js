express = require("express");
cors = require("cors");

const app = express();
app.use(cors())

const orders = [
    {
        id: 1,
        text: "order 1",
        image: "https://st2.depositphotos.com/1003713/6972/i/950/depositphotos_69729769-stock-photo-funny-old-lady-listening-music.jpg"
    },
    {
        id: 2,
        text: "order 2",
        image: "https://st2.depositphotos.com/1000975/5966/i/950/depositphotos_59665405-stock-photo-man-wearing-red-clothing-in.jpg"
    },
    {
        id: 3,
        text: "order 3",
        image: "https://static.wikia.nocookie.net/8203bd7d-f35c-47d3-aaf4-55b435480ec6"
    }
]

app.get("/api/order/items", async (request, response, next) => {
    response.status(200).send({orders: orders})
});
app.get("/api/order/items/:id", async (request, response, next) => {
    response.status(200).send({ order: orders[request.params.id - 1]});
});

app.listen(3000, function () {
    console.info(`Server is running at 3000`)
});