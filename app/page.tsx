import { config } from "dotenv";
import { DataSource } from "typeorm";
import { Issues } from "./entities/issues";

config();

const AppDataSource = new DataSource({
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

async function startApp() {
  try {
    await AppDataSource.initialize();
    console.log("TypeORM connection established successfully.");
  } catch (error) {
    console.error("Error establishing TypeORM connection:", error);
  }
}

startApp();

export default function Home() {
  return <div>Hello world</div>;
}
