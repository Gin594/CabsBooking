export interface BookingResponse{
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
    cabTypId: number,
    cabTypeName: string
}