import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <main className="bg-blue-400 w-screen h-screen flex items-start justify-end gap-5 pt-5 px-5">
        Signed in as {session.user.email} <br />
        <button
          className=" bg-white py-3 px-5 rounded-xl"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </main>
    );
  }
  return (
    <main className="bg-blue-400 w-screen h-screen flex items-center justify-center">
      <button
        className=" bg-white py-3 px-5 rounded-xl"
        onClick={() => signIn("google")}
      >
        Sign in with Google
      </button>
    </main>
  );
}
//
