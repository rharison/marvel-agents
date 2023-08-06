import { PaginationItem } from "@mui/material";
import { Container } from "./styles"
import PaginationMUI from '@mui/material/Pagination';
import { PreviousButton } from "../PreviousButton";
import { NextButton } from "../NextButton";
import { PaginationProps } from "./types";

export const Pagination = ({ totalPages, onPageChange }: PaginationProps) => {

    return (
        <Container>
            <PaginationMUI
                count={totalPages}
                onChange={(_, page) => onPageChange(page)}
                defaultPage={1}
                shape="rounded"
                variant="outlined"
                boundaryCount={1}
                siblingCount={-1}
                renderItem={(item) => (
                    <PaginationItem
                        slots={{ previous: PreviousButton, next: NextButton }}
                        {...item}
                    />
                )}
                sx={{
                    '& > .MuiPagination-ul': {
                        '& li > button': {
                            margin: 0,
                            borderRadius: 0,
                            height: '40px',
                            width: '40px',
                            borderColor: '#D0D5DD',
                        },
                        '& li > button.Mui-selected': {
                            backgroundColor: '#F9FAFB'
                        },
                        '& > :first-child > button': {
                            borderRadius: '8px 0px 0px 8px',
                            padding: '10px 16px',
                            width: 'auto'
                        },
                        '& > :last-child > button': {
                            borderRadius: '0px 8px 8px 0px',
                            width: 'auto',
                            padding: '10px 16px'
                        }
                    },

                }}
            />
        </Container>
    )
}
