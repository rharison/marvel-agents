import { Skeleton } from "@mui/material"

export const SkeletonProfile = () => {

    return (
        <>
            <Skeleton
                variant="text"
                width={180}
                height={25}
                sx={{ marginBottom: '23px' }}
            />
            <Skeleton
                variant="rectangular"
                width='100%'
                height={38}
                sx={{ marginBottom: '27px' }}
            />
            <Skeleton
                variant="rectangular"
                width='100%'
                height={226}
                sx={{
                    borderRadius: '15px',
                }}
            />
        </>
    )
}