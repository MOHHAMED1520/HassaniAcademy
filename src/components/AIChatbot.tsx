import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2, Sparkles } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
  timestamp: Date;
  quickReplies?: string[];
}

// ─── Knowledge Base ───────────────────────────────────────────────────────────
const KB: Record<string, { patterns: RegExp[]; answer: string; quickReplies?: string[] }[]> = {
  greeting: [
    {
      patterns: [/مرحبا|هلا|اهلا|السلام|صباح|مساء|كيف حالك|hi|hello|hey/i],
      answer:
        "أهلاً وسهلاً! 👋\nأنا المساعد الذكي لأكاديمية الحساني STEP 2026.\nكيف يمكنني مساعدتك اليوم؟",
      quickReplies: ["ما هي الدورات المتاحة؟", "كم سعر الدورة؟", "كيف أسجل؟", "ما هو اختبار STEP؟"],
    },
  ],

  courses: [
    {
      patterns: [/دور|باقة|كورس|برنامج|متاح|عند|لديك/i],
      answer:
        "نقدم ثلاث دورات احترافية لـ STEP 2026 🎓\n\n🥇 **الباقة المميزة** – 349 ر.س\n   الهدف: 90+ | مدى الحياة\n\n⚡ **الباقة المكثفة** – 299 ر.س\n   الهدف: 80-90 | 90 يوماً\n\n📘 **الباقة الشاملة** – 249 ر.س\n   الهدف: 70-80 | 60 يوماً\n\nجميع الدورات تشمل أحدث نماذج 50-51-52!",
      quickReplies: ["الباقة المميزة", "الباقة المكثفة", "الباقة الشاملة", "كيف أشتري؟"],
    },
  ],

  premium: [
    {
      patterns: [/مميز|premium|ذهبي|أفضل باقة|أغلى/i],
      answer:
        "🥇 **الباقة المميزة – 349 ر.س** (الأصل 749 ر.س)\n\nالهدف: درجة 90+\n⏱ مدة الدراسة: مكثف\n📅 الوصول: مدى الحياة\n\n✅ شامل:\n• جميع النماذج 50-51-52\n• تصحيح مباشر وتعليقات\n• مجموعة VIP على تيليجرام\n• ضمان استرداد 7 أيام\n• تحديثات مجانية مدى الحياة",
      quickReplies: ["أضفها للسلة", "كيف أشتري؟", "تواصل مع المدرب"],
    },
  ],

  intensive: [
    {
      patterns: [/مكثف|intensive|90|ثمانين|80/i],
      answer:
        "⚡ **الباقة المكثفة – 299 ر.س** (الأصل 549 ر.س)\n\nالهدف: درجة 80-90\n⏱ مدة الوصول: 90 يوماً\n\n✅ شامل:\n• نماذج 50-51-52\n• جلسات مراجعة أسبوعية\n• كويزات تفاعلية\n• دعم عبر تيليجرام",
      quickReplies: ["أضفها للسلة", "الفرق بين الباقات؟", "تواصل مع المدرب"],
    },
  ],

  comprehensive: [
    {
      patterns: [/شامل|comprehensive|60|سبعين|70|مبتدئ/i],
      answer:
        "📘 **الباقة الشاملة – 249 ر.س** (الأصل 399 ر.س)\n\nالهدف: درجة 70-80\n⏱ مدة الوصول: 60 يوماً\n\n✅ مناسبة للمبتدئين:\n• أساسيات اللغة الإنجليزية\n• نماذج مُعدَّلة للبداية\n• متابعة شخصية",
      quickReplies: ["أضفها للسلة", "الفرق بين الباقات؟", "تواصل مع المدرب"],
    },
  ],

  price: [
    {
      patterns: [/سعر|كم|تكلفة|تكلف|ريال|ر\.س|كم ثمن|كم حق/i],
      answer:
        "💰 أسعار دورات STEP 2026:\n\n🥇 المميزة: **349 ر.س** (خصم 53%)\n⚡ المكثفة: **299 ر.س** (خصم 45%)\n📘 الشاملة: **249 ر.س** (خصم 37%)\n\n✨ جميع الأسعار شاملة ضريبة القيمة المضافة\n🔒 دفع آمن عبر تيليجرام",
      quickReplies: ["كيف أدفع؟", "هل يوجد تقسيط؟", "ما الفرق بين الباقات؟"],
    },
  ],

  payment: [
    {
      patterns: [/دفع|سداد|تحويل|مدى|فيزا|تقسيط|طريقة الدفع|كيف أشتري|كيف أسجل|اشتر/i],
      answer:
        "🛒 **خطوات الشراء:**\n\n1️⃣ اختر الدورة وأضفها للسلة\n2️⃣ انتقل لصفحة الدفع\n3️⃣ أدخل بياناتك\n4️⃣ أرسل الطلب عبر تيليجرام\n5️⃣ سيتواصل معك المدرب لإتمام الدفع\n\n💬 يمكنك أيضاً التواصل مباشرة:\n@qiyas_2026_2030",
      quickReplies: ["فتح تيليجرام", "الذهاب للسلة"],
    },
  ],

  step_exam: [
    {
      patterns: [/step|اختبار|كفاية|كفايات|ستيب|قياس|تامر|توفل|ايلتس/i],
      answer:
        "📋 **اختبار STEP:**\n\nهو اختبار كفاءة اللغة الإنجليزية الصادر من مركز قياس، مطلوب للتوظيف في القطاعين الحكومي والخاص.\n\n🎯 يقيس مهارات:\n• القراءة (Reading)\n• الكتابة (Writing)\n• المفردات (Vocabulary)\n• القواعد (Grammar)\n\n📅 يتوفر على مدار العام في مراكز قياس",
      quickReplies: ["كيف أستعد للاختبار؟", "ما الدرجة المطلوبة؟", "عرض الدورات"],
    },
  ],

  preparation: [
    {
      patterns: [/استعد|تحضير|نصيحة|كيف أذاكر|خطة|استراتيج/i],
      answer:
        "📚 **نصائح الاستعداد للـ STEP:**\n\n1. ابدأ بتشخيص مستواك الحالي\n2. خصص ساعة يومياً للمذاكرة\n3. حل نماذج الاختبار الحقيقية\n4. ركز على المفردات والقواعد\n5. استخدم محاكي الاختبار\n\n🏆 مع أكاديمية الحساني لديك خطة مُعدَّة احترافياً!",
      quickReplies: ["عرض الدورات", "تواصل مع المدرب"],
    },
  ],

  contact: [
    {
      patterns: [/تواصل|اتصل|تليجرام|واتساب|تيليجرام|للتواصل|contact/i],
      answer:
        "📬 **تواصل معنا:**\n\n💬 تيليجرام (الرسمي):\n@qiyas_2026_2030\n\nساعات الدعم: يومياً ٨ص – ١١م\n\n📲 يمكنك الضغط على الزر أدناه للانتقال مباشرة:",
      quickReplies: ["فتح تيليجرام", "إرسال رسالة"],
    },
  ],

  guarantee: [
    {
      patterns: [/ضمان|استرداد|رجوع|مبلغ|عائد/i],
      answer:
        "🔒 **ضمان الاسترداد:**\n\nنوفر ضمان استرداد كامل خلال **7 أيام** من الشراء بدون أي شروط في الباقة المميزة.\n\nرضاك ونجاحك هو هدفنا الأول! ✨",
      quickReplies: ["عرض الدورات", "تواصل مع المدرب"],
    },
  ],

  features: [
    {
      patterns: [/ميزة|مميزات|ماذا يوجد|محتوى|شو فيها|ايش فيها/i],
      answer:
        "✨ **مميزات أكاديمية الحساني:**\n\n🎯 أحدث نماذج STEP 50-51-52\n📱 وصول فوري بعد التسجيل\n👨‍🏫 إشراف مباشر من المدرب\n🔄 تحديثات مستمرة مجانية\n🎮 كويزات تفاعلية ومحاكيات\n📊 تقارير تقدم مفصلة\n👥 مجتمع تعليمي على تيليجرام",
      quickReplies: ["عرض الدورات", "كم السعر؟"],
    },
  ],

  score: [
    {
      patterns: [/درجة|نسبة|كم درجة|ممتاز|جيد|مقبول|100|90|80|70/i],
      answer:
        "🎯 **الدرجات ومتطلبات الجهات:**\n\n⭐ 90+ → ممتاز (متطلب الوزارات والجهات الكبرى)\n✅ 80-89 → جيد جداً\n📋 70-79 → جيد (مقبول لكثير من الجهات)\n\n📈 متوسط درجات طلابنا: **+90**\n🏅 نسبة النجاح: **95%**",
      quickReplies: ["عرض الدورات", "كيف أرفع درجتي؟"],
    },
  ],

  fallback: [
    {
      patterns: [/.*/],
      answer:
        "عذراً، لم أفهم سؤالك تماماً 🤔\nيمكنني مساعدتك في:\n• معلومات الدورات والأسعار\n• طريقة التسجيل والدفع\n• اختبار STEP\n• التواصل مع المدرب\n\nيمكنك أيضاً التواصل مباشرة: @qiyas_2026_2030",
      quickReplies: ["الدورات المتاحة", "الأسعار", "طريقة التسجيل", "تواصل معنا"],
    },
  ],
};

