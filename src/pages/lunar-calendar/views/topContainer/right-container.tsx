import { FC} from "react";
import { ComponentContainer } from "../../../../components/component-container/component-container.component";
import { LunarDailyCard } from "../../components/lunar-daily-card.component";

interface Props {}  

export const RightContainer: FC<Props> = () => {
    
    return (
        <ComponentContainer>
            {`Top -> Right Container`}
            <LunarDailyCard />
        </ComponentContainer>
    )
}
