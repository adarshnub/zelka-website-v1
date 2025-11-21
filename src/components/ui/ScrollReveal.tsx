"use client";

import clsx from "clsx";
import {
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
  type ElementType,
  type Ref,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type ScrollDirection = "up" | "down" | "left" | "right" | "scale";

type ScrollRevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  direction?: ScrollDirection;
  distance?: number;
} & HTMLAttributes<HTMLElement>;

export function ScrollReveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  once = true,
  direction = "up",
  distance = 32,
  style,
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && node) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const hiddenTransform = useMemo(() => {
    switch (direction) {
      case "down":
        return `translate3d(0, -${distance}px, 0)`;
      case "left":
        return `translate3d(${distance}px, 0, 0)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0)`;
      case "scale":
        return "scale(0.95)";
      case "up":
      default:
        return `translate3d(0, ${distance}px, 0)`;
    }
  }, [direction, distance]);

  const combinedStyle: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transform: isVisible ? "translate3d(0,0,0)" : hiddenTransform,
    opacity: isVisible ? 1 : 0,
    ...style,
  };

  const Component = Tag as ElementType;
  const refProp =
    typeof Tag === "string" ? (ref as Ref<HTMLElement>) : undefined;

  return (
    <Component
      ref={refProp}
      style={combinedStyle}
      {...rest}
      className={clsx(
        "transition duration-700 ease-out will-change-transform",
        className
      )}
    >
      {children}
    </Component>
  );
}
