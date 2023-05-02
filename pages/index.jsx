/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <main className="text-blue-400 flex w-full justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <section className="flex h-9 gap-2 items-center px-3 bg-gray-100 rounded-2xl">
          <img
            className="w-6 h-6 rounded-full "
            src={session?.user?.image}
            alt="User profile image"
          />
          {session?.user?.name}
        </section>
      </main>
    </Layout>
  );
}
