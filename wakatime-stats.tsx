import { Suspense } from 'react';
import Image from 'next/image';

async function getWakaTimeStats() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    console.error("WakaTime API key is not set.");
    return "API Key Not Configured";
  }

  try {
    const url = `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${apiKey}`;
    
    const response = await fetch(
      url,
      {
        next: {
          revalidate: 3600, // 每小时重新获取一次数据
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WakaTime API request failed with status: ${response.status}`);
      console.error(`WakaTime API error response: ${errorText}`);
      return "Error Fetching Data";
    }

    const stats = await response.json();
    return stats.data?.text || "还没有开始学习哦";
  } catch (error) {
    console.error("Failed to fetch WakaTime stats:", error);
    return "获取数据失败了";
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
        <Suspense fallback={
          <p className="text-[#FF6B6B] animate-pulse">
            正在计算学习时间...
          </p>
        }>
          <WakaTimeData />
        </Suspense>
      </div>
      <p className="text-xs">&copy; {new Date().getFullYear()} Web前端开发课程</p>
    </div>
  );
} 