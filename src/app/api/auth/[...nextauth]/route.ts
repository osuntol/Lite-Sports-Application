import NextAuthOptions from "next-auth";

import { options } from "./options";

const handler = NextAuthOptions(options);
export { handler as GET, handler as POST }


