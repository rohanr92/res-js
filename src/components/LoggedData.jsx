"use client";

import { useSession } from "next-auth/react";

const LoggedData = () => {
  const { data: session, status } = useSession();



  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Not logged in</p>;

  return (
    <div>
      <h2>Session Data</h2>
      <pre className="border-2 border-black rounded-2xl p-3">
        {JSON.stringify(session, null, 2, status)}
      </pre>
    </div>
  );
};

export default LoggedData;
