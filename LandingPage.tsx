import React, { useEffect, useRef } from "react";
import {
  ArrowRight,
  ShieldCheck,
  BarChart3,
  LineChart,
  Users,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    element.classList.add("opacity-0", "translate-y-4");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("opacity-0", "translate-y-4");
          element.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
};

const LandingPage: React.FC = () => {
  const heroImageRef = useScrollReveal();
  const caseImageRef = useScrollReveal();
  const guaranteeImageRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Градиентные подсветки фона */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#d4af37]/5 blur-3xl" />
      </div>

      <header className="border-b border-white/5 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#d4af37] to-amber-400 text-black shadow-lg shadow-[#d4af37]/40">
              <span className="text-xs font-black tracking-tight">SD</span>
            </div>
            <div>
              <div
                className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d4af37]"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Савелий Докучаев
              </div>
              <p className="text-xs text-zinc-400">
                Частный авитолог для предпринимателей
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex gap-4 text-xs text-zinc-300">
              <a href="#services" className="transition hover:text-white">
                Услуги
              </a>
              <a href="#master" className="transition hover:text-white">
                Команда
              </a>
              <a href="#testimonials" className="transition hover:text-white">
                Кейсы
              </a>
              <a href="#booking" className="transition hover:text-white">
                Контакты
              </a>
            </nav>
            <a
              href="tel:+79615634471"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-100 shadow-sm transition hover:border-[#d4af37]/60 hover:bg-white/10"
            >
              <PhoneCall className="h-3.5 w-3.5 text-[#d4af37]" />
              <span>+7 (961) 563-44-71</span>
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        {/* 1. HERO */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[#d4af37]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Финансовая гарантия результата в договоре
            </div>

            <h1
              className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Ваши объявления смотрят, но не покупают?{" "}
              <span className="block bg-gradient-to-r from-[#d4af37] to-amber-300 bg-clip-text text-transparent">
                Создаем поток прибыли.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm text-zinc-300 sm:text-base">
              Прозрачный канал продаж с финансовой гарантией результата в
              договоре. Получите аудит профиля по 17 пунктам и стратегию роста
              уже сегодня — без риска «слива» бюджета на кнопкодавов и
              мусорные лиды.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-amber-400 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-[#d4af37]/30 transition hover:brightness-110">
                Получить бесплатный аудит
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-zinc-400">
                Ответ в течение{" "}
                <span className="font-semibold text-zinc-200">60 минут</span>{" "}
                в рабочее время.
              </p>
            </div>

            {/* Trust mini-badges */}
            <div className="mt-8 grid gap-4 text-xs text-zinc-300 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#d4af37]">
                  +57% клиентов
                </div>
                <p className="mt-1 text-[11px] text-zinc-300">
                  в среднем у заказчиков уже в первый месяц.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#d4af37]">
                  340+ проектов
                </div>
                <p className="mt-1 text-[11px] text-zinc-300">
                  в 50+ нишах по всей России.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#d4af37]">
                  ТОП‑3 специалистов
                </div>
                <p className="mt-1 text-[11px] text-zinc-300">
                  в рейтинге сертифицированных авитологов.
                </p>
              </div>
            </div>
          </div>

          {/* Visual side */}
          <div
            ref={heroImageRef}
            className="space-y-4 transition-all duration-700 ease-out"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/80 via-black to-zinc-900/90 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.25),transparent_65%)]" />
              <div className="relative h-72 sm:h-80 md:h-96">
                <img
                  src="images/avitolog-portrait.png"
                  alt="Частный авитолог Савелий Докучаев"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/85" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.85)_100%)]" />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/60 via-black to-zinc-900/80 p-5 shadow-xl backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.15),transparent_55%)]" />
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                    До и после запуска
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Стабильный поток заявок вместо хаотичных «запусков».
                  </p>
                </div>
                <div className="flex items-end gap-1">
                  <div className="h-14 w-2 rounded-full bg-zinc-700/70" />
                  <div className="h-16 w-2 rounded-full bg-zinc-700/70" />
                  <div className="h-9 w-2 rounded-full bg-zinc-700/70" />
                  <div className="h-20 w-2 rounded-full bg-[#d4af37] shadow-lg shadow-[#d4af37]/50" />
                </div>
              </div>
              <div className="mt-4 flex justify-between text-[11px] text-zinc-400">
                <span>До сотрудничества</span>
                <span>После настройки с Савелием</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                  <BarChart3 className="h-3.5 w-3.5 text-[#d4af37]" />
                  Метрики под контролем
                </div>
                <p className="mt-2 text-[11px] text-zinc-300">
                  Еженедельные отчёты и понятные цифры вместо «мы покрутили».
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#d4af37]" />
                  Финансовая защита
                </div>
                <p className="mt-2 text-[11px] text-zinc-300">
                  Результат и ответственность закрепляем юридически в договоре.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TRUST (Доверие) */}
        <section className="mt-16 border-t border-white/5 pt-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-sm font-semibold text-white">
                57% — средний рост количества клиентов у моих заказчиков в
                первый месяц.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-sm font-semibold text-white">
                340+ успешно запущенных проектов в 50+ нишах по всей России.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-sm font-semibold text-white">
                Вхожу в ТОП-3 рейтинга среди сертифицированных специалистов.
              </p>
            </div>
          </div>
        </section>

        {/* 3. SERVICES */}
        <section id="services" className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2
                className="text-2xl font-semibold text-white sm:text-3xl"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Услуги через реальные боли предпринимателя
              </h2>
              <p className="mt-2 text-sm text-zinc-300">
                Вместо шаблонных «настроим объявления» — системный подход:
                стратегия, упаковка и продажи.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Стратегия и аналитика */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  <LineChart className="h-4 w-4 text-[#d4af37]" />
                  Стратегия и аналитика
                </div>
                <p className="mt-3 text-sm font-semibold text-white">
                  Боль: страх слить бюджет без стратегии.
                </p>
                <p className="mt-2 text-xs text-zinc-300">
                  Вместо хаотичных запусков — чёткий план, основанный на цифрах,
                  конкурентном анализе и потенциале вашей ниши.
                </p>
                <div className="mt-3 rounded-xl bg-black/40 p-3 text-xs text-zinc-200">
                  <span className="font-semibold text-[#d4af37]">
                    Результат:
                  </span>{" "}
                  дорожная карта с прогнозом лидов и выручки, рассчитанная под
                  ваш бюджет и цели.
                </div>
              </div>
            </div>

            {/* Упаковка и SEO */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/10 via-transparent to-transparent" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  <BarChart3 className="h-4 w-4 text-[#d4af37]" />
                  Упаковка и SEO
                </div>
                <p className="mt-3 text-sm font-semibold text-white">
                  Боль: блокировки и слабые тексты.
                </p>
                <p className="mt-2 text-xs text-zinc-300">
                  Переписываем объявления и оформляем профиль в «белую», без
                  серых схем, из-за которых блокируют аккаунты и режут охваты.
                </p>
                <div className="mt-3 rounded-xl bg-black/40 p-3 text-xs text-zinc-200">
                  <span className="font-semibold text-[#d4af37]">
                    Результат:
                  </span>{" "}
                  рост конверсии в контакт в 2–3 раза за счёт грамотных текстов,
                  визуала и SEO‑оптимизации.
                </div>
              </div>
            </div>

            {/* Отдел продаж */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/12 via-transparent to-transparent" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  <Users className="h-4 w-4 text-[#d4af37]" />
                  Отдел продаж
                </div>
                <p className="mt-3 text-sm font-semibold text-white">
                  Боль: мусорные лиды, которые не покупают.
                </p>
                <p className="mt-2 text-xs text-zinc-300">
                  Настраиваем фильтры по лидам, скрипты и CRM, чтобы менеджеры
                  тратили время только на тех, кто действительно готов купить.
                </p>
                <div className="mt-3 rounded-xl bg-black/40 p-3 text-xs text-zinc-200">
                  <span className="font-semibold text-[#d4af37]">
                    Результат:
                  </span>{" "}
                  внедрение скриптов и рост продаж на 30% за счёт качественного
                  дожима входящего потока.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. MASTER (Команда Савелия) */}
        <section id="master" className="mt-16 border-t border-white/5 pt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md">
              <h2
                className="text-2xl font-semibold text-white sm:text-3xl"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Команда, которая отвечает рублём за результат
              </h2>
              <p className="mt-3 text-sm text-zinc-300">
                Над вашим проектом работает не безликое агентство, а компактная
                команда экспертов, где каждый понимает деньги предпринимателя и
                берёт ответственность на себя.
              </p>
            </div>

            <div className="grid flex-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37]">
                  Савелий Докучаев
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Ведущий эксперт, сертифицированный авитолог.
                </p>
                <p className="mt-2 text-xs text-zinc-300">
                  4 года опыта, спикер профильных направлений. Лично выстраивает
                  стратегию, контролирует запуск и результаты по каждому
                  проекту.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37]">
                  Александр
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Аналитик.
                </p>
                <p className="mt-2 text-xs text-zinc-300">
                  Специалист по сложным B2B‑нишам и конкурентному анализу.
                  Считает экономику запуска, чтобы каждая заявка укладывалась в
                  нужный вам KPI.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37]">
                  Марина
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Дизайнер упаковки.
                </p>
                <p className="mt-2 text-xs text-zinc-300">
                  Создаёт визуальную упаковку и инфографику, которая выделяет
                  вас среди конкурентов и повышает доверие к объявлению с
                  первого экрана.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TESTIMONIALS */}
        <section
          id="testimonials"
          className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-black/60 to-zinc-900/80 p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                className="text-2xl font-semibold text-white sm:text-3xl"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Кейсы, за которые не стыдно
              </h2>
              <p className="mt-2 text-sm text-zinc-200">
                Настоящие цифры и живые бизнесы — без скриншотов «до/после»
                ради рекламы.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37]">
                Иван — ниша заборов
              </p>
              <p className="mt-2 text-sm text-zinc-100">
                «Выручка 7&nbsp;000&nbsp;000 руб при цене лида 90 руб. Отдел
                продаж загружен на 100%.»
              </p>
              <div className="mt-3 flex items-center gap-1 text-[11px] text-zinc-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Сфокусировались на самых маржинальных типах заказов и
                отфильтровали нецелевые запросы.
              </div>
              <div
                ref={caseImageRef}
                className="mt-4 overflow-hidden rounded-xl border border-[#d4af37]/70 bg-black/60 transition-all duration-700 ease-out"
              >
                <img
                  src="images/case-7m-proof.png"
                  alt="Подтверждение выручки 7 000 000 ₽ на Avito"
                  className="h-32 w-full object-cover"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37]">
                Марина — кондиционеры
              </p>
              <p className="mt-2 text-sm text-zinc-100">
                «263 целевые заявки за месяц в разгар сезона. Обошли всех
                конкурентов».
              </p>
              <div className="mt-3 flex items-center gap-1 text-[11px] text-zinc-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Выстроили гибкую стратегию по регионам и сезонному спросу.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37]">
                «Техника в деле»
              </p>
              <p className="mt-2 text-sm text-zinc-100">
                «Лиды качественнее и дешевле, чем в Яндекс.Директе. Работаем на
                постоянной основе».
              </p>
              <div className="mt-3 flex items-center gap-1 text-[11px] text-zinc-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Сократили стоимость заявки и усилили отбор аудитории без
                потери объёма.
              </div>
            </div>
          </div>
        </section>

        {/* 6. BOOKING FORM & CONTACTS */}
        <section
          id="booking"
          className="mt-16 grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center"
        >
          <div>
            <h2
              className="text-2xl font-semibold text-white sm:text-3xl"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Готовы занять лидирующие позиции в вашей нише?
            </h2>
            <p className="mt-3 text-sm text-zinc-300">
              Оставьте заявку на бесплатный аудит или свяжитесь со мной
              напрямую:{" "}
              <a
                href="tel:+79615634471"
                className="font-semibold text-[#d4af37] underline-offset-4 hover:underline"
              >
                +7 (961) 563-44-71
              </a>
              .
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs text-zinc-300">
                    Имя <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Как к вам обращаться"
                    className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-0 transition placeholder:text-zinc-500 focus:border-[#d4af37]/70 focus:bg-black/60"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-300">
                    Телефон или WhatsApp{" "}
                    <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 ..."
                    className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-0 transition placeholder:text-zinc-500 focus:border-[#d4af37]/70 focus:bg-black/60"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-zinc-300">
                  Ниша и город <span className="text-[#d4af37]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Например: заборы, Москва"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-0 transition placeholder:text-zinc-500 focus:border-[#d4af37]/70 focus:bg-black/60"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-300">
                  Кратко о текущей ситуации
                </label>
                <textarea
                  rows={3}
                  placeholder="Что уже пробовали, какой бюджет и результат ожидаете"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-0 transition placeholder:text-zinc-500 focus:border-[#d4af37]/70 focus:bg-black/60"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-amber-400 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-[#d4af37]/30 transition hover:brightness-110"
                >
                  Получить бесплатный аудит
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-[11px] text-zinc-400">
                  Отправляя форму, вы соглашаетесь на обработку персональных
                  данных только в целях связи по вашему запросу.
                </p>
              </div>
            </form>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-zinc-200 backdrop-blur-xl">
            <h3 className="text-sm font-semibold text-white">
              Предприниматели приходят за цифрами, а не за «магией рекламы».
            </h3>
            <p className="mt-3 text-xs text-zinc-300">
              На старте вы получите:
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-zinc-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 text-[#d4af37]" />
                <span>Аудит профиля по 17 ключевым пунктам.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 text-[#d4af37]" />
                <span>Прозрачный прогноз по лидам и выручке.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 text-[#d4af37]" />
                <span>
                  Понимание, стоит ли вообще заходить в вашу нишу с текущим
                  бюджетом.
                </span>
              </li>
            </ul>
            <div
              ref={guaranteeImageRef}
              className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-3 text-xs text-zinc-200 transition-all duration-700 ease-out"
            >
              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-[#d4af37]/70 bg-zinc-900">
                <img
                  src="images/image_7.png"
                  alt="Иконка финансовых гарантий и договора"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/70" />
              </div>
              <p>
                Финансовые гарантии и условия фиксируются в официальном
                договоре. Работаете с прозрачными правилами и понятной
                ответственностью сторон.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-black/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-[11px] text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Частный авитолог Савелий Докучаев.</span>
            <span className="hidden sm:inline">Все права защищены.</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+79615634471"
              className="inline-flex items-center gap-1 text-[#d4af37] transition hover:text-amber-300"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>+7 (961) 563-44-71</span>
            </a>
            <span className="text-zinc-500">
              Финансовые гарантии и условия фиксируются в официальном договоре.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;