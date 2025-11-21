'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  Users,
  Wallet,
  Heart,
  Shield,
  Calendar,
  TrendingUp,
  Coins,
  LogIn,
  Download,
  Newspaper,
  Target,
  Building2,
  Phone,
  MapPin,
  MessageCircle
} from 'lucide-react';

export default function HomePage() {
  const [statusId, setStatusId] = useState('');
  const [memberId, setMemberId] = useState('');
  const [statusResult, setStatusResult] = useState<{ status: string; color: string } | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll-spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'stats', 'news', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Mock data for stats
  const stats = [
    { label: 'สมาชิกทั้งหมด', value: '12,345', icon: Users, color: 'bg-orange-500' },
    { label: 'เครดิตรวม', value: '6.8 ล้านบาท', icon: Wallet, color: 'bg-amber-500' },
    { label: 'ผู้เสียชีวิต', value: '142', icon: Heart, color: 'bg-slate-600' },
    { label: 'วงเงินคุ้มครอง', value: '50,000 บาท', icon: Shield, color: 'bg-orange-600' },
    { label: 'ค่าสมาชิก', value: '500 บาท', icon: Coins, color: 'bg-amber-600' },
    { label: 'เปิดทำการ', value: '18 ปี', icon: Calendar, color: 'bg-slate-700' },
    { label: 'เงินสงเคราะห์จ่าย', value: '7.1 ล้านบาท', icon: TrendingUp, color: 'bg-orange-500' },
    { label: 'กองทุนพัฒนา', value: '920,000 บาท', icon: Wallet, color: 'bg-amber-700' },
  ];

  // News items
  const newsItems = [
    { id: 1, title: 'งานวัฒนธรรมม้งประจำปี 2568', date: '1 ธ.ค. 2568', desc: 'ร่วมงานฉลองวัฒนธรรมและประเพณีชาวม้ง' },
    { id: 2, title: 'โครงการช่วยเหลือฉุกเฉิน - รับสมัครอาสา', date: '28 พ.ย. 2568', desc: 'เปิดรับสมัครอาสาสมัครช่วยเหลือชุมชน' },
    { id: 3, title: 'ประกาศทุนการศึกษาบุตรสมาชิก', date: '20 พ.ย. 2568', desc: 'มอบทุนการศึกษา 50 ทุน มูลค่า 5,000 บาท/คน' },
  ];

  const handleStatusCheck = () => {
    if (statusId.length === 13) {
      const statuses = [
        { status: 'ปกติ', color: 'text-green-600' },
        { status: 'ขาดส่ง', color: 'text-orange-600' },
        { status: 'เสียชีวิต', color: 'text-red-600' },
      ];
      setStatusResult(statuses[Math.floor(Math.random() * statuses.length)]);
    }
  };

  const navLinks = [
    { id: 'home', label: 'หน้าแรก' },
    { id: 'news', label: 'ข่าวสาร' },
    { id: 'about', label: 'เกี่ยวกับสมาคม' },
    { id: 'contact', label: 'ติดต่อเรา' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar with Scroll-spy */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">HFAT</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-800 leading-tight">
                  สมาคมฌาปนกิจสงเคราะห์
                </h1>
                <p className="text-sm text-orange-600 font-semibold">ชาวม้งแห่งประเทศไทย</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-semibold transition-all duration-200 ${activeSection === link.id
                      ? 'text-orange-600 border-b-2 border-orange-600'
                      : 'text-slate-600 hover:text-orange-600'
                    }`}
                >
                  {link.label}
                </button>
              ))}
              <Link
                href="/member"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <LogIn className="w-4 h-4" />
                <span>เข้าสู่ระบบสมาชิก</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              โปร่งใส ทันสมัย
              <br />
              <span className="text-amber-100">ช่วยเหลือกัน</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-orange-100">
              ระบบฌาปนกิจสงเคราะห์ยุคใหม่ เพื่อพี่น้องชาวม้งทั่วไทย
            </p>
            <button className="bg-white hover:bg-orange-50 text-orange-600 font-bold py-4 px-12 rounded-lg text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
              สมัครสมาชิก
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Check Status Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-orange-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Search className="w-6 h-6 mr-2 text-orange-500" />
              ตรวจสอบสถานะ
            </h2>
            <p className="text-slate-600 mb-6">กรอกเลขบัตรประชาชน 13 หลัก</p>
            <div className="space-y-4">
              <input
                type="text"
                value={statusId}
                onChange={(e) => setStatusId(e.target.value.replace(/\D/g, '').slice(0, 13))}
                placeholder="เลขบัตรประชาชน 13 หลัก"
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:outline-none text-lg"
                maxLength={13}
              />
              <button
                onClick={handleStatusCheck}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                ตรวจสอบสถานะ
              </button>
              {statusResult && (
                <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-orange-500">
                  <p className="text-slate-700">
                    สถานะ: <span className={`font-bold text-xl ${statusResult.color}`}>{statusResult.status}</span>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Login Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-orange-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <LogIn className="w-6 h-6 mr-2 text-orange-500" />
              เข้าสู่ระบบด่วน
            </h2>
            <p className="text-slate-600 mb-6">สำหรับสมาชิกที่ลงทะเบียนแล้ว</p>
            <div className="space-y-4">
              <input
                type="text"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
                placeholder="รหัสสมาชิก (เช่น M12345)"
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:outline-none text-lg"
              />
              <Link
                href="/member"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                เข้าสู่ระบบ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="bg-gradient-to-br from-orange-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">ภาพรวมสมาคม</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-orange-100 hover:border-orange-300 hover:scale-105 transform cursor-pointer"
                >
                  <div className={`${stat.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 shadow-md`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-slate-600 text-sm mb-2">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-slate-800 flex items-center">
            <Newspaper className="w-10 h-10 mr-4 text-orange-500" />
            ข่าวสาร
          </h2>
          <button className="text-orange-600 hover:text-orange-700 font-semibold text-lg">ดูทั้งหมด →</button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border-l-4 border-orange-500 hover:border-orange-600 cursor-pointer transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Newspaper className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-sm text-orange-600 font-semibold bg-orange-50 px-3 py-1 rounded-full">{news.date}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{news.title}</h3>
              <p className="text-slate-600 leading-relaxed">{news.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-br from-orange-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">เกี่ยวกับสมาคม</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-orange-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">วิสัยทัศน์</h3>
              <p className="text-slate-600 leading-relaxed">
                สร้างความช่วยเหลือที่โปร่งใสและยั่งยืนสำหรับชุมชนม้ง พัฒนาระบบที่ทันสมัยและเข้าถึงได้ง่าย
              </p>
            </div>

            {/* Structure */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-orange-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">โครงสร้างกรรมการ</h3>
              <ul className="text-slate-600 space-y-2 text-lg">
                <li>• ประธานสมาคม</li>
                <li>• เลขานุการ</li>
                <li>• เหรัญญิก</li>
                <li>• ตัวแทนจังหวัด</li>
              </ul>
            </div>

            {/* Downloads */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg p-8 text-white hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">เอกสารสำคัญ</h3>
              <p className="text-orange-100 mb-6">ดาวน์โหลดข้อบังคับและเอกสารต่างๆ</p>
              <button className="w-full bg-white hover:bg-orange-50 text-orange-600 font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>ดาวน์โหลด PDF</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Contact Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">HFAT</span>
                </div>
                <span className="text-xl font-bold">สมาคมม้งฯ</span>
              </div>
              <div className="space-y-4 text-slate-400">
                <p className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-1 text-orange-400" />
                  <span>123 ถนนสุเทพ ตำบลสุเทพ อำเภอเมือง จังหวัดเชียงใหม่ 50200</span>
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-orange-400" />
                  <span>053-123-4567</span>
                </p>
                <p className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-3 text-orange-400" />
                  <span>@hmongaid.official</span>
                </p>
              </div>
            </div>

            {/* Provincial Representatives */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-400">ตัวแทนจังหวัด</h3>
              <div className="grid grid-cols-2 gap-3 text-slate-400">
                <p>• เชียงใหม่</p>
                <p>• เชียงราย</p>
                <p>• ตาก</p>
                <p>• เพชรบูรณ์</p>
                <p>• น่าน</p>
                <p>• แพร่</p>
                <p>• ลำปาง</p>
                <p>• พะเยา</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-400">ลิงก์ด่วน</h3>
              <div className="space-y-3 text-slate-400">
                <button onClick={() => scrollToSection('home')} className="block hover:text-orange-400 transition">หน้าแรก</button>
                <button onClick={() => scrollToSection('news')} className="block hover:text-orange-400 transition">ข่าวสาร</button>
                <button onClick={() => scrollToSection('about')} className="block hover:text-orange-400 transition">เกี่ยวกับสมาคม</button>
                <Link href="/member" className="block hover:text-orange-400 transition">
                  เข้าสู่ระบบสมาชิก
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400 text-lg">© 2568 สมาคมฌาปนกิจสงเคราะห์ชาวม้งแห่งประเทศไทย สงวนลิขสิทธิ์</p>
            <Link href="/admin" className="text-slate-800 hover:text-slate-700 text-xs mt-2 inline-block">
              •
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
