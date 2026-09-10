import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MobileNav from './MobileNav';

export default function Layout({ children }) {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  return (
    <div className="bg-background text-on-surface h-screen w-full flex overflow-hidden">
      {/* Desktop Persistent Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 h-screen flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <Header onToggleMobileMenu={() => setIsMobileDrawerOpen(true)} />

        {/* Dynamic Viewport Content */}
        <main className="flex-1 overflow-y-auto p-3 sm:p-5 lg:p-6 bg-background pb-24 lg:pb-8">
          <div className="w-full max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Nav & Drawer */}
      <MobileNav
        isDrawerOpen={isMobileDrawerOpen}
        onCloseDrawer={() => setIsMobileDrawerOpen(false)}
      />
    </div>
  );
}
