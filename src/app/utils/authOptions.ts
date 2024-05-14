import   NextAuthConfigAuthOptions from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from 'next-auth'



const options: NextAuthConfigAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Enter Username"
        },
        password: {
          label:"Password",
          type: "password",
          placeholder: ""
        }
      },
    })

  ],
}