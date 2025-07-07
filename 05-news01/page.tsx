'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  useEffect(() => {
    const a = 100;
    // alert(a)
    console.log(a);
    const api_key = 'ssssx-=-dddd';
    console.log(api_key);
    console.log(typeof a, typeof api_key, typeof true);
    const b = '1';
    console.log(a + b);
    console.log(a + Number(b));
    const c = '100';
    console.log(typeof a, typeof c);
    console.log(Number(a) === Number(c));
    console.log(a === Number(c));
    // 分支语句
    const current_time = '12:20';
    if (current_time === '12:20') {
      console.log('小丸子要去吃午饭啦！');
    } else {
      console.log('小丸子在认真学习~');
    }
    // for循环
    for (let i = 1; i <= 10; i++) {
      console.log(`小丸子吃了 ${i} 个章鱼烧！`);
    }
    // while循环
    let energy = 60;
    while (energy > 0) {
      console.log('小丸子继续奔跑中...');
      energy = energy - 10;
    }
    // 函数
    function intro() {
      console.log('大家好，我是小丸子！');
    }
    intro();
    function intro2(content: string) {
      console.log('小丸子想说： ' + content);
    }
    intro2('今天也要加油哦！');
    function intro3(content1: string, content2: string) {
      console.log('小丸子和小玉说： ' + content1 + content2);
    }
    intro3('一起去', '吃章鱼烧吧！');
    function intro4(content: string) {
      console.log(content);
      return content + '（小丸子说得对！）';
    }
    const result = intro4('学习JavaScript真有趣！');
    console.log(result);
    alert('小丸子已经准备好啦！快打开控制台看看吧~ (◕‿◕✿)');
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
            小丸子的JavaScript魔法课
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            今天小丸子要和大家一起学习JavaScript的基础魔法！让我们看看控制台里有什么有趣的东西吧 (◕‿◕✿)
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
            <h2 className="text-xl font-semibold text-[#FF6B6B]">JavaScript基础知识</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-[#FF6B6B] font-bold mb-2">变量和类型</h3>
              <p className="text-gray-600">
                就像小丸子的零花钱和便当盒，每个变量都有自己的特点哦！
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-[#FF6B6B] font-bold mb-2">循环和分支</h3>
              <p className="text-gray-600">
                就像小丸子每天重复的上学路线，有时还要决定是去吃章鱼烧还是回家！
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-[#FF6B6B] font-bold mb-2">函数</h3>
              <p className="text-gray-600">
                就像小丸子帮妈妈跑腿买东西，输入是购物清单，输出是买回来的东西！
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/practice/images/樱桃小丸子图片生成 (9).png"
              alt="小丸子编程"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
          <p className="text-gray-600 text-lg">
            快按下 F12 键，打开控制台看看小丸子在做什么吧！(◕‿◕✿)
          </p>
        </section>
      </main>
    </div>
  );
} 