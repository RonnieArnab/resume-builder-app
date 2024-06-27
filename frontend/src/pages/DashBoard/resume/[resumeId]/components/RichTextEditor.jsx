import React, { useState } from "react";
import {
  BtnItalic,
  Editor,
  EditorProvider,
  Toolbar,
  BtnBold,
  BtnBulletList,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnUnderline,
  Separator,
} from "react-simple-wysiwyg";

function RichTextEditor({ onRichTextEditor }) {
  const [value, setValue] = useState();

  return (
    <div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditor(e);
          }}>
          <Toolbar>
            <Separator />
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
