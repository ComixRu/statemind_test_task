export const formatTVL = (tvl: number): string => {
    if (tvl >= 1000000000) {
        return `${(tvl / 1000000000).toFixed(2)}B`;
    } else if (tvl >= 1000000) {
        return `${(tvl / 1000000).toFixed(2)}M`;
    } else if (tvl >= 1000) {
        return `${(tvl / 1000).toFixed(2)}K`;
    } else {
        return `${tvl}`;
    }
};

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };

    return new Intl.DateTimeFormat('en-GB', options).format(date)
}