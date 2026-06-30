import { useState } from "react";
import { useNavigate } from "react-router";
import { useCart } from "@/context/CartContext";
import type { Course } from "@/data/courses";
import { Crown, Zap, BookOpen, Check, ShoppingCart, Eye, Star, Clock, Target } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Crown: <Crown className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  BookOpen: <BookOpen className="w-8 h-8" />,
};

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const { addToCart, isInCart } = useCart();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);
  const inCart = isInCart(course.id);

  function handleAddToCart(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (!inCart) {
      addToCart(course.id);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  }

  function handleView(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    navigate("/course/" + course.id);
  }

  const discount = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);

  return (
    <div
      className="group relative bg-white rounded-2xl border border-[#e5e7eb] shadow-lg"
      style={{ animationDelay: `${index * 150}ms`, position: "relative" }}
    >
      {/* Decorative overlays — pointer-events disabled so they never block clicks */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "1rem",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Badge top-right */}
      <div style={{ position: "absolute", top: "1rem", right: "1rem", zIndex: 30, pointerEvents: "none" }}>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#f5a623] text-[#1a2a4a]">
          <Star className="w-3 h-3 ml-1 fill-current" />
          {course.badge}
        </span>
      </div>

      {/* Discount badge top-left */}
      <div style={{ position: "absolute", top: "1rem", left: "1rem", zIndex: 30, pointerEvents: "none" }}>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-500 text-white">
          وفر {discount}%
        </span>
      </div>

      {/* Header */}
      <div className={`bg-gradient-to-br ${course.gradient} p-6 pb-8 rounded-t-2xl overflow-hidden`} style={{ position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative flex justify-center mb-4">
          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shadow-inner">
            {iconMap[course.icon]}
          </div>
        </div>
        <h3 className="relative text-xl font-bold text-white text-center mb-1">{course.name}</h3>
        <p className="relative text-sm text-white/80 text-center">{course.subtitle}</p>
      </div>

      {/* Content */}
      <div className="p-6" style={{ position: "relative", zIndex: 10 }}>
        {/* Target Score */}
        <div className="flex items-center justify-center gap-2 mb-4 -mt-10">
          <div className="bg-white border-2 border-[#f5a623] rounded-xl px-4 py-2 shadow-md flex items-center gap-2">
            <Target className="w-4 h-4 text-[#f5a623]" />
            <span className="text-sm font-bold text-[#1a2a4a]">الهدف: {course.targetScore}</span>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center justify-center gap-4 mb-4 text-sm text-[#6b7280]">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-[#f5a623]" />
            {course.duration}
          </span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-[#f5a623]" />
            وصول: {course.accessPeriod}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-[#6b7280] text-center mb-4 leading-relaxed">{course.description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {course.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-[#374151]">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Extra Features */}
        {course.extraFeatures && (
          <div className="bg-[#f5a623]/10 rounded-xl p-3 mb-4 border border-[#f5a623]/20">
            <p className="text-xs font-bold text-[#f5a623] mb-2 text-center">الميزة الأقوى</p>
            <ul className="space-y-1">
              {course.extraFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-[#f5a623] mt-0.5 flex-shrink-0" />
                  <span className="text-[#1a2a4a] font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-3xl font-black text-[#1a2a4a]">{course.price} ر.س</span>
          <span className="text-lg text-[#9ca3af] line-through font-medium">{course.originalPrice} ر.س</span>
        </div>

        {/* Action Buttons — inline styles to guarantee z-index and pointer-events */}
        <div style={{ display: "flex", gap: "0.5rem", position: "relative", zIndex: 50 }}>
          {/* Add to Cart */}
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={inCart}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.75rem 1rem",
              borderRadius: "0.75rem",
              fontWeight: "700",
              fontSize: "0.875rem",
              cursor: inCart ? "default" : "pointer",
              border: "none",
              background: inCart || added ? "#22c55e" : "linear-gradient(to right, #f5a623, #f7b84e)",
              color: inCart || added ? "#fff" : "#1a2a4a",
              transition: "all 0.2s",
              position: "relative",
              zIndex: 50,
            }}
          >
            {inCart ? (
              <>
                <Check className="w-4 h-4" />
                في السلة
              </>
            ) : added ? (
              <>
                <Check className="w-4 h-4" />
                تمت الإضافة
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                أضف للسلة
              </>
            )}
          </button>

          {/* View Details */}
          <button
            type="button"
            onClick={handleView}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.75rem 1rem",
              borderRadius: "0.75rem",
              border: "2px solid #1a2a4a",
              background: "transparent",
              color: "#1a2a4a",
              fontWeight: "700",
              fontSize: "0.875rem",
              cursor: "pointer",
              transition: "all 0.2s",
              position: "relative",
              zIndex: 50,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1a2a4a";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#1a2a4a";
            }}
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Text link fallback */}
        <div style={{ textAlign: "center", marginTop: "0.75rem", position: "relative", zIndex: 50 }}>
          <button
            type="button"
            onClick={handleView}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.75rem",
              color: "#6b7280",
              textDecoration: "underline",
            }}
          >
            عرض تفاصيل الدورة ←
          </button>
        </div>
      </div>
    </div>
  );
}
