import Image from 'next/image';

export default function MyAppDemo() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Image
          src="/practice/images/樱桃小丸子图片生成 (8).png"
          alt="魔法棒"
          width={24}
          height={24}
          className="inline-block"
        />
        <h2 className="text-xl font-semibold text-[#FF6B6B]">小丸子的第一个组件</h2>
      </div>
      <p className="text-gray-600">
        这是小丸子写的第一个React组件！是不是很可爱呢？(◕‿◕✿)
      </p>
    </div>
  );
} 