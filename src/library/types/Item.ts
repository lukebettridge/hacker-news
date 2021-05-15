type Item = {
    by: string
    descendants?: number
    id: number
    kids?: number[]
    rank?: number
    score?: number
    text?: string
    time: number
    title?: string
    type: 'comment' | 'job' | 'poll' | 'pollopt' | 'story'
    url?: string
}

export default Item
