import { useId } from "react"

/**
 * @param key Number | String |
 * @param digits Number | default = 1
 * @param useRId Boolean | default = false
 * @returns Number 32bit integer
 * @example arr.map(ent => (<Component key={useHashKey(ent.title)})))
 */
export const useHashKey = (key: string | number, digits = 1, useRId?: boolean) => {
    let hash = 0, i: number, chr: number
    const str = typeof key === "number" ? (key << 1).toFixed(digits) : key
    if (str.length === 0) {
        return hash
    }
    for (i = 0; i < str.length; i++) {
        chr = ((useRId ? useId() : "") + ":" + str).charCodeAt(i)
        hash = (hash << 5) - hash + chr
        hash |= 0
    }
    return hash
}
