"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function EmbedDemoPage() {
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

      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="relative">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-[#FF6B6B] hover:text-[#FF8585] transition-colors">
            <span className="text-2xl">←</span>
            <span>回到小丸子的主页</span>
          </Link>
        </div>

        <header className="text-center mb-6">
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
            小丸子的智能问答小助手
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            今天小丸子要和大家一起学习如何使用智能问答功能！让我们开始吧 (◕‿◕✿)
          </p>
        </header>

        <section className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 mb-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/practice/images/樱桃小丸子图片生成 (8).png"
              alt="魔法棒"
              width={24}
              height={24}
              className="inline-block"
            />
            <h2 className="text-xl font-semibold text-[#FF6B6B]">使用说明</h2>
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>这是小丸子的智能问答助手，可以回答你的各种问题哦！</li>
            <li>直接在下方的对话框输入问题就可以开始聊天了~</li>
            <li>记得问一些有趣的问题，小丸子会很开心的回答你！</li>
          </ul>
        </section>
      </div>

      <div className="w-screen bg-white shadow-lg border-t border-b border-pink-100">
        <iframe
          src="https://ai.youdao.com/saas/qanything/#/home"
          title="QAnything 问答服务"
          width="100%"
          height="90vh"
          className="border-none"
          allowFullScreen
          style={{ minHeight: '700px' }}
        />
      </div>
    </div>
  );
} 