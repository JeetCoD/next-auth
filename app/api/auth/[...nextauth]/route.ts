import { NEXT_AUTH } from "@/app/_lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(NEXT_AUTH);

export const GET = handler;
export const POST = handler;
// export async function GET(req: NextRequest, { params }: Params) {
//   const paramRes = await params;
//   return NextResponse.json({
//     message: "Auth route is working!",
//     params: paramRes,
//   });
// }

// export async function POST(req: NextRequest, { params }: Params) {
//   const request = await req.json();
//   const paramRes = await params;
//   return NextResponse.json({
//     message: "Auth route POST is working!",
//     params: paramRes,
//     name: request.name || "No name provided",
//   });
// }
