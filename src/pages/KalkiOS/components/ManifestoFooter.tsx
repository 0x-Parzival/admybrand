import React from 'react';

const ManifestoFooter: React.FC = () => {
  return (
    <footer className="py-20 bg-black/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-gray-400 mb-8">
            <p className="text-2xl sm:text-3xl font-medium mb-4">
              KalkiOS is not here to be sleek. It's here to be sovereign.
            </p>
            <p className="text-xl sm:text-2xl mb-4">
              It doesn't fingerprint, beacon, or update behind your back.
            </p>
            <p className="text-xl sm:text-2xl mb-4">
              It runs how it's supposed to:
            </p>
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl">
                On your terms.
              </p>
              <p className="text-xl sm:text-2xl">
                In your space.
              </p>
              <p className="text-xl sm:text-2xl">
                With your control.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center text-gray-500 text-sm">
            <p className="mb-2">
              Built with ArchISO | Based on Open Source Truth
            </p>
            <p>
              © 2025 KalkiOS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ManifestoFooter;
