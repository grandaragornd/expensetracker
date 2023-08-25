import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between sm:p-24 p-4'>
    <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm '>
      <h1 className='text-4xl p-4 text-center'>Expense Tracker</h1>
      <div className='bg-slate-800 p-4 rounded-lg'>
        <form className='grid grid-cols-6 items-center text-black'>
          
        </form>
      </div>
    </div>
  </main>
  );
}
