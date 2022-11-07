import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
const confiq = {
  buttons: [
    "bold",
    "Italic",
    "underline",
    "link",
    "unlink",
    "source",
    "ul",
    "ol",
    "fontsize",
    "hr",
    "image",
  ],
};

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={confiq}
        tabIndex={1}
        onBlur={(newContent) => setContent(newContent)}
      />
    </div>
  );
};

export default TextEditor;
