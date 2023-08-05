import { StyledSelect } from "./styles"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { SelectAgentProps } from "./types";
import useSelectAgent from "./useSelectAgent";

export const SelectAgent = ({ characters, callbackSelectedAgent }: SelectAgentProps) => {
    const {
        open,
        selected,
        handleRenderValue,
        setOpen,
        handleChange,
        renderOptions
    } = useSelectAgent(characters);

    return (
        <StyledSelect
            fullWidth
            displayEmpty
            value={selected}
            onChange={(event) => {
                handleChange(event);
                callbackSelectedAgent(Number(event.target.value));
            }}
            IconComponent={() => {
                if (open) {
                    return <KeyboardArrowUpOutlinedIcon />
                }
                return <KeyboardArrowDownOutlinedIcon />
            }}
            renderValue={handleRenderValue}
            MenuProps={{
                PaperProps: {
                    sx: {
                        borderRadius: '0.5rem',
                        boxShadow: '0px 12px 16px -4px #10182814',
                        marginTop: '0.5rem',
                    },
                },
            }}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            open={open}
        >
            {renderOptions()}
        </StyledSelect >
    )
}