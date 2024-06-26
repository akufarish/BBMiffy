export interface Music {
    id?: string
    musik?: string
    collectionId?: string
    cover?: string
    judul?: string
    expand?: {
        artist?: {
            artist?: string
        }
    }
}