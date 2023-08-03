import { Title } from "./styles";
import { TitleWithDecorationProps } from "./types";

export const TitleWithDecoration = ({ title, decoration = '.' }: TitleWithDecorationProps) => {

    return (
        <Title
            $decoration={decoration}
        >
            {title}
        </Title>
    )
};