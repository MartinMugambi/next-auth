import type { NextPage } from "next";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <section>
        <h1>Welcome {session.user.name} </h1>
        <img
          src={session.user.image}
          width="100"
          height="100"
          alt="profile_pic"
        />
        <button
          style={{
            background: "blue",
            color: "white",
            padding: "10px",
            outline: "none",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => signOut()}
        >
          SignOut
        </button>
      </section>
    );
  }

  return (
    <main>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          width: "100vw",
          cursor: "pointer",
          justifyContent: "space-evenly",
        }}
      >
        <Link href="/api/auth/signin">
          <h1
            onClick={() => signIn()}
            style={{
              color: "blue",
              fontSize: "1.3rem",
              fontWeight: "bold",
              outline: "3px solid gold",
              padding: "10px",
            }}
          >
            Sign in
          </h1>
        </Link>
      </section>
    </main>
  );
};

export default Home;
