import express from "express";
import cors from "cors";

import adminRoutes from "./routes/admin.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import commentRoutes from "./routes/comment.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/comments", commentRoutes);

export default app;

