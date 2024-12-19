import { config } from "dotenv";
import { DataSource } from "typeorm";
import { Issues } from "@/app/entities/issues";

config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || "5433"),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: true,
  entities: [Issues],
});

AppDataSource.initialize().catch((error) => {
  console.error("Error during DataSource initialization:", error);
});
