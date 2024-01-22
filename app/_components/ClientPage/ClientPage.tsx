"use client"
import {Accordion} from "@/app/_components/Accordion/Accordion";
import {useStore} from "@/app/_store/store";
import { useMemo } from "react";
import {Client} from "@/app/_utils/types";
import Image from "next/image";
import {formatTVL} from "@/app/_utils/functions";
import Link from "next/link";


export default function ClientPage({ clientName }: { clientName: string }) {
    const { state } = useStore();

    const client: Client | undefined = useMemo(() => {
        if (state.clients && clientName) {
            return state.clients.find((client) => client.client === clientName)
        }
        return undefined
    }, [clientName, state.clients])

    if (client) {
        return (
            <div className="mt-6">
                <Link href="/" className="rotate-180 bg-transparent text-gray-400 hover:text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-xl p-2.5 text-center inline-flex items-center me-2">
                    <svg className="w-6 h-6 transition-all:0.2s" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    <span className="sr-only">Back</span>
                </Link>
                <div className="flex items-center">
                    <Image src={`${process.env.API_URL}/${client.img}`} alt={client.client} className="w-auto h-auto" width={60} height={60} />
                    <h1 className="text-4xl text-gray-900 font-bold ml-4">{client.client}</h1>
                </div>
                <div className="flex justify-between w-10/12 md:w-6/12 m-4">
                    <div className="flex flex-col">
                        <span className="text-sm text-blue-gray-900 font-normal leading-none opacity-70">TVL</span>
                        <span className="text-2xl leading-normal text-blue-gray-900 font-bold mt-1">{formatTVL(client.tvl)}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-blue-gray-900 font-normal leading-none opacity-70">Lines of Code</span>
                        <span className="text-2xl leading-normal text-blue-gray-900 font-bold mt-1">{client.loc}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-blue-gray-900 font-normal leading-none opacity-70">Reports</span>
                        <span className="text-2xl leading-normal text-blue-gray-900 font-bold mt-1">{client.reports}</span>
                    </div>
                </div>
                {
                    client.audits.map((audit) => <Accordion key={audit.audit_name + audit.end_date} {...audit} />)
                }

            </div>
        )
    }
}