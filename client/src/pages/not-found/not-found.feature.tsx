import { FC } from "react";
import { FeatureContainer } from "../../components/feature-container";

export interface NotFoundProps {}

export interface NotFoundActionProps {}

export const NotFoundFeature: FC<NotFoundProps & NotFoundActionProps> = () => {
    
    return (
        <FeatureContainer>
            <div className="page-container">
                Not Found
            </div>
        </FeatureContainer>
    )
}
