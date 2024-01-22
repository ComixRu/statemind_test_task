import {Metadata} from "next";
import {FeedbackForm} from "@/app/_components/FeedbackForm/FeedbackForm";

export async function generateMetadata({ params }: { params: { project: string }}): Promise<Metadata> {
    return {
        title: `${decodeURIComponent(params.project)}: send feedback`
    }
}
export default function ProjectFeedback({ params }: { params: { project: string } }) {
    return (
        <FeedbackForm project={decodeURIComponent(params.project)} />
    )
}