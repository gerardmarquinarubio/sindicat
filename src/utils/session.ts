import { getServerSession } from "next-auth";
import { authOptions } from "~/pages/api/auth/[...nextauth]";

export async function getSessionUser(req: any, res: any) {
    return (await getServerSession(req, res, authOptions))?.user;
}