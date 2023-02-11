import { FC } from "react";

import { ComponentContainer } from "../../../../components/component-container/component-container.component";
import { LunarCalendar } from "../../components/lunar-calendar/lunar-calendar.component";

interface Props {}  

export const LeftContainer: FC<Props> = () => {
    return (
        <ComponentContainer classes={"lunar-calendar-container"}>
            <LunarCalendar />
        </ComponentContainer>
    )
}
