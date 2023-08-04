import { Title } from "./styles";
import { TitleWithDecorationProps } from "./types";

export const TitleWithDecoration = ({ title, decoration = '.', margin = '0 0 1rem 0' }: TitleWithDecorationProps) => {

    return (
        <Title
            $decoration={decoration}
            $margin={margin}
        >
            {title}
        </Title>
    )
};