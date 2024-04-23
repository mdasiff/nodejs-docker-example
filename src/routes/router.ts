import { Router } from "express";

const router = Router();

router.get("/", (req:any, res:any) => res.json({ message: "Hello from Docker v3 🎉" }));

router.get("/health", (req:any, res:any) => {
  //throw new Error("Internal Server Error");
  res.status(200).json({ message: "Everything is good here 👀" });
});

export default router;
