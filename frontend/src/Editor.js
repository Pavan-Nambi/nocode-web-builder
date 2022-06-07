import React from "react";

import { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
//plugin for basic set of blocks nav bar components and many refer src-https://github.com/artf/grapesjs-preset-webpage
import gjsPresetWebpage from "grapesjs-preset-webpage";

function Editor() {
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      plugins: [gjsPresetWebpage],
      pluginsOpts: {
        gjsPresetWebpage: {
          // options
        },
      },
    });
    setEditor(editor);
  }, []);
  return <div id="gjs"></div>;
}

export default Editor;
