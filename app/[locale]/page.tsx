'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Monitor, Wrench, BarChart3, Users, TrendingUp, Shield, Zap, Award } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export default function Home() {
  const t = useTranslations();
  const [counters, setCounters] = useState({ factories: 0, uptime: 0, efficiency: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 차트 데이터
  const chartData = [
    { name: '1월', 생산량: 4000, 효율성: 2400 },
    { name: '2월', 생산량: 3000, 효율성: 1398 },
    { name: '3월', 생산량: 2000, 효율성: 9800 },
    { name: '4월', 생산량: 2780, 효율성: 3908 },
    { name: '5월', 생산량: 1890, 효율성: 4800 },
    { name: '6월', 생산량: 2390, 효율성: 3800 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        factories: prev.factories < 150 ? prev.factories + 1 : 150,
        uptime: prev.uptime < 99.9 ? prev.uptime + 0.1 : 99.9,
        efficiency: prev.efficiency < 25 ? prev.efficiency + 0.5 : 25,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formData,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      alert('문의가 성공적으로 전송되었습니다!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('문의 전송에 실패했습니다. 다시 시도해주세요.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-blue-900">
      <LanguageSwitcher />
      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <Monitor className="inline-block w-12 h-12 mr-4 text-blue-600 dark:text-blue-400" />
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {t('hero.cta1')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {t('hero.cta2')}
              </motion.button>
            </div>
          </motion.div>
          {/* 히어로 이미지: 공장 대시보드 일러스트 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200">실시간 모니터링</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-300">생산 라인 상태를 실시간으로 확인</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 dark:text-green-200">예측 유지보수</h3>
                  <p className="text-sm text-green-600 dark:text-green-300">고장 예측으로 다운타임 최소화</p>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">데이터 분석</h3>
                  <p className="text-sm text-yellow-600 dark:text-yellow-300">생산 효율성 향상을 위한 인사이트</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 서비스/솔루션 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            {t('services.title')}
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">통합 모니터링 플랫폼</h3>
              <p className="text-gray-600 dark:text-gray-300">
                모든 생산 설비를 하나의 대시보드에서 모니터링하고,
                실시간 데이터를 기반으로 최적의 운영 결정을 내릴 수 있습니다.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center"><Monitor className="w-4 h-4 mr-2 text-blue-600" />{t('services.platform.features.0')}</li>
                <li className="flex items-center"><Wrench className="w-4 h-4 mr-2 text-green-600" />{t('services.platform.features.1')}</li>
                <li className="flex items-center"><Shield className="w-4 h-4 mr-2 text-yellow-600" />{t('services.platform.features.2')}</li>
                <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-red-600" />{t('services.platform.features.3')}</li>
              </ul>
            </motion.div>
            {/* 인터랙티브 데모 대시보드 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl"
            >
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                {t('services.chart')}
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="생산량" fill="#3b82f6" />
                  <Bar dataKey="효율성" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
          {/* 카운터 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
          >
            <div>
              <motion.h3
                className="text-4xl font-bold text-blue-600 dark:text-blue-400"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {counters.factories}+
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center">
                <Users className="w-4 h-4 mr-1" />
                {t('counters.factories')}
              </p>
            </div>
            <div>
              <motion.h3
                className="text-4xl font-bold text-green-600 dark:text-green-400"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              >
                {counters.uptime.toFixed(1)}%
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                {t('counters.uptime')}
              </p>
            </div>
            <div>
              <motion.h3
                className="text-4xl font-bold text-yellow-600 dark:text-yellow-400"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
              >
                {counters.efficiency}%
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center">
                <Award className="w-4 h-4 mr-1" />
                {t('counters.efficiency')}
              </p>
            </div>
          </motion.div>
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {t('services.cta')}
            </motion.button>
          </div>
        </div>
      </section>

      {/* 고객 사례 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            {t('cases.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('cases.case1.title'),
                desc: t('cases.case1.desc'),
                image: "/case1.jpg"
              },
              {
                title: t('cases.case2.title'),
                desc: t('cases.case2.desc'),
                image: "/case2.jpg"
              },
              {
                title: t('cases.case3.title'),
                desc: t('cases.case3.desc'),
                image: "/case3.jpg"
              }
            ].map((case_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer"
              >
                <div className="h-48 bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">{index + 1}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-600" />
                    {case_.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{case_.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 뉴스레터 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-4"
          >
            {t('newsletter.title')}
          </motion.h2>
          <p className="text-blue-100 mb-8">
            {t('newsletter.desc')}
          </p>
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('newsletter.cta')}
            </button>
          </motion.form>
        </div>
      </section>

      {/* 문의 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.name')}</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.email')}</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.message')}</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              {isSubmitting ? t('contact.sending') : t('contact.cta')}
            </button>
          </motion.form>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">{t('footer.company')}</h3>
              <p className="text-gray-400 text-sm">
                {t('footer.desc')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>공장 모니터링</li>
                <li>예측 유지보수</li>
                <li>데이터 분석</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.about')}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>회사 소개</li>
                <li>연락처</li>
                <li>채용</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
              <p className="text-gray-400 text-sm mb-4">
                궁금한 점이 있으시면 언제든 연락주세요.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                {t('footer.cta')}
              </motion.button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  );
}
