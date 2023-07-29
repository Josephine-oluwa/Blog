import express from "express"
import {
    createArticle,
    getAuthorARticle
} from "../controller/articleController"

const router = express.Router();


router.route("/:authorID/create-article").post(upload, createArticle);
router.route("/:authorID/read-article").get(getAuthorArticles);

export default router;
