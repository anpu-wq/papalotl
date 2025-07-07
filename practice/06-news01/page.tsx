'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // 类和对象
    class Student {
      name: string;
      age: number;
      school: string;
      grade: number;
      constructor(name: string, age: number, school: string, grade: number) {
        this.name = name;
        this.age = age;
        this.school = school;
        this.grade = grade;
      }
      learn(subject = '语文') {
        console.log(`${this.name}正在学习${subject}，真棒！`);
      }
      exam() {
        console.log(`${this.name} 正在考试，加油！`);
      }
    }

    class Undergraduate extends Student {
      major: string;
      credits: number;
      constructor(name: string, age: number, school: string, grade: number, major: string, credits: number) {
        super(name, age, school, grade);
        this.major = major;
        this.credits = credits;
      }
      intern(company: string) {
        console.log(`${this.name} 正在 ${company} 实习，好开心！`);
      }
    }

    const xiaomei = new Student('小玉', 9, '双叶小学', 3);
    xiaomei.learn('数学');
    xiaomei.exam();

    const maruko = new Undergraduate('小丸子', 9, '双叶小学', 3, '漫画创作', 0);
    maruko.learn('画画');
    maruko.intern('漫画工作室');

    // 回调函数示例
    console.log('小丸子说："我要开始写作业了！"');
    setTimeout(function () { 
      console.log('小丸子说："终于写完作业了！"'); 
    }, 1000);
    console.log('小丸子说："先画一会儿漫画吧~"');

    // DOM 操作
    if (h1Ref.current) {
      h1Ref.current.innerHTML = '小丸子的编程课堂（点我试试）';
      h1Ref.current.style.color = '#FF6B6B';
    }
    if (pRef.current) {
      pRef.current.onclick = function () {
        alert('小丸子说："谢谢你点击我！我们一起加油吧！" (◕‿◕✿)');
      };
    }
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
            小丸子的面向对象魔法课
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            今天小丸子要和大家一起学习类和继承！就像小丸子和小玉都是学生，但是各有各的特长一样~ (◕‿◕✿)
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
            <h2 className="text-xl font-semibold text-[#FF6B6B]">面向对象编程</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-[#FF6B6B] font-bold mb-2">类</h3>
              <p className="text-gray-600">
                就像小丸子和小玉都是学生，有名字、年龄、学校等特点！
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-[#FF6B6B] font-bold mb-2">继承</h3>
              <p className="text-gray-600">
                就像小丸子继承了妈妈的烹饪天赋，还自己开发了新技能！
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-[#FF6B6B] font-bold mb-2">方法</h3>
              <p className="text-gray-600">
                就像小丸子会学习、考试、画画，这些都是她会做的事情！
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 max-w-3xl mx-auto">
          <h1
            ref={h1Ref}
            style={{ cursor: 'pointer', transition: 'color 0.3s' }}
            onClick={() => alert('小丸子说："你好啊！让我们一起学习吧！" (◕‿◕✿)')}
            className="text-3xl font-bold mb-6 text-center hover:text-[#FF8585]"
          >
            JavaScript 面向对象编程
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
          <p 
            ref={pRef}
            className="text-gray-600 text-lg text-center bg-pink-50 p-4 rounded-lg cursor-pointer hover:bg-pink-100 transition-colors"
          >
            快按 F12 打开控制台，看看小丸子和小玉在做什么吧！（点我试试）
          </p>
        </section>
      </main>
    </div>
  );
} 