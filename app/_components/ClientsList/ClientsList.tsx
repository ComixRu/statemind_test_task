"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {formatTVL} from "@/app/_utils/functions";
import {useStore} from "@/app/_store/store";


export const ClientsList: React.FC = () => {
    const { state } = useStore();

    return (
        <div className="flex min-h-screen items-center justify-center bg-white">
            <div className="p-6 overflow-scroll px-0 w-full">
                <table className="w-full sm:min-w-max table-auto text-left">
                    <thead className="hidden sm:table-header-group">
                        <tr className="border-b border-blue-gray-100 bg-blue-gray-50/50">
                            <th className="p-4">
                                <h2 className="block antialiased text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                                    Client
                                </h2>
                            </th>
                            <th className="p-4">
                                <p className="block antialiased text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                                    TVL
                                </p>
                            </th>
                            <th className="p-4">
                                <p className="block antialiased text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                                    LINES OF CODE
                                </p>
                            </th>
                            <th className="p-4">
                                <p className="block antialiased text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                                    REPORTS
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        state.clients.map((client) =>
                            <tr
                                key={client.client}
                                className="relative flex flex-wrap hover:bg-gray-100 focus:bg-gray-100 cursor-pointer sm:table-row border-b border-blue-gray-50"
                            >
                                <td className="p-4  w-full sm:w-auto flex items-center gap-3">
                                    <Link href={`/${client.client}`} className="absolute w-full h-full left-0" />
                                    <Image
                                        src={`${process.env.API_URL}/${client.img}`}
                                        alt={client.client}
                                        className="relative object-center !rounded-full w-12 h-12 border border-blue-gray-50 bg-white object-contain p-1"
                                        width={48}
                                        height={48}
                                    />
                                    <p className="block antialiased text-xl leading-normal text-blue-gray-900 font-bold">
                                        {client.client}
                                    </p>
                                </td>
                                <td className="p-4">
                                    <span className="text-sm text-blue-gray-900 font-normal leading-none opacity-70">TVL</span>
                                    <p className="block antialiased text-xl leading-normal text-blue-gray-900 font-normal">
                                        {formatTVL(client.tvl)}
                                    </p>
                                </td>
                                <td className="p-4">
                                    <span className="text-sm text-blue-gray-900 font-normal leading-none opacity-70">Lines of Code</span>
                                    <p className="block antialiased text-xl leading-normal text-blue-gray-900 font-normal">
                                        {client.loc}
                                    </p>
                                </td>
                                <td className="p-4">
                                    <span className="text-sm text-blue-gray-900 font-normal leading-none opacity-70">Reports</span>
                                    <p className="block antialiased text-xl leading-normal text-blue-gray-900 font-normal">
                                        {client.reports}
                                    </p>
                                </td>

                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}