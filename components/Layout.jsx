import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";

export default function Layout({ children }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <main className="bg-blue-400 w-screen h-screen flex ">
        <Nav />
        <section className="bg-white flex-grow my-2 mr-2 rounded-lg p-2">
          {children}
        </section>
        {/* <button
          className=" bg-white py-2 px-5 rounded-xl"
          onClick={() => signOut()}
        >
          Sign out
        </button> */}
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
