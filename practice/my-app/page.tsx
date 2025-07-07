import Link from 'next/link';
import Image from 'next/image';
import MyAppDemo from "../my-app-demo";
import MyAppHello from "../my-app-hello";

export default function MyAppHome() {
  return (
    <div className="min-h-screen bg-[#FFF5E6]">
      {/* 背景装饰 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32">
          <Image
            src="/practice/images/樱桃小丸子图片生成 (5).png"
            alt="装饰"
            width={128}
            height={128}
            className="opacity-20"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32">
          <Image
            src="/practice/images/樱桃小丸子图片生成 (6).png"
            alt="装饰"
            width={128}
            height={128}
            className="opacity-20"
          />
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="relative">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-[#FF6B6B] hover:text-[#FF8585] transition-colors">
            <span className="text-2xl">←</span>
            <span>回到小丸子的主页</span>
          </Link>
        </div>

        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Image
              src="/practice/images/樱桃小丸子图片生成 (7).png"
              alt="小丸子"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <h1 className="text-4xl font-bold text-[#FF6B6B] mb-4">
            小丸子的React学习小屋
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            今天小丸子要和大家一起学习React组件！让我们开始吧 (◕‿◕✿)
          </p>
        </header>

        <section className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 mb-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/practice/images/樱桃小丸子图片生成 (8).png"
              alt="魔法棒"
              width={24}
              height={24}
              className="inline-block"
            />
            <h2 className="text-xl font-semibold text-[#FF6B6B]">学习说明</h2>
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>React组件就像是小丸子的积木一样，可以搭建出漂亮的页面！</li>
            <li>每个组件都有自己的特点，就像小丸子的好朋友们一样~</li>
            <li>让我们一起来看看小丸子创建的第一个组件吧！</li>
          </ul>
        </section>

        <div className="max-w-3xl mx-auto space-y-6">
          <MyAppDemo />
          <MyAppHello />
        </div>
      </main>
    </div>
  );
} 