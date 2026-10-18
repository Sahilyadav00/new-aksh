"use client";

import { useCallback, useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import Color from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import Focus from "@tiptap/extension-focus";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";

import {
    Bold,
    Italic,
    Underline as UnderlineIcon,
    List,
    ListOrdered,
    RotateCcw,
    RotateCw,
    AlignLeft,
    AlignCenter,
    AlignRight,
    ImageIcon,
    Link as LinkIcon,
    Heading1,
    Heading2,
    Heading3,
    Table as TableIcon,
    Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type TiptapEditorProps = {
    content?: string;
    onChange?: (html: string) => void;
    editable?: boolean;
};

export default function TiptapEditor({
    content,
    onChange,
    editable = true,
}: TiptapEditorProps) {
    const [characterCount, setCharacterCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [isTable, setIsTable] = useState(false);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            TextAlign.configure({
                types: ["heading", "paragraph"],
                // headingTypes: ["heading1", "heading2", "heading3"],
            }),
            CharacterCount,
            Image,
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: "text-blue-500 underline cursor-pointer",
                },
            }),
            Placeholder.configure({
                placeholder: "Start writing your story...",
                emptyEditorClass:
                    "first:before:text-gray-400 first:before:float-left first:before:content-[attr(data-placeholder)] first:before:pointer-events-none",
            }),

            TextStyle,
            Color,
            Focus.configure({
                className: "has-focus",
                mode: "all",
            }),
            Table.configure({
                resizable: true,
                HTMLAttributes: {
                    class: "border-collapse table-auto w-full",
                },

            }),
            TableRow,
            TableHeader,
            TableCell,
        ],
        content: content || "",
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: "prose max-w-none focus:outline-none min-h-[300px] p-4 transition-all duration-200",
            },
        },
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            onChange?.(html);
            setCharacterCount(editor.storage.characterCount.characters());
            setWordCount(editor.storage.characterCount.words());
        },
        onSelectionUpdate: ({ editor }) => {
            setIsTable(editor.isActive("table"));
        },
        editable,
    });

    // Content synchronization
    useEffect(() => {
        if (editor && content !== undefined && content !== editor.getHTML()) {
            editor.commands.setContent(content || "");
        }
    }, [content, editor]);



    const setLink = useCallback(() => {
        if (!editor) return;
        const previousUrl = editor.getAttributes("link").href;
        const url = window.prompt("URL", previousUrl);

        if (url === null) return;
        if (url === "") {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
        }
        editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }, [editor]);

    const addImage = useCallback(() => {
        if (!editor) return;
        const url = window.prompt("Image URL");
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    }, [editor]);

    useEffect(() => {
        if (editor) {
            editor.setEditable(editable);
        }
    }, [editor, editable]);

    if (!editor) return null;

    return (
        <div className="w-full border rounded-md border-gray-200 bg-white overflow-hidden flex flex-col">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-100 bg-gray-50/50">
                {/* History */}
                <div className="flex items-center gap-0.5 mr-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().chain().undo().run()}>
                        <RotateCcw size={15} />
                    </Button>
                    {/* <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().chain().redo().run()}>
                        <RotateCw size={15} />
                    </Button> */}
                </div>

                <div className="w-px h-6 bg-gray-200 mx-1" />

                {/* Text Formatting */}
                <div className="flex items-center gap-0.5">
                    <Button variant="ghost" size="icon" className={`h-8 w-8 ${editor.isActive("bold") ? "bg-gray-200 text-gray-900" : ""}`} onClick={() => editor.chain().focus().toggleBold().run()}>
                        <Bold size={15} />
                    </Button>
                    <Button variant="ghost" size="icon" className={`h-8 w-8 ${editor.isActive("italic") ? "bg-gray-200 text-gray-900" : ""}`} onClick={() => editor.chain().focus().toggleItalic().run()}>
                        <Italic size={15} />
                    </Button>
                    <Button variant="ghost" size="icon" className={`h-8 w-8 ${editor.isActive("underline") ? "bg-gray-200 text-gray-900" : ""}`} onClick={() => editor.chain().focus().toggleUnderline().run()}>
                        <UnderlineIcon size={15} />
                    </Button>

                    {/* Color Picker */}
                    <div className="relative flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded-md cursor-pointer overflow-hidden group">
                        <Palette size={15} className="absolute pointer-events-none" />
                        <input
                            type="color"
                            className="opacity-0 absolute inset-0 cursor-pointer w-full h-full"
                            onInput={(event) => editor.chain().focus().setColor((event.target as HTMLInputElement).value).run()}
                            value={editor.getAttributes("textStyle").color || "#000000"}
                        />
                    </div>
                </div>

                <div className="w-px h-6 bg-gray-200 mx-1" />

                {/* Headings */}
                <div className="flex items-center gap-0.5">
                    <Button variant="ghost" size="icon" className={`h-8 w-8 ${editor.isActive("heading", { level: 1 }) ? "bg-gray-200 text-gray-900" : ""}`} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
                        <Heading1 size={15} />
                    </Button>
                    <Button variant="ghost" size="icon" className={`h-8 w-8 ${editor.isActive("heading", { level: 2 }) ? "bg-gray-200 text-gray-900" : ""}`} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                        <Heading2 size={15} />
                    </Button>
                    <Button variant="ghost" size="icon" className={`h-8 w-8 ${editor.isActive("heading", { level: 3 }) ? "bg-gray-200 text-gray-900" : ""}`} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
                        <Heading3 size={15} />
                    </Button>
                </div>

                <div className="w-px h-6 bg-gray-200 mx-1" />

                {/* Lists & Alignment */}
                <div className="flex items-center gap-0.5">
                    <Button variant="ghost" size="icon" className={`h-8 w-8 ${editor.isActive("bulletList") ? "bg-gray-200 text-gray-900" : ""}`} onClick={() => editor.chain().focus().toggleBulletList().run()}>
                        <List size={15} />
                    </Button>
                    <Button variant="ghost" size="icon" className={`h-8 w-8 ${editor.isActive("orderedList") ? "bg-gray-200 text-gray-900" : ""}`} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                        <ListOrdered size={15} />
                    </Button>
                    <Button variant="ghost" size="icon" className={`h-8 w-8 ${editor.isActive({ textAlign: "left" }) ? "bg-gray-200 text-gray-900" : ""}`} onClick={() => editor.chain().focus().setTextAlign("left").run()}>
                        <AlignLeft size={15} />
                    </Button>
                    <Button variant="ghost" size="icon" className={`h-8 w-8 ${editor.isActive({ textAlign: "center" }) ? "bg-gray-200 text-gray-900" : ""}`} onClick={() => editor.chain().focus().setTextAlign("center").run()}>
                        <AlignCenter size={15} />
                    </Button>
                    <Button variant="ghost" size="icon" className={`h-8 w-8 ${editor.isActive({ textAlign: "right" }) ? "bg-gray-200 text-gray-900" : ""}`} onClick={() => editor.chain().focus().setTextAlign("right").run()}>
                        <AlignRight size={15} />
                    </Button>
                </div>

                <div className="w-px h-6 bg-gray-200 mx-1" />

                {/* Media & Tables */}
                <div className="flex items-center gap-0.5">
                    <Button variant="ghost" size="icon" className={`h-8 w-8 ${editor.isActive("link") ? "bg-gray-200 text-gray-900" : ""}`} onClick={setLink}>
                        <LinkIcon size={15} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={addImage}>
                        <ImageIcon size={15} />
                    </Button>
                    <Button variant="ghost" size="icon" className={`h-8 w-8 ${editor.isActive("table") ? "bg-gray-200 text-gray-900" : ""}`} onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
                        <TableIcon size={15} />
                    </Button>
                </div>
            </div>

            {/* Editor Area */}
            <div className="h-[400px] overflow-y-auto">
                <EditorContent editor={editor} />
            </div>

            {/* Footer / Status Bar */}
            <div className="border-t h-6 border-gray-100 bg-gray-50 p-2 flex justify-between items-center text-xs text-gray-500">
                <div className="flex gap-4">
                    <span>
                        {characterCount} characters
                    </span>
                    <span>
                        {wordCount} words
                    </span>
                </div>
                <div>
                    {/* Table Controls (Visible when in table) */}
                    {isTable && (
                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="sm" className="h-6 text-[10px] px-2" onClick={() => editor.chain().focus().addColumnAfter().run()}>+Col</Button>
                            <Button variant="ghost" size="sm" className="h-6 text-[10px] px-2" onClick={() => editor.chain().focus().deleteColumn().run()}>-Col</Button>
                            <Button variant="ghost" size="sm" className="h-6 text-[10px] px-2" onClick={() => editor.chain().focus().addRowAfter().run()}>+Row</Button>
                            <Button variant="ghost" size="sm" className="h-6 text-[10px] px-2" onClick={() => editor.chain().focus().deleteRow().run()}>-Row</Button>
                            <Button variant="ghost" size="sm" className="h-6 text-[10px] px-2 hover:bg-red-100 hover:text-red-600" onClick={() => editor.chain().focus().deleteTable().run()}>Delete Table</Button>
                        </div>
                    )}
                </div>
            </div>

            {/* Custom Styles for Focus and Table */}
            <style jsx global>{`
                .ProseMirror.has-focus {
                    outline: none;
                }
                .ProseMirror table {
                    border-collapse: collapse;
                    margin: 0;
                    overflow: hidden;
                    table-layout: fixed;
                    width: 100%;
                }
                .ProseMirror td,
                .ProseMirror th {
                    border: 2px solid #ced4da;
                    box-sizing: border-box;
                    min-width: 1em;
                    padding: 3px 5px;
                    position: relative;
                    vertical-align: top;
                }
                .ProseMirror th {
                    background-color: #f8f9fa;
                    font-weight: bold;
                    text-align: left;
                }
                .ProseMirror .selectedCell:after {
                    background: rgba(200, 200, 255, 0.4);
                    content: "";
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    pointer-events: none;
                    position: absolute;
                    z-index: 2;
                }
                .ProseMirror .column-resize-handle {
                    background-color: #adf;
                    bottom: -2px;
                    pointer-events: none;
                    position: absolute;
                    right: -2px;
                    top: 0;
                    width: 4px;
                }
            `}</style>
        </div>
    );
}
