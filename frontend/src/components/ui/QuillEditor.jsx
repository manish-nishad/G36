import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const QuillEditor = ({ value, onChange, height = 350 }) => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current || quillRef.current) return;

    quillRef.current = new Quill(editorRef.current, {
      theme: "snow",
      placeholder: "Write your blog content here...",
      modules: {
        toolbar: [
          [{ font: [] }, { size: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ align: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block"],
          ["link", "image"],
          ["clean"],
        ],
      },
    });

    // 🔹 Emit HTML on change
    quillRef.current.on("text-change", () => {
      onChange(quillRef.current.root.innerHTML);
    });
  }, [onChange]);

  // 🔹 Update content (EditBlog support)
  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      quillRef.current.root.innerHTML = value || "";
    }
  }, [value]);

  return (
    <Box
      border="1px solid #d0d0d0"
      borderRadius="6px"
      overflow="hidden"
    >
      {/* 🔒 Sticky Toolbar */}
      <Box
        position="sticky"
        top="0"
        zIndex="1"
        bg="white"
        borderBottom="1px solid #e0e0e0"
      >
        {/* Quill automatically injects toolbar here */}
      </Box>

      {/* ✍️ Scrollable Editor */}
      <Box
        maxH={`${height}px`}
        overflowY="auto"
        padding={2}
      >
        <Box ref={editorRef} minH="280px" />
      </Box>
    </Box>
  );
};

export default QuillEditor;
