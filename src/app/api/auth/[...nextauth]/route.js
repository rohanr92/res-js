import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
  { id: "1", name: "bablu", password: "12345" },
  { id: "2", name: "hablu", password: "12345" },
];

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const { username, password } = credentials;

        const user = users.find((u) => u.name === username);
        if (!user) return null;

        if (user.password !== password) return null;

        // ✅ Return SAFE user object
        return {
          id: user.id,
          name: user.name,
          
        };
      },
    }),
    
  ],
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
