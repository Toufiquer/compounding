import "./App.css";

function App() {
  return (
    <div className={` container mx-auto my-4`}>
      <div className="grid grid-cols-[400px_1fr] gap-4">
        <div className="p-1">
          <form>
            <label class="block">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Monthly Invest
              </span>
              <input
                type="number"
                name="number"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Monthly Invest"
              />
            </label>
            <label class="block mt-4">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Monthly Grow (%)
              </span>
              <input
                type="number"
                name="number"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Monthly Grow (%)"
              />
            </label>
            <label class="block mt-4">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Year
              </span>
              <input
                type="number"
                name="number"
                max="50"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="How many Year You want to calculate (Max 50)"
              />
            </label>
            <button class="bg-gray-400 text-black font-bold py-2 px-4 mt-4 mx-auto rounded">
              Calculate
            </button>
          </form>
        </div>
        {/* Table */}
        <div className="p-2">
          <table class="w-full table-auto text-center">
            <thead>
              <tr class="bg-gray-400">
                <th class="border px-4 py-2">Year</th>
                <th class="border px-4 py-2">Total Value</th>
                <th class="border px-4 py-2">Monthly Return</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-200">
                <td class="border px-4 py-2">2024</td>
                <td class="border px-4 py-2">1000</td>
                <td class="border px-4 py-2">100</td>
              </tr>
              <tr class="bg-gray-100">
                <td class="border px-4 py-2">2024</td>
                <td class="border px-4 py-2">1000</td>
                <td class="border px-4 py-2">100</td>
              </tr>
              <tr class="bg-gray-200">
                <td class="border px-4 py-2">2024</td>
                <td class="border px-4 py-2">1000</td>
                <td class="border px-4 py-2">100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
