import moment from "moment";
import { FC } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { ComponentContainer } from "../../../../components/component-container/component-container.component";

interface Props {}  

export const LeftContainer: FC<Props> = () => {
    const localizer = momentLocalizer(moment);
    return (
        <ComponentContainer>
            {`Top -> Left Container`}
            <Calendar
                localizer={localizer}
                style={{ height: 500 }} 
                views={['month']}
            />
        </ComponentContainer>
    )
}
