import { Router } from "express";
import { addProfileImage, getUserInfo, login, signup, updateProfile,removeProfileImage, logout } from "../controllers/AuthController.js";
import { verifyToken } from "../middlewares/AuthMiddleWare.js";
import multer from "multer";
import { searchContacts } from "../controllers/ContactsController.js";

const contactsRoutes = Router();

contactsRoutes.post("/search",verifyToken,searchContacts);

export default contactsRoutes;