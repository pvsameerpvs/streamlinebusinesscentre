"use client";

import React from "react";
import Image from "next/image";
import { 
  BookOpen, 
  Newspaper, 
  TrendingUp, 
  Lightbulb, 
  ArrowUpRight,
  Share2,
  Bookmark
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const articles = [
  {
    category: "Insights",
    title: "The Future of Hybrid Work in 2026",
    excerpt: "How global companies are adapting to the new world of flexible work and digital transformation.",
    image: "/office-1.jpeg",
    readTime: "8 min read",
    date: "Jan 15, 2026"
  },
  {
    category: "Leadership",
    title: "Building Resilient Teams in Virtual Environments",
    excerpt: "Strategies for maintaining culture and productivity across distributed office networks.",
    image: "/office-2.jpeg",
    readTime: "5 min read",
    date: "Jan 12, 2026"
  },
  {
    category: "Innovation",
    title: "Eco-Friendly Workspaces: The New Standard",
    excerpt: "Why sustainability is becoming the top priority for modern business hubs and corporate real estate.",
    image: "/office-5.jpeg",
    readTime: "6 min read",
    date: "Jan 10, 2026"
  }
];

export default function MagazinePage() {
  return (
    <div className="bg-[#fbf7f2] min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="container px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-6 text-[#d4a574] font-bold uppercase tracking-widest text-xs">
            <Newspaper className="w-4 h-4" />
            <span>Digital Journal</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#4b3624] tracking-tight mb-6">
            Streamline <span className="text-[#d4a574]">Magazine</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Stay ahead with the latest trends in workspace innovation, business strategy, and global market insights.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container px-4">
          <div className="relative group overflow-hidden rounded-[3rem] bg-white shadow-2xl flex flex-col lg:flex-row">
            <div className="relative w-full lg:w-3/5 h-[400px] lg:h-auto overflow-hidden">
              <Image 
                src="/global_workspace_hero.png" 
                alt="Featured" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
            </div>
            <div className="w-full lg:w-2/5 p-12 md:p-16 flex flex-col justify-center">
              <div className="text-[#d4a574] font-bold text-xs uppercase tracking-widest mb-4">Featured Story</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4b3624] mb-6 leading-tight hover:text-[#d4a574] transition-colors cursor-pointer">
                Global Business Trends: Why Dubai is Still the Ultimate Hub
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                An in-depth look at the infrastructure and economic policies driving the next wave of corporate migration to the Middle East.
              </p>
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fbf7f2] flex items-center justify-center text-[#d4a574]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-[#4b3624]">12 min read</span>
                </div>
                <Link href="/contact">
                  <Button variant="ghost" className="text-[#d4a574] font-bold group">
                    Read More <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#4b3624] mb-2">Latest Insights</h2>
              <p className="text-gray-500">The most recent updates from our editorial team.</p>
            </div>
            <Link href="/magazine">
              <Button variant="outline" className="rounded-full border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white">
                View All categories
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {articles.map((article, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-lg">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-[#d4a574] uppercase tracking-wider">
                    {article.category}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-xs text-gray-400 font-medium flex items-center justify-between">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-2"><BookOpen className="w-3 h-3" /> {article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#4b3624] group-hover:text-[#d4a574] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <button className="text-gray-400 hover:text-[#d4a574] transition-colors"><Bookmark className="w-4 h-4" /></button>
                    <button className="text-gray-400 hover:text-[#d4a574] transition-colors"><Share2 className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24">
        <div className="container px-4">
          <div className="bg-[#4b3624] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4a574]/5 to-transparent animate-pulse" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <div className="w-16 h-16 bg-[#d4a574] rounded-2xl flex items-center justify-center mx-auto shadow-2xl rotate-3">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Never miss an insight.</h2>
              <p className="text-gray-300">Join our newsletter and get the best of Streamline Magazine delivered to your inbox weekly.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="flex-1 h-14 bg-white/10 border border-white/20 rounded-full px-6 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
                />
                <Button className="h-14 px-8 bg-[#d4a574] hover:bg-[#b08963] text-white font-bold rounded-full transition-all hover:scale-105">
                  Subscribe
                </Button>
              </div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">Zero spam. unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
