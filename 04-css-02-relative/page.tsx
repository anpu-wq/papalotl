import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
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
            小丸子的定位魔法
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            今天小丸子要教大家相对定位的魔法！就像小丸子在操场上跑步时，总是以起点为参考来确定位置一样~ (◕‿◕✿)
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
            <h2 className="text-xl font-semibold text-[#FF6B6B]">正常文档流</h2>
          </div>
          <div className="space-y-4 text-center">
            <div className="p-4 bg-[#FFE5E5] rounded-lg text-[#FF6B6B]">小丸子</div>
            <div className="p-4 bg-[#FFE5E5] rounded-lg text-[#FF6B6B]">小玉</div>
            <div className="p-4 bg-[#FFD93D] rounded-lg text-gray-700 font-bold">花轮同学</div>
            <div className="p-4 bg-[#FFE5E5] rounded-lg text-[#FF6B6B]">大野同学</div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 mb-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/practice/images/樱桃小丸子图片生成 (9).png"
              alt="魔法棒"
              width={24}
              height={24}
              className="inline-block"
            />
            <h2 className="text-xl font-semibold text-[#FF6B6B]">相对定位</h2>
          </div>
          <div className="space-y-4 text-center relative">
            <div className="p-4 bg-[#FFE5E5] rounded-lg text-[#FF6B6B]">小丸子</div>
            <div className="p-4 bg-[#FFE5E5] rounded-lg text-[#FF6B6B]">小玉</div>
            
            {/* 原始位置标记 */}
            <div className="p-4 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg text-gray-400">
              花轮同学原来的位置
            </div>

            {/* 相对定位的元素 */}
            <div className="p-4 bg-[#FFD93D] rounded-lg absolute w-full transform translate-x-8 translate-y-4 shadow-lg">
              花轮同学 (position: relative)
            </div>

            <div className="p-4 bg-[#FFE5E5] rounded-lg text-[#FF6B6B]">大野同学</div>

            <p className="text-sm text-[#FF6B6B] pt-16 text-center">
              看！花轮同学移动了位置，但是大野同学还在原来的位置等他呢~ (◕‿◕✿)
            </p>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/practice/images/樱桃小丸子图片生成 (8).png"
              alt="魔法棒"
              width={24}
              height={24}
              className="inline-block"
            />
            <h2 className="text-xl font-semibold text-[#FF6B6B]">小丸子的魔法咒语</h2>
          </div>
          <div className="bg-[#FFF5E6] rounded-lg p-4 font-mono text-sm text-gray-700">
            <pre className="whitespace-pre-wrap">
{`.flower-kun {
  position: relative;
  transform: translate(2rem, 1rem);
  /* 向右移动2rem，向下移动1rem */
}`}
            </pre>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            这就是让花轮同学移动位置的魔法咒语哦！记住了吗？(◕‿◕✿)
          </p>
        </section>
      </main>
    </div>
  );
} 