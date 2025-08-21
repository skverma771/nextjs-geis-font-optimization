import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>E-Bike Tracking Application</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
