import { twMerge } from "tailwind-merge";
import type { FC, PropsWithChildren } from "react";

import { StepPointColor, StepPointSizes } from "../Step";
import { TimelineBody } from "./TimelineBody";
import { TimelineContent } from "./TimelineContent";
import { TimelineContext } from "./TimelineContext";
import { TimelineItem } from "./TimelineItem";
import { TimelinePoint } from "./TimelinePoint";
import { TimelineTime } from "./TimelineTime";
import { TimelineTitle } from "./TimelineTitle";
import { KeepBoolean } from "../../Keep/KeepTheme";

export interface keepStepperTheme {
  horizontal: {
    base: string;
    item: {
      base: string;
      size: StepPointSizes;
      completed: {
        base: string;
        on: StepPointColor;
        off: StepPointColor;
      };
      borderType: {
        solid: string;
        dashed: string;
      };
    };
    point: {
      base: string;
      size: StepPointSizes;
      withBg: {
        on: string;
        off: StepPointColor;
      };
      completed: {
        on: StepPointColor;
        off: StepPointColor;
      };
      withRing: {
        color: {
          light: StepPointColor;
          deep: StepPointColor;
        };
      };
      withBorder: {
        on: StepPointColor;
        off: string;
      };
    };
    title: string;
    content: string;
    active: KeepBoolean;
  };
  vertical: {
    base: string;
  };
}

export type TimelineProps = PropsWithChildren<{
  className?: string;
  horizontal?: boolean;
  gradientPoint?: boolean;
  gradientColor?: string;
  timelineBarType?: "solid" | "dashed";
}>;

const TimelineComponent: FC<TimelineProps> = ({
  children,
  horizontal,
  gradientPoint,
  timelineBarType = "solid",
  gradientColor,
  className,
}) => {
  return (
    <TimelineContext.Provider
      value={{ horizontal, gradientPoint, gradientColor }}
    >
      <ol
        data-testid="timeline-component"
        className={twMerge(
          !horizontal && "relative border-l border-slate-200",
          horizontal && "items-start border-t border-slate-200 sm:flex",
          timelineBarType === "solid" && "border-solid",
          timelineBarType === "dashed" && "border-dashed",
          className
        )}
      >
        {children}
      </ol>
    </TimelineContext.Provider>
  );
};

TimelineComponent.displayName = "Timeline";
TimelineItem.displayName = "Timeline.Item";
TimelinePoint.displayName = "Timeline.Point";
TimelineContent.displayName = "Timeline.Content";
TimelineTime.displayName = "Timeline.Time";
TimelineTitle.displayName = "Timeline.Title";
TimelineBody.displayName = "Timeline.Body";

export const Timeline = Object.assign(TimelineComponent, {
  Item: TimelineItem,
  Point: TimelinePoint,
  Content: TimelineContent,
  Time: TimelineTime,
  Title: TimelineTitle,
  Body: TimelineBody,
});