// ─── Intent Detection ─────────────────────────────────────────────────────────
function detectIntent(input: string): { answer: string; quickReplies?: string[] } {
  const text = input.trim();
  const categories = Object.keys(KB).filter((k) => k !== "fallback");

  for (const cat of categories) {
    for (const item of KB[cat]) {
      for (const pattern of item.patterns) {
        if (pattern.test(text)) {
          return { answer: item.answer, quickReplies: item.quickReplies };
        }
      }
    }
  }

  return KB.fallback[0];
}

// ─── ChatMessage Component ────────────────────────────────────────────────────
function ChatMessage({ msg }: { msg: Message }) {
  const isBot = msg.role === "bot";
  return (
    <div className={`flex items-end gap-2 mb-3 ${isBot ? "justify-start" : "justify-end"}`}>
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a2a4a] to-[#2a4a8a] flex items-center justify-center flex-shrink-0 shadow-md">
          <Bot className="w-4 h-4 text-[#f5a623]" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line shadow-sm ${
          isBot
            ? "bg-white text-[#1a2a4a] rounded-bl-sm border border-gray-100"
            : "bg-gradient-to-br from-[#f5a623] to-[#f7b84e] text-[#1a2a4a] font-medium rounded-br-sm"
        }`}
        dir="rtl"
      >
        {msg.text}
        <div className={`text-xs mt-1 opacity-50 ${isBot ? "text-left" : "text-right"}`}>
          {msg.timestamp.toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
      {!isBot && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f5a623] to-[#f7b84e] flex items-center justify-center flex-shrink-0 shadow-md">
          <User className="w-4 h-4 text-[#1a2a4a]" />
        </div>
      )}
    </div>
  );
}

// ─── Main AIChatbot Component ─────────────────────────────────────────────────
export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const welcome = KB.greeting[0];
        setMessages([
          {
            id: "welcome",
            role: "bot",
            text: welcome.answer,
            timestamp: new Date(),
            quickReplies: welcome.quickReplies,
          },
        ]);
      }, 800);
    }
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, hasGreeted, isMinimized]);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;

      // Handle special quick-reply actions
      if (text === "فتح تيليجرام") {
        window.open("https://t.me/qiyas_2026_2030", "_blank");
        return;
      }

      const userMsg: Message = {
        id: `u-${Date.now()}`,
        role: "user",
        text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInputValue("");
      setIsTyping(true);

      const delay = 600 + Math.random() * 600;
      setTimeout(() => {
        const { answer, quickReplies } = detectIntent(text);
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: `b-${Date.now()}`,
            role: "bot",
            text: answer,
            timestamp: new Date(),
            quickReplies,
          },
        ]);
      }, delay);
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const lastBotMsg = [...messages].reverse().find((m) => m.role === "bot");

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
        }}
        className={`fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#1a2a4a] to-[#2a4a8a] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen && !isMinimized ? "opacity-0 pointer-events-none scale-75" : "opacity-100 scale-100"
        }`}
        aria-label="افتح المساعد الذكي"
      >
        <div className="relative">
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
        </div>
        {/* Ripple rings */}
        <span className="absolute w-16 h-16 rounded-full border-2 border-[#f5a623]/40 animate-ping" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 left-6 z-50 transition-all duration-300 origin-bottom-left ${
          isOpen
            ? isMinimized
              ? "opacity-100 scale-100"
              : "opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
        }`}
        style={{ width: "360px" }}
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col"
          style={{ height: isMinimized ? "auto" : "520px" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1a2a4a] to-[#2a3a5a] px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f5a623]/20 border-2 border-[#f5a623] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#f5a623]" />
              </div>
              <div dir="rtl">
                <div className="text-white font-bold text-sm">المساعد الذكي</div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/60 text-xs">متاح الآن</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized((v) => !v)}
                className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                aria-label="تصغير"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                aria-label="إغلاق"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body (collapsible) */}
          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50" dir="rtl">
                {messages.map((msg) => (
                  <ChatMessage key={msg.id} msg={msg} />
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex items-end gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a2a4a] to-[#2a4a8a] flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-[#f5a623]" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 border border-gray-100 shadow-sm">
                      <div className="flex gap-1 items-center h-5">
                        <span className="w-2 h-2 bg-[#1a2a4a]/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 bg-[#1a2a4a]/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 bg-[#1a2a4a]/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              {lastBotMsg?.quickReplies && lastBotMsg.quickReplies.length > 0 && !isTyping && (
                <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-2 justify-end" dir="rtl">
                  {lastBotMsg.quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => sendMessage(reply)}
                      className="text-xs px-3 py-1.5 rounded-full border border-[#1a2a4a]/20 text-[#1a2a4a] hover:bg-[#1a2a4a] hover:text-white transition-all font-medium"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {/* Input Area */}
              <form
                onSubmit={handleSubmit}
                className="px-4 py-3 bg-white border-t border-gray-200 flex items-center gap-2"
                dir="rtl"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="اكتب سؤالك هنا..."
                  className="flex-1 text-sm bg-gray-100 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#f5a623]/50 text-[#1a2a4a] placeholder-gray-400"
                  dir="rtl"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f5a623] to-[#f7b84e] text-[#1a2a4a] flex items-center justify-center hover:shadow-md transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                >
                  <Send className="w-4 h-4 rotate-180" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
