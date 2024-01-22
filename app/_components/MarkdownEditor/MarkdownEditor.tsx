import React, {ChangeEvent} from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import {Loader} from "@/app/_components/Loader/Loader";


const MDEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    {
        ssr: false,
        loading: () => <Loader />
    }
);

type MarkdownEditorProps = {
    value: string,
    onChange: (value?: string | undefined, event?: ChangeEvent<HTMLTextAreaElement> | undefined) => void
}
export const MarkdownEditor: React.FC<MarkdownEditorProps> = (props) => {
    const { value, onChange } = props;
    return (
        <MDEditor value={value} onChange={onChange} data-color-mode="light" />
    )
}