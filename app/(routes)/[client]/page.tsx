import ClientPage from "@/app/_components/ClientPage/ClientPage";
import {Metadata} from "next";

export async function generateMetadata({ params }: { params: { client: string }}): Promise<Metadata> {
    return {
        title: decodeURIComponent(params.client)
    }
}
export default function Client({ params }: { params: { client: string } }) {
   return (
       <ClientPage clientName={decodeURIComponent(params.client)} />
   )
}