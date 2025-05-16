import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile: any;
  }
}

interface TurnstileWidgetProps {
  siteKey: string;
  onToken: (token: string | null) => void;
}

const TurnstileWidget = ({ siteKey, onToken }: TurnstileWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!window.turnstile || !containerRef.current) return;

    // Remove previous widget if exists
    if (widgetIdRef.current !== undefined) {
      window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = undefined;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: (token: string) => onToken(token),
      "error-callback": () => onToken(null),
      "expired-callback": () => onToken(null),
    });

    return () => {
      if (widgetIdRef.current !== undefined) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [siteKey, onToken]);

  return <div ref={containerRef} />;
};

export default TurnstileWidget;
