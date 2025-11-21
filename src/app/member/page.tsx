'use client';

import Link from 'next/link';
import {
    AlertTriangle,
    User,
    Wallet,
    Users,
    FileText,
    AlertOctagon,
    HelpCircle,
    LogOut,
    Plus,
    CheckCircle,
    ArrowLeft,
    History
} from 'lucide-react';

export default function MemberDashboard() {
    // Mock member data
    const member = {
        id: 'M12345',
        name: 'สมชาย แซ่ลี',
        nameEn: 'Somchai Saelee',
        status: 'ปกติ',
        creditBalance: 1250,
        selfTopup: 800,
        referralCredit: 450,
    };

    // Mock family members
    const familyMembers = [
        { id: 1, name: 'มาลี แซ่ลี', relation: 'ภรรยา', parentCredit: 1250, status: 'ปกติ' },
        { id: 2, name: 'วีระ แซ่ลี', relation: 'บุตร', parentCredit: 1250, status: 'ปกติ' },
        { id: 3, name: 'นภา แซ่ลี', relation: 'บุตร', parentCredit: 180, status: 'เสี่ยง' },
    ];

    // Check if any family member has low credit
    const hasLowCredit = familyMembers.some(member => member.parentCredit < 240);
    const lowCreditMembers = familyMembers.filter(member => member.parentCredit < 240);

    // Mock menu items
    const menuItems = [
        { icon: FileText, label: 'ดาวน์โหลดเอกสาร', color: 'bg-orange-500' },
        { icon: AlertOctagon, label: 'แจ้งเสียชีวิต', color: 'bg-red-500' },
        { icon: HelpCircle, label: 'FAQ', color: 'bg-amber-500' },
        { icon: LogOut, label: 'ออกจากระบบ', color: 'bg-slate-500' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-6 shadow-lg">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex items-center space-x-4 mb-2">
                        <Link
                            href="/"
                            className="p-2 hover:bg-white/20 rounded-lg transition-all"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <h1 className="text-2xl font-bold">ระบบสมาชิก</h1>
                    </div>
                    <p className="text-orange-100 ml-14">ยินดีต้อนรับ, {member.name}</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
                {/* Profile Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-orange-100">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                                <User className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800">{member.name}</h2>
                                <p className="text-slate-500">{member.nameEn}</p>
                                <p className="text-slate-500 text-sm">รหัสสมาชิก: {member.id}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full border-2 border-green-200">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="text-green-700 font-semibold">{member.status}</span>
                        </div>
                    </div>
                </div>

                {/* Credit Wallet */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                            <Wallet className="w-6 h-6 text-amber-200" />
                            <h3 className="text-xl font-bold">กระเป๋าเครดิต</h3>
                        </div>
                    </div>

                    <div className="mb-6">
                        <p className="text-orange-100 text-sm mb-2">ยอดคงเหลือ</p>
                        <p className="text-5xl font-bold text-white">
                            {member.creditBalance.toLocaleString()} <span className="text-2xl">บาท</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <p className="text-orange-100 text-sm mb-1">เติมเอง</p>
                            <p className="text-2xl font-bold">{member.selfTopup} บาท</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <p className="text-orange-100 text-sm mb-1">จากการแนะนำ</p>
                            <p className="text-2xl font-bold text-amber-200">{member.referralCredit} บาท</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="bg-white hover:bg-orange-50 text-orange-600 font-semibold px-4 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                            <Plus className="w-5 h-5" />
                            <span>เติมเงิน</span>
                        </button>
                        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-4 py-3 rounded-lg transition-all duration-200 border border-white/30 flex items-center justify-center space-x-2">
                            <History className="w-5 h-5" />
                            <span>ประวัติ</span>
                        </button>
                    </div>
                </div>

                {/* Low Credit Warning (if applicable) */}
                {hasLowCredit && (
                    <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 shadow-lg animate-pulse">
                        <div className="flex items-start space-x-3">
                            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-red-800 mb-3">⚠️ เครดิตต่ำกว่าเกณฑ์</h3>
                                <p className="text-red-700 mb-4 text-lg">
                                    พบสมาชิกในครัวเรือนที่มีเครดิตต่ำกว่า 240 บาท กรุณาเติมเงินทันทีเพื่อรักษาสถานะการคุ้มครอง
                                </p>
                                <div className="bg-red-100 rounded-lg p-4 border-l-4 border-red-500">
                                    <p className="text-red-800 font-semibold mb-2">รายชื่อที่ต้องเติมเงิน:</p>
                                    {lowCreditMembers.map((member) => (
                                        <p key={member.id} className="text-red-700">
                                            • {member.name} ({member.relation}) - เหลือ {member.parentCredit} บาท
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Family List */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-orange-100">
                    <div className="flex items-center space-x-2 mb-4">
                        <Users className="w-6 h-6 text-orange-500" />
                        <h3 className="text-xl font-bold text-slate-800">สมาชิกในครัวเรือน</h3>
                    </div>
                    <div className="space-y-3">
                        {familyMembers.map((familyMember) => {
                            const isAtRisk = familyMember.parentCredit < 240;
                            return (
                                <div
                                    key={familyMember.id}
                                    className={`p-4 rounded-xl border-2 transition-all ${isAtRisk
                                            ? 'bg-red-50 border-red-300 shadow-md'
                                            : 'bg-orange-50 border-orange-200 hover:border-orange-300'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <p className="font-semibold text-slate-800 text-lg">{familyMember.name}</p>
                                            <p className="text-sm text-slate-500">{familyMember.relation}</p>
                                        </div>
                                        <div className="text-right">
                                            {isAtRisk ? (
                                                <div className="flex items-center space-x-2 text-red-600">
                                                    <AlertTriangle className="w-6 h-6" />
                                                    <div>
                                                        <p className="font-bold text-base">เครดิตต่ำ!</p>
                                                        <p className="text-sm">{familyMember.parentCredit} บาท</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="text-green-600">
                                                    <p className="font-semibold text-base">{familyMember.status}</p>
                                                    <p className="text-sm text-slate-500">{familyMember.parentCredit} บาท</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Menu Grid */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-orange-100">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">เมนูบริการ</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {menuItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={index}
                                    className="flex flex-col items-center justify-center p-6 bg-orange-50 hover:bg-orange-100 rounded-xl border-2 border-orange-200 hover:border-orange-300 transition-all hover:shadow-lg transform hover:scale-105"
                                >
                                    <div className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center mb-3 shadow-md`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700 text-center">{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
