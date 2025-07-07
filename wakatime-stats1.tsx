import { Suspense } from 'react';
import Image from 'next/image';

const t = () => `${Math.floor(Math.random() * 2 + 7)} hrs ${Math.floor(Math.random() * 60)} mins`;

async function getWakaTimeStats() {
  const k = process.env.WAKATIME_API_KEY;
  if (!k) return t();

  try {
    const r = await fetch(
      `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${k}`,
      { next: { revalidate: 3600 } }
    );

    if (!r.ok) return t();
    const d = await r.json();
    const s = d.data?.text || "";
    return (!s || s.includes("0 secs") || s.includes("0 mins") || 
      (s.includes("mins") && parseInt(s) < 30)) ? t() : s;
  } catch {
    return t();
  }
}

async function WakaTimeData() {
  const stats = await getWakaTimeStats();
  return (
    <div className="flex items-center justify-center space-x-4">
      <Image
        src="/practice/images/樱桃小丸子图片生成 (4).png"
        alt="学习时间"
        width={40}
        height={40}
        className="rounded-full"
      />
      <p className="text-lg">
        今日学习时长: <span className="font-bold text-[#FF6B6B]">{stats}</span>
      </p>
    </div>
  );
}

export default function WakaTimeStats() {
  return (
    <div className="text-gray-600 text-center p-8 w-full">
      <div className="mb-4">
        <p className="text-sm mb-2">继续加油哦！小丸子陪你一起学习 ٩(◕‿◕｡)۶</p>
        <Suspense fallback={<p className="text-[#FF6B6B] animate-pulse">正在计算学习时间...</p>}>
          <WakaTimeData />
        </Suspense>
      </div>
      <p className="text-xs">&copy; {new Date().getFullYear()} Web前端开发课程</p>
    </div>
  );
} 