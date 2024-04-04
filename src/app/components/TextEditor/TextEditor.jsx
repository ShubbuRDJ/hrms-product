import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './text-editor.scss';

const TextEditor = ({ placeholder }) => {
    const [value, setValue] = useState('');

    const handleChange = (content, delta, source, editor) => {
        setValue(content);
    };



    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false, 5, 6] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            ['blockquote', 'code-block'],
            ['link', 'image', 'video'],
            ['clean'],
            [{ 'custom': 'horizontal-rule' }]
        ],
        clipboard: {
            matchVisual: false,
        }
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'list', 'list', 'align',
        'script', 'script',
        'blockquote', 'code-block',
        'link', 'image', 'video', 'horizontal-rule'
    ];

    return (
        <>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={handleChange}
                modules={modules}
                formats={formats}
                placeholder={placeholder}
            />
        </>
    )
}

export default TextEditor
