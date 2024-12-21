import { queryDatabase } from "../../../utils/postgres"; // Adjust import path if needed

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const result = await queryDatabase(`
        SELECT device_id, label
        FROM customer_provisioning.seambit
        LIMIT 10
      `);
      console.log("Query results:", result);
      res.status(200).json(result);
    } catch (error) {
      console.error("Database query error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}