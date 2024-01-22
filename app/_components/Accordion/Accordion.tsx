import {Audit} from "@/app/_utils/types";
import {formatDate} from "@/app/_utils/functions";
import Link from "next/link";
import { useParams } from "next/navigation";

type AccordionProps = Audit
export const Accordion = (props: AccordionProps) => {
    const {
        audit_name,
        end_date,
        initial_commit,
        desc,
        conclusion,
        report_link,
        private: private_audit
    } = props;

    const params = useParams();

    return (
        <details className="p-4  w-full sm:w-auto border-b">
            <summary className="flex cursor-pointer flex-row items-center justify-between py-1 antialiased text-xl leading-normal text-blue-gray-900 font-bold marker:[font-size:0px]">
                {audit_name}
                <svg className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
            </summary>
            <div>
                <div className="mt-1">
                    <span className="text-blue-gray-900 font-normal leading-none opacity-70">Date:</span>
                    <span className="leading-normal text-blue-gray-900 font-bold ml-1">{formatDate(end_date)}</span>
                </div>
                {
                    !private_audit && <>
                        {initial_commit && <div className="mt-1">
                            <span className="text-blue-gray-900 font-normal leading-none opacity-70">Initial commit:</span>
                            <span className="leading-normal text-blue-gray-900 font-bold ml-1">{initial_commit}</span>
                        </div>}
                        {desc && <div className="mt-3 flex flex-col">
                            <span className="text-blue-gray-900 font-normal leading-none opacity-70">Description:</span>
                            <span className="leading-normal text-blue-gray-900 mt-2 w-9/12" dangerouslySetInnerHTML={{__html: desc }}/>
                        </div>}
                        {conclusion && <div className="mt-3  flex flex-col">
                            <span className="text-blue-gray-900 font-normal leading-none opacity-70">Conclusion:</span>
                            <span className="leading-normal text-blue-gray-900 mt-2 w-9/12" dangerouslySetInnerHTML={{__html: conclusion}} />
                        </div>}
                        <div className="flex mt-6 mb-4">
                            {report_link && <a
                                className="text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-3.5"
                                href={report_link}
                                target="_blank"
                            >
                                Report
                            </a>}
                            <Link
                                className="text-gray-700 bg-transparent border hover:text-white hover:border-sky-500 hover:bg-sky-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-3.5"
                                href={`${params.client}/${audit_name}`}
                            >
                                Send feedback
                            </Link>
                        </div>
                    </>
                }
            </div>
        </details>
    )
}