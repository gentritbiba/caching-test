import { refreshTime } from '@/lib/actions'
import { unstable_cacheTag } from 'next/cache';

async function getCurrentTime() {  
  "use cache"
  unstable_cacheTag("time")
    return new Date().toLocaleTimeString();
  }

export default async function Home() {
  const currentTime = await getCurrentTime();
  
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Current Time Demo</h1>
      <div className="p-4 border rounded mb-4">
        <p className="text-xl">{currentTime}</p>
      </div>
      
      <form action={refreshTime}>
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Refresh Time
        </button>
      </form>
    </div>
  );
}
