import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import FixedCharge from '../components/FixedCharge';

const FixedChargePage = () => {
  return (
    <div>
      <Head>
        <title>Stripe React Examples</title>
      </Head>

      <Nav />

      <main className="py-12 px-6">
        <div className="mx-auto max-w-xl">
          <p className="pb-6 text-gray-500">
            This example creates a customer in Stripe and charges them. To test
            it out, use the credit card number{' '}
            <code className="px-2 py-px mx-1 rounded-full bg-gray-800 text-sm whitespace-no-wrap">
              4242 4242 4242 4242
            </code>
            with any MM / YY, CVV, and ZIP.
          </p>
          <div className="pb-4">
            <FixedCharge />
          </div>
          <p>
            <a
              href="https://github.com/statickit-projects/stripe-react/blob/master/components/FixedCharge.tsx"
              className="text-indigo-600 hover:text-indigo-500 font-bold"
              target="_blank"
            >
              Check out the{' '}
              <code className="px-2 py-px mx-1 text-indigo-500 rounded-full bg-gray-800 text-sm whitespace-no-wrap">
                FixedCharge
              </code>{' '}
              component to see the source &rarr;
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default FixedChargePage;
