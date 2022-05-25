import React, { FunctionComponent } from 'react';

export const Card: FunctionComponent = () => {
  return (
    <div className="flex font-sans pt-10">
      <div className="flex-none w-56 relative z-20 overflow-hidden -my-2 -ml-2">
        <img
          src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
      <form className="flex-auto p-6 bg-slate-100 rounded-tr-lg rounded-br-lg">
        <div className="flex flex-wrap">
          <h1 className="flex-auto font-medium text-slate-900 text-xl">Kids Jumpsuit</h1>
          <div className="w-full flex-none mt-4 order-1">
            Current Bid: <span className="text-violet-600 text-2xl font-bold">$39.00</span>
          </div>
          <div className="w-full flex-none mt-4 order-1 mb-10">
            Qty: <span className="text-violet-600 text-xl font-bold">99</span>
          </div>
          <div className="text-sm font-medium text-slate-400">Bidding</div>
        </div>
        <div className="flex space-x-4 mb-5 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <button
              className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white"
              type="submit"
            >
              Bid now
            </button>
            <button
              className="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900"
              type="button"
            >
              Delete
            </button>
          </div>
          <button
            className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50"
            type="button"
            aria-label="Like"
          >
            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>
        <p className="text-sm text-slate-500">Free shipping on all continental US orders.</p>
      </form>
    </div>
  );
};
