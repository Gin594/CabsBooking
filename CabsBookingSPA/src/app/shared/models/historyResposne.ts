export interface HistoryResponse{
    id: number,
    email:string,
    bookingDate: Date,
    bookingTime: string,
    pickupAddress: string,
    landMark: string,
    pickupDate: Date,
    pickupTime: string,
    cabTypeId?: number,
    contactNo: string,
    feedback: string,
    comp_time: string,
    charge: number,
    from: From,
    to: To,
    cab: Cab
}

interface From {
    placeId: number,
    placeName: string
}

interface To {
    placeId: number,
    placeName: string
}

interface Cab{
    cabTypeId: number,
    cabTypeName: string
}