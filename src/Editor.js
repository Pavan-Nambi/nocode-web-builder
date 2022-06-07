import React from "react";

import { useState, useEffect } from "react";
import grapesjs from "grapesjs";

function Editor() {
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
    });
    setEditor(editor);
  }, []);
  return <div id="editor"></div>;
}

export default Editor;
