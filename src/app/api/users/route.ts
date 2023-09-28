import { NextApiRequest, NextApiResponse } from "next/types";

export async function GET(request: NextApiRequest, res: NextApiResponse) {
  const users = [
    { id: 1, name: "john" },
    { id: 2, name: "jane" },
    { id: 3, name: "bob" },
  ];
  return new Response(JSON.stringify(users));
}
