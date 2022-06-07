import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
//plugin for basic set of blocks nav bar components and many refer src-https://github.com/artf/grapesjs-preset-webpage
import gjsBlocksBasic from "grapesjs-blocks-basic";

function Editor() {
  const [editor, setEditor] = useState(null);
  const { pageId } = useParams();
  console.log("page id is ", pageId);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      plugins: [gjsBlocksBasic],
      pluginsOpts: {
        gjsBlocksBasic: {
          // options
        },
      },
    });
    setEditor(editor);
  }, []);
  return <div id="gjs"></div>;
}

export default Editor;
