import { NextApiRequest, NextApiResponse } from "next";
import pool from "@/utils/db";
import {
  InstagramUser,
  UpdateInstagramUserDTO,
} from "@/types/instagram-user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<InstagramUser | { error: string }>
) {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  try {
    switch (req.method) {
      case "GET":
        const [users] = await pool.query<InstagramUser[]>(
          "SELECT * FROM instagram_users WHERE id = ?",
          [id]
        );

        if (!users.length) {
          return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json(users[0]);

      case "PUT":
        const updateData: UpdateInstagramUserDTO = req.body;

        // Build dynamic update query
        const updateFields = Object.entries(updateData)
          .filter(([_, value]) => value !== undefined)
          .map(([key, _]) => `${key} = ?`);

        const updateValues = Object.entries(updateData)
          .filter(([_, value]) => value !== undefined)
          .map(([_, value]) => value);

        if (!updateFields.length) {
          return res.status(400).json({ error: "No fields to update" });
        }

        await pool.query(
          `UPDATE instagram_users SET ${updateFields.join(", ")} WHERE id = ?`,
          [...updateValues, id]
        );

        const [updatedUsers] = await pool.query<InstagramUser[]>(
          "SELECT * FROM instagram_users WHERE id = ?",
          [id]
        );

        return res.status(200).json(updatedUsers[0]);

      case "DELETE":
        const [result] = await pool.query<mysql.ResultSetHeader>(
          "DELETE FROM instagram_users WHERE id = ?",
          [id]
        );

        if (result.affectedRows === 0) {
          return res.status(404).json({ error: "User not found" });
        }

        return res.status(204).end();

      default:
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        return res
          .status(405)
          .json({ error: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}