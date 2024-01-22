import {ClientsList} from "@/app/_components/ClientsList/ClientsList";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'List of Clients',
  description: 'List of Statemind Clients ',
}

export default async function Home() {
  return (
      <ClientsList />
  )
}
