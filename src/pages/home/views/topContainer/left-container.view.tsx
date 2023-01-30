import moment from "moment";
import { createElement, FC, useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
import { Calendar } from 'primereact/calendar';
import { ComponentContainer } from "../../../../components/component-container/component-container.component";
import { ContainerProps } from "../../../../components/common/types/container.types";

interface Props {}  

export const LeftContainer: FC<ContainerProps & Props> = ({}) => {
    const [selectedDate, setSelectedDate] = useState<string | Date | Date[] | null | undefined>(null);
    // const localizer = momentLocalizer(moment);
    return (
        <ComponentContainer containerStyle={{display: 'flex', flexDirection: 'column'}}>
            {`Top -> Left Container`}
            <Calendar value={selectedDate} onChange={(e) => setSelectedDate(e.value)} inline showWeek />
            {/* <Calendar
                localizer={localizer}
                style={{ height: 500 }} 
                views={['month']}
            /> */}
        </ComponentContainer>
    )
}
