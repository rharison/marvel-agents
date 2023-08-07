import { Title } from "./styles";
import { TitleWithDecorationProps } from "./types";

export const TitleWithDecoration = ({ title, decoration = '.', margin = '0 0 1rem 0', size = 2.25 }: TitleWithDecorationProps) => {

    return (
        <Title
            $decoration={decoration}
            $margin={margin}
            $size={size}
        >
            {title}
        </Title>
    )
};