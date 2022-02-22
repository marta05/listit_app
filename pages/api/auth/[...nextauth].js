import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";


const options = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'your credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {type: "text", placeholder: "email" },
                // email: {type: "text", placeholder: "email"},
                password: {type: "password", placeholder: "password" }
            },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                const res = await fetch("/api/signup", {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
                })
                const user = await res.json({
                    working: "true"
                })
        
                // If no error and we have user data, return it
                if (res.ok && user) {
                return user
                }
                // Return null if user data could not be retrieved
                return null
            }
            }),
        GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
  ],
//   callbacks: {
//     jwt: ({ token, user }) => {
//       // first time jwt callback is run, user object is available
//       if (user) {
//         token.id = user.id;
//       }

//       return token;
//     },
//     session: ({ session, token }) => {
//       if (token) {
//         session.id = token.id;
//       }

//       return session;
//     },
//   },
  jwt: {
    secret: process.env.JWT_SECRET
  },
  session:{
      jwt: true,
      maxAge: 30*60*60*24, //30 days days
      secret: process.env.SECRET
  },
  database: process.env.DATABASE_URL,
  debug: process.env.NODE_ENV === "development",
  secret: process.env.SECRET,
  pages: {
      signIn: '/api/auth/signin'
  }
};
export default NextAuth(options);