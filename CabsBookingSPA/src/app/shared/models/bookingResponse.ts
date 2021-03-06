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
    to: To
}

interface From {
    placeName: string
}

interface To {
    placeName: string
}