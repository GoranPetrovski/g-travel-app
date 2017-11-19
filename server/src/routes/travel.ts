import Promise = require("bluebird");
import router = require("simple-router");
import bodyParser = require("./lib/body-parser");
import errorHandler = require("./lib/error-handler");
import {
    Service,
    Public,
    PathParam,
    QueryParam,
    Body,
    Get,
    Post,
    Put,
    Delete
} from "tyx";

const app = router();

app.get(
    "/llol",
    (req, res) => {
        console.log("AAAAA travel");
        return Promise.resolve({dateNow: new Date()});
    }
);
export const route = app.route;



@Service()
export class NoteService {

    @Public()
    @Get("/time")
    public getTime() {
        return Promise.resolve({dateNow: new Date()});
    }
}