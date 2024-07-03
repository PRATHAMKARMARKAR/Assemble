import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
    path: './env'
});

app.listen(process.env.PORT || 8000, () => {
    console.log(`App Started On Port: ${process.env.PORT}`);;
});