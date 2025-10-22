import React from 'react';
import { Check, X } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-white px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-normal text-gray-700 mb-4">
            Bad gateway
            <span className="ml-4 text-sm bg-gray-200 text-gray-600 px-3 py-1 rounded">
              Error code 502
            </span>
          </h1>
          <p className="text-gray-600 text-lg mb-2">
            Visit{' '}
            <a 
              href="https://cloudflare.com" 
              className="text-cloudflare-blue hover:underline"
            >
              cloudflare.com
            </a>{' '}
            for more information.
          </p>
          <p className="text-gray-500 text-sm">
            2025-10-22 13:06:17 UTC
          </p>
        </div>
      </div>

      {/* Status Section */}
      <div className="bg-gray-light py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Browser Status */}
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="browser-icon mx-auto"></div>
                <div className="absolute -bottom-2 -right-2">
                  <div className="status-icon success w-8 h-8 text-sm">
                    <Check size={16} />
                  </div>
                </div>
              </div>
              <h3 className="text-gray-600 font-medium mb-1">You</h3>
              <p className="text-gray-medium text-sm mb-2">Browser</p>
              <p className="text-success-green font-medium">Working</p>
            </div>

            {/* Cloudflare Status */}
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="cloud-icon mx-auto"></div>
                <div className="absolute -bottom-2 -right-2">
                  <div className="status-icon success w-8 h-8 text-sm">
                    <Check size={16} />
                  </div>
                </div>
              </div>
              <h3 className="text-gray-600 font-medium mb-1">Warsaw</h3>
              <p className="text-cloudflare-blue text-sm mb-2 font-medium">Cloudflare</p>
              <p className="text-success-green font-medium">Working</p>
            </div>

            {/* Host Status */}
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="server-icon mx-auto"></div>
                <div className="absolute -bottom-2 -right-2">
                  <div className="status-icon error w-8 h-8 text-sm">
                    <X size={16} />
                  </div>
                </div>
              </div>
              <h3 className="text-gray-600 font-medium mb-1">sargas.io</h3>
              <p className="text-gray-medium text-sm mb-2">Host</p>
              <p className="text-error-red font-medium">Error</p>
            </div>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-normal text-gray-700 mb-4">
                What happened?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The web server reported a bad gateway error.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-normal text-gray-700 mb-4">
                What can I do?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Please try again in a few minutes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center text-sm text-gray-500">
            <span>Cloudflare Ray ID: </span>
            <span className="font-mono">9929360deb21c3c4</span>
            <span className="mx-2">•</span>
            <span>Your IP: </span>
            <button className="text-cloudflare-blue hover:underline">
              Click to reveal
            </button>
            <span className="mx-2">•</span>
            <span>Performance & security by </span>
            <a 
              href="https://cloudflare.com" 
              className="text-cloudflare-blue hover:underline"
            >
              Cloudflare
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;