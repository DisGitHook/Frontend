import Head from "next/head";
import Navbar from "../../../components/Navbar";

export default function Privacy() {
  return (
    <div>
      <Head>
        <title>DisGitHook | Dashboard</title>
        <meta name="description" content="DisGitHook | Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <p>CREATE WEBHOOK</p>
    </div>
  );
}
