import { FC } from "react";
import { ComponentProps } from "../common/types/component.types";
import { ContainerProps } from "../common/types/container.types";
import { 
    Calendar as PrimeCalendar, 
    CalendarProps as PrimeCalendarProps, 
    CalendarDateTemplateEvent as PrimeCalendarDateTemplateEvent 
} from 'primereact/calendar';

interface CalendarProps extends PrimeCalendarProps {
}
export interface CalendarDateTemplateEvent extends PrimeCalendarDateTemplateEvent {}

export const Calendar: FC<ContainerProps & CalendarProps> = (props) => {

    return (
        // <div
        //     style={divContainerStyle}
        //     className={classes}
        // >
            <PrimeCalendar {...props}  inline showWeek />
        // </div>
    )
}