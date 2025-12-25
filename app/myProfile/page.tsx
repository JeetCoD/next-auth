// using the session on the server component using the getserversession hook.
import { Card, CardTitle } from "@/components/ui/card";
import Header from "@/components/ui/Header";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../_lib/auth";

export default async function page() {
  const session = await getServerSession(NEXT_AUTH);
  return (
    <div>
      <Header />
      <Card>
        <CardTitle>Server component</CardTitle>
        {JSON.stringify(session)}
      </Card>
    </div>
  ); 
}
