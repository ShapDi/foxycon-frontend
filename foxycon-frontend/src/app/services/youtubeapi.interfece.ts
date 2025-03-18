export interface Video {
    id: string
    channel_id: string
    system_id: string   
    title:string
    link: string
    views: number
    likes:number
    release_date: string
    updating_data: string | null
    updating_time: string | null
    add_data: string | null
    add_time: string | null
}