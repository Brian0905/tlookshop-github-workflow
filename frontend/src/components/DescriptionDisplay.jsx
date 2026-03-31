import React from 'react';
import DOMPurify from 'dompurify';
import 'react-quill/dist/quill.snow.css'; // Import style gốc của Quill

const DescriptionDisplay = ({ content }) => {
  // 1. Kiểm tra đầu vào
  if (!content) return null;

  // 2. Làm sạch mã HTML (Bảo mật)
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    // Class 'ql-snow' kích hoạt theme
    <div className="ql-snow">
      {/* - 'ql-editor': Style mặc định của Quill
         - 'rich-text-content': Style tùy chỉnh của mình (bước 2)
      */}
      <div 
        className="ql-editor rich-text-content"
        style={{ padding: 0, border: 'none' }} // Reset padding mặc định thừa thãi
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    </div>
  );
};

export default DescriptionDisplay;