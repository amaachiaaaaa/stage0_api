import express from "express";
import cors from "cors";



const app = express();


// create middleware
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.json({
        email: "melamaachia@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/amaachiaaaaa/stage0_api.git"
    });
});









// listening for incoming requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})