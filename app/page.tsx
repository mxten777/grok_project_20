'use client';

import { useState, useEffect, useMemo, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Wrench, BarChart3, Users, TrendingUp, Shield, Zap, Award } from 'lucide-react';

// 동적 import로 코드 스플리팅 적용
const PerformanceChart = lazy(() => import('../components/PerformanceChart'));
const ContactForm = lazy(() => import('../components/ContactForm'));

export default function Home() {
  // const t = useTranslations();
  const [counters, setCounters] = useState({ factories: 0, uptime: 0, efficiency: 0 });

  // 차트 데이터 - useMemo로 메모이제이션
  const chartData = useMemo(() => [
    { name: '1월', 생산량: 4000, 효율성: 2400 },
    { name: '2월', 생산량: 3000, 효율성: 1398 },
    { name: '3월', 생산량: 2000, 효율성: 9800 },
    { name: '4월', 생산량: 2780, 효율성: 3908 },
    { name: '5월', 생산량: 1890, 효율성: 4800 },
    { name: '6월', 생산량: 2390, 효율성: 3800 },
  ], []);

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



  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-blue-900">
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
              만송시스템 스마트 팩토리
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              공장 모니터링 솔루션으로 생산성을 높이고 스마트 팩토리를 실현하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                데모 신청
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                자세히 보기
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
            우리의 서비스
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
                <li className="flex items-center"><Monitor className="w-4 h-4 mr-2 text-blue-600" />실시간 모니터링</li>
                <li className="flex items-center"><Wrench className="w-4 h-4 mr-2 text-green-600" />예측 유지보수</li>
                <li className="flex items-center"><Shield className="w-4 h-4 mr-2 text-yellow-600" />데이터 보안</li>
                <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-red-600" />빠른 대응</li>
              </ul>
            </motion.div>
            {/* 인터랙티브 데모 대시보드 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl"
            >
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                생산성 차트
              </h4>
              <div className="h-[200px]">
                <Suspense fallback={<div className="h-full flex items-center justify-center text-gray-500">차트 로딩 중...</div>}>
                  <PerformanceChart data={chartData} />
                </Suspense>
              </div>
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
                모니터링 공장 수
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
                시스템 가동률
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
                생산성 향상률
              </p>
            </div>
          </motion.div>
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              서비스 문의
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
            고객 성공 사례
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "자동차 부품 제조사",
                desc: "생산 라인 모니터링으로 불량률 30% 감소",
                image: "/case1.jpg"
              },
              {
                title: "전자제품 생산기업",
                desc: "예측 유지보수로 다운타임 50% 단축",
                image: "/case2.jpg"
              },
              {
                title: "식품 가공회사",
                desc: "품질 관리 자동화로 효율성 25% 향상",
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
            최신 소식 받기
          </motion.h2>
          <p className="text-blue-100 mb-8">
            스마트 팩토리 트렌드와 업데이트 소식을 이메일로 받아보세요.
          </p>
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              구독하기
            </button>
          </motion.form>
        </div>
      </section>

      {/* 문의하기 */}
      <Suspense fallback={<div className="py-20 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">폼 로딩 중...</div>}>
        <ContactForm 
          translations={{
            contact: "문의하기",
            name: "이름",
            email: "이메일",
            message: "문의 내용",
            send: "보내기"
          }}
        />
      </Suspense>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">만송시스템(주)</h3>
              <p className="text-gray-400 text-sm">
                스마트 팩토리 솔루션 전문 기업
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>공장 모니터링</li>
                <li>예측 유지보수</li>
                <li>데이터 분석</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">회사 소개</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>회사 소개</li>
                <li>연락처</li>
                <li>채용</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">문의</h4>
              <p className="text-gray-400 text-sm mb-4">
                궁금한 점이 있으시면 언제든 연락주세요.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                문의하기
              </motion.button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 만송시스템(주). 모든 권리 보유.
          </div>
        </div>
      </footer>
    </div>
  );
}
