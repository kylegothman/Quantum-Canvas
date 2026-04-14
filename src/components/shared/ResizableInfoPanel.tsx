import React, { useState, useRef, useCallback, useEffect } from 'react';

interface ResizableInfoPanelProps {
  children: React.ReactNode;
  defaultWidth?: number;
  defaultHeight?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  collapsible?: boolean;
  title?: string;
}

export const ResizableInfoPanel: React.FC<ResizableInfoPanelProps> = ({
  children,
  defaultWidth = 260,
  defaultHeight = 120,
  minWidth = 160,
  minHeight = 60,
  maxWidth = 500,
  maxHeight = 400,
  position = 'top-left',
  collapsible = true,
  title,
}) => {
  const [width, setWidth] = useState(defaultWidth);
  const [height, setHeight] = useState(defaultHeight);
  const [collapsed, setCollapsed] = useState(false);
  const isDragging = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const startRef = useRef({ x: 0, y: 0, w: 0, h: 0 });

  // Which corner to drag depends on panel position
  const isRight = position.includes('right');
  const isBottom = position.includes('bottom');

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isDragging.current = true;
    startRef.current = { x: e.clientX, y: e.clientY, w: width, h: height };
    document.body.style.cursor = 'nwse-resize';
    document.body.style.userSelect = 'none';
  }, [width, height]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const dx = e.clientX - startRef.current.x;
      const dy = e.clientY - startRef.current.y;

      // Resize direction depends on which corner the panel is in
      const newW = isRight
        ? Math.max(minWidth, Math.min(maxWidth, startRef.current.w - dx))
        : Math.max(minWidth, Math.min(maxWidth, startRef.current.w + dx));
      const newH = isBottom
        ? Math.max(minHeight, Math.min(maxHeight, startRef.current.h - dy))
        : Math.max(minHeight, Math.min(maxHeight, startRef.current.h + dy));

      setWidth(newW);
      setHeight(newH);
    };

    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isRight, isBottom, minWidth, minHeight, maxWidth, maxHeight]);

  const positionClasses = {
    'top-left': 'top-3 left-3',
    'top-right': 'top-3 right-3',
    'bottom-left': 'bottom-3 left-3',
    'bottom-right': 'bottom-3 right-3',
  };

  // Resize handle position: opposite corner from panel position
  const handlePosition = {
    'top-left': 'bottom-0 right-0 cursor-nwse-resize',
    'top-right': 'bottom-0 left-0 cursor-nesw-resize',
    'bottom-left': 'top-0 right-0 cursor-nesw-resize',
    'bottom-right': 'top-0 left-0 cursor-nwse-resize',
  };

  return (
    <div
      ref={panelRef}
      className={`absolute ${positionClasses[position]} z-10`}
      style={{ width: collapsed ? 'auto' : width }}
    >
      <div className="bg-black/70 backdrop-blur-md rounded-lg border border-white/[0.1] overflow-hidden">
        {/* Header with collapse toggle */}
        {(title || collapsible) && (
          <div
            className="flex items-center justify-between px-3 py-1.5 cursor-pointer
                       hover:bg-white/[0.02] transition-colors select-none"
            onClick={() => collapsible && setCollapsed(!collapsed)}
          >
            {title && (
              <span className="text-[11px] text-white/[0.55] font-mono uppercase tracking-wider">
                {title}
              </span>
            )}
            {collapsible && (
              <span className="text-[11px] text-white/[0.4] ml-2">
                {collapsed ? '▸' : '▾'}
              </span>
            )}
          </div>
        )}

        {/* Content */}
        {!collapsed && (
          <div
            className="px-3 pb-2 overflow-y-auto"
            style={{ maxHeight: height - (title || collapsible ? 28 : 0) }}
          >
            {children}
          </div>
        )}

        {/* Resize handle */}
        {!collapsed && (
          <div
            className={`absolute ${handlePosition[position]} w-4 h-4 group`}
            onMouseDown={handleMouseDown}
          >
            {/* Visible grip dots */}
            <svg className="w-full h-full opacity-0 group-hover:opacity-100 transition-opacity"
              viewBox="0 0 16 16">
              <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.25)" />
              <circle cx="6" cy="10" r="1" fill="rgba(255,255,255,0.25)" />
              <circle cx="10" cy="6" r="1" fill="rgba(255,255,255,0.25)" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
