/* eslint no-undef: "off" */

import React from 'react';

// Components
import Navbar from '../navbar';

type LayoutProps = {
  children: JSX.Element;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
