'use client';

import { useState } from 'react';
import {
    LayoutDashboard,
    Users,
    DollarSign,
    AlertCircle,
    TrendingUp,
    UserX,
    Wallet,
    Clock,
    CheckCircle,
    XCircle,
    Edit,
    Trash2
} from 'lucide-react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function AdminDashboard() {
    // State for tab switching
    const [activeTab, setActiveTab] = useState('dashboard');

    // Mock data for member status donut chart
    const memberStatusData = [
        { name: 'ปกติ', value: 11500, color: '#10b981' },
        { name: 'ขาดส่ง', value: 845, color: '#f59e0b' },
    ];

    // Mock data for financial line chart
    const financialData = [
        { month: 'มิ.ย.', income: 520000, expense: 210000 },
        { month: 'ก.ค.', income: 480000, expense: 280000 },
        { month: 'ส.ค.', income: 550000, expense: 230000 },
        { month: 'ก.ย.', income: 620000, expense: 320000 },
        { month: 'ต.ค.', income: 580000, expense: 260000 },
        { month: 'พ.ย.', income: 650000, expense: 310000 },
    ];

    // Mock data for detailed financial bar chart
    const detailedFinancialData = [
        { month: 'มิ.ย.', รายรับ: 520000, รายจ่าย: 210000, กำไร: 310000 },
        { month: 'ก.ค.', รายรับ: 480000, รายจ่าย: 280000, กำไร: 200000 },
        { month: 'ส.ค.', รายรับ: 550000, รายจ่าย: 230000, กำไร: 320000 },
        { month: 'ก.ย.', รายรับ: 620000, รายจ่าย: 320000, กำไร: 300000 },
        { month: 'ต.ค.', รายรับ: 580000, รายจ่าย: 260000, กำไร: 320000 },
        { month: 'พ.ย.', รายรับ: 650000, รายจ่าย: 310000, กำไร: 340000 },
    ];

    // Mock members data
    const membersData = [
        { id: 'M12345', name: 'สมชาย แซ่ลี', status: 'ปกติ', credit: 1250, phone: '081-234-5678' },
        { id: 'M12346', name: 'มาลี แซ่เฮ้อ', status: 'ปกติ', credit: 2400, phone: '082-345-6789' },
        { id: 'M12347', name: 'วีระ แซ่ท้าว', status: 'ขาดส่ง', credit: 180, phone: '083-456-7890' },
        { id: 'M12348', name: 'นภา แซ่วาง', status: 'ปกติ', credit: 3200, phone: '084-567-8901' },
        { id: 'M12349', name: 'ชื่อ แซ่เซี่ยง', status: 'ปกติ', credit: 1800, phone: '085-678-9012' },
    ];

    // Mock death claims data
    const deathClaimsData = [
        { id: 'DC001', deceased: 'ป๋า แซ่ลี', member: 'M11223', date: '1 ธ.ค. 2568', amount: 50000, status: 'รออนุมัติ' },
        { id: 'DC002', deceased: 'เยอ แซ่เฮ้อ', member: 'M11224', date: '28 พ.ย. 2568', amount: 50000, status: 'รออนุมัติ' },
        { id: 'DC003', deceased: 'คำ แซ่ท้าว', member: 'M11225', date: '25 พ.ย. 2568', amount: 50000, status: 'รออนุมัติ' },
    ];

    // Mock recent transactions
    const recentTransactions = [
        { id: 1, type: 'ตัดเครดิต', member: 'M12345 - สมชาย แซ่ลี', amount: -240, status: 'สำเร็จ', time: '14:30' },
        { id: 2, type: 'เติมเงิน', member: 'M67890 - มาลี แซ่เฮ้อ', amount: 1000, status: 'สำเร็จ', time: '14:15' },
        { id: 3, type: 'เคลมศพ', member: 'M54321 - ชื่อ แซ่เซี่ยง', amount: -50000, status: 'รออนุมัติ', time: '13:45' },
        { id: 4, type: 'ตัดเครดิต', member: 'M11223 - ป๋า แซ่ท้าว', amount: -240, status: 'สำเร็จ', time: '13:30' },
        { id: 5, type: 'เติมเงิน', member: 'M99887 - เยอ แซ่วาง', amount: 500, status: 'สำเร็จ', time: '13:00' },
    ];

    // Mock audit trail
    const auditTrail = [
        { id: 1, action: 'ระบบตัดเงินอัตโนมัติสมาชิก M442', user: 'ระบบอัตโนมัติ', time: '5 นาทีที่แล้ว', type: 'auto' },
        { id: 2, action: 'อนุมัติสมาชิกใหม่ M12346', user: 'แอดมิน สมศักดิ์', time: '15 นาทีที่แล้ว', type: 'approval' },
        { id: 3, action: 'สมาชิกใหม่ลงทะเบียน: M12347', user: 'ระบบอัตโนมัติ', time: '45 นาทีที่แล้ว', type: 'registration' },
        { id: 4, action: 'ยืนยันการเติมเครดิต M67890', user: 'แอดมิน วิไล', time: '1 ชั่วโมงที่แล้ว', type: 'verification' },
        { id: 5, action: 'ส่งแจ้งเตือนเครดิตต่ำ M54322', user: 'ระบบอัตโนมัติ', time: '2 ชั่วโมงที่แล้ว', type: 'notification' },
        { id: 6, action: 'สร้างรายงานการเงินประจำเดือน', user: 'ระบบอัตโนมัติ', time: '4 ชั่วโมงที่แล้ว', type: 'report' },
        { id: 7, action: 'อัพเดทข้อมูลสมาชิก M11223', user: 'แอดมิน สมศักดิ์', time: '5 ชั่วโมงที่แล้ว', type: 'update' },
    ];

    const menuItems = [
        { id: 'dashboard', icon: LayoutDashboard, label: 'แดชบอร์ด' },
        { id: 'members', icon: Users, label: 'จัดการสมาชิก' },
        { id: 'financials', icon: DollarSign, label: 'การเงิน' },
        { id: 'claims', icon: AlertCircle, label: 'แจ้งเสียชีวิต' },
    ];

    // Render content based on active tab
    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <>
                        {/* Stats Cards */}
                        <div className="grid grid-cols-4 gap-6 mb-8">
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                    <Users className="w-8 h-8" />
                                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                                        +3.2%
                                    </div>
                                </div>
                                <p className="text-orange-100 text-sm mb-1">สมาชิกทั้งหมด</p>
                                <p className="text-4xl font-bold">12,345</p>
                            </div>

                            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                    <UserX className="w-8 h-8" />
                                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                                        ปีนี้
                                    </div>
                                </div>
                                <p className="text-red-100 text-sm mb-1">ผู้เสียชีวิต</p>
                                <p className="text-4xl font-bold">142</p>
                            </div>

                            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                    <Wallet className="w-8 h-8" />
                                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                                        +9.1%
                                    </div>
                                </div>
                                <p className="text-teal-100 text-sm mb-1">เงินกองทุน</p>
                                <p className="text-4xl font-bold">6.8 ล้าน</p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                    <AlertCircle className="w-8 h-8" />
                                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                                        ดำเนินการ
                                    </div>
                                </div>
                                <p className="text-purple-100 text-sm mb-1">รออนุมัติ</p>
                                <p className="text-4xl font-bold">18</p>
                            </div>
                        </div>

                        {/* Financial Chart */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-2 border-orange-100">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800">ภาพรวมการเงิน</h3>
                                    <p className="text-slate-500 text-sm">รายรับรายจ่าย (6 เดือนล่าสุด)</p>
                                </div>
                                <TrendingUp className="w-6 h-6 text-green-600" />
                            </div>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={financialData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                    <XAxis dataKey="month" stroke="#64748b" />
                                    <YAxis stroke="#64748b" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#fff',
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                        }}
                                        formatter={(value: number) => `${value.toLocaleString()} บาท`}
                                    />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="income"
                                        stroke="#10b981"
                                        strokeWidth={3}
                                        dot={{ fill: '#10b981', r: 5 }}
                                        activeDot={{ r: 7 }}
                                        name="รายรับ"
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="expense"
                                        stroke="#ef4444"
                                        strokeWidth={3}
                                        dot={{ fill: '#ef4444', r: 5 }}
                                        activeDot={{ r: 7 }}
                                        name="รายจ่าย"
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Recent Transactions Table */}
                        <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-100 overflow-hidden">
                            <div className="p-6 border-b border-orange-100 bg-orange-50">
                                <h3 className="text-xl font-bold text-slate-800">รายการล่าสุด</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ประเภท</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">สมาชิก</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">จำนวนเงิน</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เวลา</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        {recentTransactions.map((transaction) => (
                                            <tr key={transaction.id} className="hover:bg-orange-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="text-sm font-medium text-slate-800">{transaction.type}</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="text-sm text-slate-600">{transaction.member}</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`text-sm font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                        {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString()} บาท
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${transaction.status === 'สำเร็จ'
                                                            ? 'bg-green-100 text-green-700'
                                                            : 'bg-yellow-100 text-yellow-700'
                                                        }`}>
                                                        {transaction.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                                    {transaction.time}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                );

            case 'members':
                return (
                    <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-100 overflow-hidden">
                        <div className="p-6 border-b border-orange-100 bg-orange-50">
                            <h3 className="text-2xl font-bold text-slate-800">จัดการสมาชิก</h3>
                            <p className="text-slate-600 mt-1">รายชื่อสมาชิกทั้งหมดในระบบ</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">รหัสสมาชิก</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">ชื่อ-นามสกุล</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">สถานะ</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">เครดิต</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">เบอร์โทร</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">จัดการ</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {membersData.map((member) => (
                                        <tr key={member.id} className="hover:bg-orange-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <span className="text-sm font-semibold text-orange-600">{member.id}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-sm font-medium text-slate-800">{member.name}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${member.status === 'ปกติ'
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-orange-100 text-orange-700'
                                                    }`}>
                                                    {member.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`text-sm font-bold ${member.credit < 240 ? 'text-red-600' : 'text-green-600'}`}>
                                                    {member.credit} บาท
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-sm text-slate-600">{member.phone}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex space-x-2">
                                                    <button className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
                                                        <Edit className="w-4 h-4 text-blue-600" />
                                                    </button>
                                                    <button className="p-2 bg-red-100 hover:bg-red-200 rounded-lg transition-colors">
                                                        <Trash2 className="w-4 h-4 text-red-600" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );

            case 'financials':
                return (
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-orange-100">
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">รายงานการเงินโดยละเอียด</h3>
                            <ResponsiveContainer width="100%" height={400}>
                                <BarChart data={detailedFinancialData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                    <XAxis dataKey="month" stroke="#64748b" />
                                    <YAxis stroke="#64748b" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#fff',
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                        }}
                                        formatter={(value: number) => `${value.toLocaleString()} บาท`}
                                    />
                                    <Legend />
                                    <Bar dataKey="รายรับ" fill="#10b981" />
                                    <Bar dataKey="รายจ่าย" fill="#ef4444" />
                                    <Bar dataKey="กำไร" fill="#f97316" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
                                <p className="text-green-100 mb-2">รายรับรวม (6 เดือน)</p>
                                <p className="text-4xl font-bold">3.4 ล้าน</p>
                            </div>
                            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-lg">
                                <p className="text-red-100 mb-2">รายจ่ายรวม (6 เดือน)</p>
                                <p className="text-4xl font-bold">1.6 ล้าน</p>
                            </div>
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
                                <p className="text-orange-100 mb-2">กำไรสุทธิ (6 เดือน)</p>
                                <p className="text-4xl font-bold">1.8 ล้าน</p>
                            </div>
                        </div>
                    </div>
                );

            case 'claims':
                return (
                    <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-100 overflow-hidden">
                        <div className="p-6 border-b border-orange-100 bg-red-50">
                            <h3 className="text-2xl font-bold text-slate-800">รายการแจ้งเสียชีวิตรออนุมัติ</h3>
                            <p className="text-slate-600 mt-1">ตรวจสอบและอนุมัติการเบิกจ่ายเงินสงเคราะห์</p>
                        </div>
                        <div className="p-6 space-y-4">
                            {deathClaimsData.map((claim) => (
                                <div key={claim.id} className="border-2 border-orange-200 rounded-xl p-6 hover:border-orange-400 transition-all bg-orange-50">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-1">เคลม: {claim.id}</h4>
                                            <p className="text-slate-600">ผู้เสียชีวิต: <span className="font-semibold">{claim.deceased}</span></p>
                                            <p className="text-slate-600">สมาชิก: <span className="font-semibold">{claim.member}</span></p>
                                            <p className="text-slate-600">วันที่แจ้ง: <span className="font-semibold">{claim.date}</span></p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-slate-600 mb-1">จำนวนเงิน</p>
                                            <p className="text-3xl font-bold text-orange-600">{claim.amount.toLocaleString()} บาท</p>
                                            <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                                                {claim.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-3">
                                        <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center space-x-2">
                                            <CheckCircle className="w-5 h-5" />
                                            <span>อนุมัติ</span>
                                        </button>
                                        <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center space-x-2">
                                            <XCircle className="w-5 h-5" />
                                            <span>ปฏิเสธ</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="flex h-screen bg-[#F4F7F6] overflow-hidden">
            {/* Left Sidebar - Dark */}
            <div className="w-64 bg-[#1e293b] text-white flex flex-col">
                {/* Logo */}
                <div className="p-6 border-b border-slate-600">
                    <div className="flex items-center space-x-2 mb-2">
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-sm">HFAT</span>
                        </div>
                        <span className="text-lg font-bold text-orange-400">Admin</span>
                    </div>
                    <p className="text-sm text-slate-400">ระบบจัดการสมาคม</p>
                </div>

                {/* Menu with Tab Switching */}
                <nav className="flex-1 py-6">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center space-x-3 px-6 py-3 transition-all ${activeTab === item.id
                                        ? 'bg-orange-500 border-l-4 border-amber-400 text-white'
                                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="font-medium">{item.label}</span>
                            </button>
                        );
                    })}
                </nav>

                {/* Bottom Widget - Donut Chart */}
                <div className="p-6 border-t border-slate-600">
                    <h3 className="text-sm font-semibold text-slate-400 mb-4">สถานะสมาชิก</h3>
                    <div className="bg-slate-700/50 rounded-xl p-4">
                        <ResponsiveContainer width="100%" height={150}>
                            <PieChart>
                                <Pie
                                    data={memberStatusData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={40}
                                    outerRadius={60}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {memberStatusData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="mt-3 space-y-2">
                            {memberStatusData.map((item, index) => (
                                <div key={index} className="flex items-center justify-between text-sm">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                        <span className="text-slate-300">{item.name}</span>
                                    </div>
                                    <span className="text-white font-semibold">{item.value.toLocaleString()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Center Column - Dynamic Content */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-slate-800">
                            {menuItems.find(item => item.id === activeTab)?.label}
                        </h2>
                        <p className="text-slate-500 mt-1">ข้อมูลและสถิติแบบเรียลไทม์</p>
                    </div>

                    {/* Dynamic Content */}
                    {renderContent()}
                </div>
            </div>

            {/* Right Sidebar - Audit Trail (Always Visible) */}
            <div className="w-80 bg-white border-l-2 border-orange-100 overflow-y-auto">
                <div className="p-6 border-b-2 border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50">
                    <h3 className="text-lg font-bold text-slate-800 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-orange-500" />
                        ประวัติการใช้งาน
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">Live Audit Trail</p>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        {auditTrail.map((item, index) => (
                            <div key={item.id} className="relative">
                                {index !== auditTrail.length - 1 && (
                                    <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-orange-200"></div>
                                )}
                                <div className="flex space-x-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${item.type === 'auto' ? 'bg-blue-100' :
                                            item.type === 'approval' ? 'bg-green-100' :
                                                item.type === 'registration' ? 'bg-purple-100' :
                                                    item.type === 'verification' ? 'bg-teal-100' :
                                                        item.type === 'notification' ? 'bg-orange-100' :
                                                            item.type === 'update' ? 'bg-amber-100' :
                                                                'bg-slate-100'
                                        }`}>
                                        <div className={`w-3 h-3 rounded-full ${item.type === 'auto' ? 'bg-blue-500' :
                                                item.type === 'approval' ? 'bg-green-500' :
                                                    item.type === 'registration' ? 'bg-purple-500' :
                                                        item.type === 'verification' ? 'bg-teal-500' :
                                                            item.type === 'notification' ? 'bg-orange-500' :
                                                                item.type === 'update' ? 'bg-amber-500' :
                                                                    'bg-slate-500'
                                            }`}></div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-slate-800 font-medium">{item.action}</p>
                                        <p className="text-xs text-slate-500 mt-1">{item.user}</p>
                                        <p className="text-xs text-orange-600 mt-1 font-semibold">{item.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
