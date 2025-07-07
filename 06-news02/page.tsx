'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // DOM操作示例
    if (h1Ref.current) {
      h1Ref.current.innerHTML = '小丸子的DOM魔法（点我试试）';
      h1Ref.current.style.color = '#FF6B6B';
      
      // 添加鼠标悬停效果
      h1Ref.current.onmouseover = function(this: HTMLHeadingElement) {
        this.style.transform = 'scale(1.05)';
        this.style.color = '#FF8585';
      };
      h1Ref.current.onmouseout = function(this: HTMLHeadingElement) {
        this.style.transform = 'scale(1)';
        this.style.color = '#FF6B6B';
      };
      h1Ref.current.onclick = function() {
        alert('小丸子说："你发现了我的魔法！" (◕‿◕✿)');
      };
    }

    if (divRef.current) {
      // 创建新元素
      const p1 = document.createElement('p');
      p1.textContent = '小丸子正在学习如何使用DOM魔法~';
      p1.className = 'text-gray-600 mb-4';
      
      const p2 = document.createElement('p');
      p2.textContent = '点击下面的按钮，看看会发生什么！';
      p2.className = 'text-gray-600 mb-4';
      
      const button = document.createElement('button');
      button.textContent = '点我变魔法！';
      button.className = 'bg-[#FF6B6B] text-white px-4 py-2 rounded-full hover:bg-[#FF8585] transition-colors';
      
      // 清空原有内容
      divRef.current.innerHTML = '';
      
      // 添加新元素
      divRef.current.appendChild(p1);
      divRef.current.appendChild(p2);
      divRef.current.appendChild(button);
      
      // 添加点击事件
      button.onclick = function(this: HTMLButtonElement) {
        const colors = ['#FF6B6B', '#FFD93D', '#95E1D3', '#FF8585'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.style.backgroundColor = randomColor;
        p1.style.color = randomColor;
        p2.style.color = randomColor;
      };
    }

    alert('小丸子已经准备好DOM魔法啦！(◕‿◕✿)');
  }, []);

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
            小丸子的DOM魔法课
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            今天小丸子要教大家如何使用DOM魔法！就像小丸子整理自己的房间一样，我们也可以整理网页元素哦~ (◕‿◕✿)
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
            <h2 className="text-xl font-semibold text-[#FF6B6B]">DOM操作基础</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-[#FF6B6B] font-bold mb-2">选择元素</h3>
              <p className="text-gray-600">
                就像小丸子在书包里找课本一样，我们要先找到要改变的元素！
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-[#FF6B6B] font-bold mb-2">修改内容</h3>
              <p className="text-gray-600">
                就像小丸子在作业本上写字一样，我们可以改变元素的内容！
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-[#FF6B6B] font-bold mb-2">添加样式</h3>
              <p className="text-gray-600">
                就像小丸子给房间装饰一样，我们可以让元素变得更漂亮！
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 max-w-3xl mx-auto">
          <h1
            ref={h1Ref}
            style={{ cursor: 'pointer', transition: 'all 0.3s' }}
            className="text-3xl font-bold mb-6 text-center"
          >
            DOM操作示例
          </h1>
          <div className="flex justify-center mb-6">
            <Image
              src="/practice/images/樱桃小丸子图片生成 (9).png"
              alt="小丸子编程"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div
            ref={divRef}
            className="text-center space-y-4 p-6 bg-pink-50 rounded-lg"
          >
            正在准备DOM魔法...
          </div>
        </section>
      </main>
    </div>
  );
} 