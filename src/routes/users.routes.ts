import express from "express";
import UsersController  from "../controllers/users.controller";
import userSchema from "../utils/validation/user.validation";

const router = express.Router();

// const usersController = UsersController;

router.get("/", UsersController.findAll);
router.post("/", userSchema,UsersController.create);
router.get("/:id", UsersController.find);
router.put("/:id", userSchema,UsersController.update);
router.delete("/:id", UsersController.deleteUser);

export default router