export type PaginationProps = {
    totalPages: number;
    actualPage: number;
    onPageChange: (page: number) => void;
}