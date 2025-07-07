import Image from 'next/image';

export default function MyAppHello() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Image
          src="/practice/images/樱桃小丸子图片生成 (9).png"
          alt="魔法棒"
          width={24}
          height={24}
          className="inline-block"
        />
        <h2 className="text-xl font-semibold text-[#FF6B6B]">小丸子的问候</h2>
      </div>
      <div className="flex items-center gap-4">
        <Image
          src="/practice/images/樱桃小丸子图片生成 (7).png"
          alt="小丸子"
          width={60}
          height={60}
          className="rounded-full"
        />
        <p className="text-gray-600">
          大家好呀！欢迎来到小丸子的React学习小屋~ (◕‿◕✿)
        </p>
      </div>
    </div>
  );
} 