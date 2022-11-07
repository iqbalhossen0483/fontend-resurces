import React, { useRef, useState } from "react";
import { Markup } from "interweave";
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
  const [value, setValue] = useState("");

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={confiq}
        tabIndex={1}
        onBlur={(newContent) => setContent(newContent)}
      />

      <button onClick={() => setValue(editor.current?.value)}>
        see result
      </button>
      <div>
        <Markup content={value} />
      </div>
    </div>
  );
};

export default TextEditor;
