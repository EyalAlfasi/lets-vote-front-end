import { useMemo } from 'react'

export const useGetPercentage = (amount, total) => {

    return useMemo(() => !amount ? 0 : Math.round(amount / total * 100), [amount, total])
}
