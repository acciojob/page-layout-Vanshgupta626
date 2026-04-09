import React from "react";

function PageLayout({ header, footer, children }) {
  return (
    <div>
      {header}
      {children}
      {footer}
    </div>
  );
}

export default PageLayout;