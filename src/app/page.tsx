import Image from "next/image";
import { createClient } from "next-sanity";
const client = createClient({
  projectId: "sinc04je",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});
export default async function Home() {
  const pets = await client.fetch(`*[_type == "pet"]`);
  console.log(pets);
  return <div> hello world!</div>;
}
