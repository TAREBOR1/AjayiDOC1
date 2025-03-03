import { CheckCircle, Circle, Copy, Eye, EyeOff } from "lucide-react";


const App = () => {
  

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold text-center">Onchain Withdrawal</h2>
        <p className="text-2xl font-bold text-center text-red-500">-100,000.00 USDT</p>

        {/* Timeline Section */}
        <div className="mt-6 space-y-0">
          {/* First Item: Withdrawal application */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <CheckCircle className="text-green-500" size={20} />
              <div className="h-6 w-0.5 bg-green-500"></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>Withdrawal application</p>
              <p className="text-xs text-gray-400">2025-02-03</p>
            </div>
          </div>
          
          {/* Second Item: Cancel withdrawal */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <CheckCircle className="text-green-500" size={20} />
              <div className="h-6 w-0.5 bg-gray-500"></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>Cancel withdrawal</p>
              <p className="text-xs text-gray-400">5s <span className="text-xs text-blue-400">cancel</span></p>
            </div>
          </div>
          
          {/* Third Item: Successful arrival */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <Circle className="text-gray-500" size={20} />
            </div>
            <div className="flex flex-col gap-1">
              <p>Successful arrival</p>
              <p className="text-xs text-gray-400">Expected 2025-03-02</p>
            </div>
          </div>
        </div>

        {/* Transaction Details */}
        <div className="mt-6 text-sm space-y-2">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Order ID:</p>
            <div className="flex items-center gap-2">
              <p>46585994</p>
              <Copy className="cursor-pointer" size={16} />
            </div>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Network:</p>
            <p>BSC(BEP20)</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Arrival Amount:</p>
            <p>100,000.00 USDT</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Fee:</p>
            <p>2000.00 USDT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
